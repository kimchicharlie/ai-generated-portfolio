import { DownloadType, PageFormat } from "./types";
import { Language } from "@/types/language";

export const downloadResume = async (
  format: PageFormat,
  type: DownloadType,
  language: Language
): Promise<void> => {
  try {
    const { toJpeg } = await import("html-to-image");

    const formatSuffix = format === PageFormat.LETTER ? "US-Letter" : "A4";
    const languageSuffix = language === Language.FR ? "FR" : "EN";
    const fileName = `charlie-henin-resume-${formatSuffix}-${languageSuffix}`;

    const element = document.getElementById("resume-content");
    if (!element) {
      throw new Error("Resume content not found");
    }

    const { jsPDF } = await import("jspdf");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: format === PageFormat.LETTER ? [216, 279] : "a4",
    });

    const pageWidth = format === PageFormat.LETTER ? 216 : 210;
    const pageHeight = format === PageFormat.LETTER ? 279 : 297;
    const margin = 15;
    const contentWidth = pageWidth - 2 * margin;
    const contentHeight = pageHeight - 2 * margin;

    let currentY = margin;
    let pageCount = 1;

    const addPageIfNeeded = (requiredHeight: number): void => {
      if (currentY + requiredHeight > pageHeight - margin) {
        pdf.addPage();
        pageCount++;
        currentY = margin;
      }
    };

    const addSectionToPDF = async (
      sectionElement: HTMLElement,
      sectionName: string
    ): Promise<void> => {
      try {
        const sectionDataUrl = await toJpeg(sectionElement, {
          quality: 0.95,
          pixelRatio: 2,
          backgroundColor: "#ffffff",
          filter: (node) => {
            if (node.classList) {
              return !node.classList.contains("no-print");
            }
            return true;
          },
        });

        const img = new Image();
        return new Promise((resolve) => {
          img.onload = () => {
            const imgAspectRatio = img.height / img.width;
            const imgWidth = contentWidth;
            const imgHeight = imgWidth * imgAspectRatio;

            addPageIfNeeded(imgHeight);

            pdf.addImage(
              sectionDataUrl,
              "JPEG",
              margin,
              currentY,
              imgWidth,
              imgHeight
            );
            currentY += imgHeight + 5;

            resolve();
          };
          img.onerror = () => {
            console.error(`Error loading ${sectionName} image`);
            resolve();
          };
          img.src = sectionDataUrl;
        });
      } catch (error) {
        console.error(`Error capturing ${sectionName}:`, error);
      }
    };

    try {
      const headerSection = element.querySelector(
        ".bg-gradient-to-r"
      ) as HTMLElement;
      const sections = Array.from(
        element.querySelectorAll("section")
      ) as HTMLElement[];

      const aboutSection = sections.find((s) => {
        const h2 = s.querySelector("h2");
        const text = h2?.textContent?.toLowerCase() || "";
        return (
          h2 &&
          (text.includes("about") ||
            text.includes("propos") ||
            text.includes("à propos"))
        );
      });

      const experienceSection = sections.find((s) => {
        const h2 = s.querySelector("h2");
        const text = h2?.textContent?.toLowerCase() || "";
        return (
          h2 && (text.includes("experience") || text.includes("expérience"))
        );
      });

      const educationSection = sections.find((s) => {
        const h2 = s.querySelector("h2");
        const text = h2?.textContent?.toLowerCase() || "";
        return (
          h2 &&
          (text.includes("education") ||
            text.includes("éducation") ||
            text.includes("formation"))
        );
      });

      const allSections = Array.from(
        element.querySelectorAll("section")
      ) as HTMLElement[];

      const techSection = allSections.find((s) => {
        const h2 = s.querySelector("h2");
        const text = h2?.textContent?.toLowerCase() || "";
        return (
          h2 &&
          (text.includes("technolog") ||
            text.includes("compétenc") ||
            text.includes("technologies"))
        );
      });

      const hobbiesSection = allSections.find((s) => {
        const h2 = s.querySelector("h2");
        const text = h2?.textContent?.toLowerCase() || "";
        return (
          h2 &&
          (text.includes("hobbies") ||
            text.includes("loisir") ||
            text.includes("centres d'intérêt") ||
            text.includes("passions"))
        );
      });

      if (headerSection) {
        await addSectionToPDF(headerSection, "Header");
      }

      if (aboutSection) {
        await addSectionToPDF(aboutSection, "About");
      }

      if (techSection) {
        await addSectionToPDF(techSection, "Technologies");
      }

      if (experienceSection) {
        const expTitle = experienceSection.querySelector("h2") as HTMLElement;
        if (expTitle) {
          await addSectionToPDF(expTitle, "Experience Title");
        }

        const experienceItems = experienceSection.querySelectorAll(
          ".border-l-4.border-primary-500"
        ) as NodeListOf<HTMLElement>;
        for (let i = 0; i < experienceItems.length; i++) {
          await addSectionToPDF(experienceItems[i], `Experience ${i + 1}`);
        }
      }

      if (educationSection) {
        await addSectionToPDF(educationSection, "Education");
      }

      if (hobbiesSection) {
        console.log("Adding Hobbies section");
        await addSectionToPDF(hobbiesSection, "Hobbies");
      }

      pdf.save(`${fileName}.pdf`);
    } catch (error) {
      console.error("Error in semantic PDF generation:", error);

      const dataUrl = await toJpeg(element, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
        filter: (node) => {
          if (node.classList) {
            return !node.classList.contains("no-print");
          }
          return true;
        },
      });

      const img = new Image();
      img.onload = () => {
        const imgAspectRatio = img.height / img.width;
        const imgWidth = contentWidth;
        const imgHeight = imgWidth * imgAspectRatio;

        if (imgHeight <= contentHeight) {
          const y = (pageHeight - imgHeight) / 2;
          pdf.addImage(dataUrl, "JPEG", margin, y, imgWidth, imgHeight);
        } else {
          const numPages = Math.ceil(imgHeight / contentHeight);
          for (let i = 0; i < numPages; i++) {
            if (i > 0) pdf.addPage();

            const sourceY = (i * contentHeight * img.height) / imgHeight;
            const sourceHeight = Math.min(
              (contentHeight * img.height) / imgHeight,
              img.height - sourceY
            );

            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            canvas.width = img.width;
            canvas.height = sourceHeight;

            ctx.drawImage(
              img,
              0,
              sourceY,
              img.width,
              sourceHeight,
              0,
              0,
              img.width,
              sourceHeight
            );
            const croppedDataUrl = canvas.toDataURL("image/jpeg", 0.95);

            pdf.addImage(
              croppedDataUrl,
              "JPEG",
              margin,
              margin,
              imgWidth,
              contentHeight
            );
          }
        }

        pdf.save(`${fileName}.pdf`);
        console.log("Fallback PDF completed!");
      };
      img.src = dataUrl;
    }

    console.log("PDF generation completed successfully!");
  } catch (error) {
    console.error(`Error generating ${type}:`, error);
    alert(`Error generating ${type}. Please try again.`);
  }
};
