import jsPDF from 'jspdf';
import { Study } from '../types/study';

export function generateStudyPdf(study: Study): void {
  // A4 Landscape: 297 x 210 mm
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 297;
  const pageHeight = 210;

  study.slides.forEach((slide, index) => {
    if (index > 0) {
      doc.addPage('a4', 'landscape');
    }

    // Background: Deep Navy Blue matching the original presentation (#172d59)
    doc.setFillColor(23, 45, 89);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Right top geometric corner design
    doc.setFillColor(39, 70, 133);
    doc.triangle(pageWidth, 0, pageWidth - 60, 0, pageWidth, 45, 'F');
    doc.setFillColor(50, 85, 155);
    doc.triangle(pageWidth, 0, pageWidth - 35, 0, pageWidth, 25, 'F');

    // Slide 1 (Cover)
    if (slide.pageNumber === 1) {
      // Golden yellow title
      doc.setTextColor(253, 224, 71);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(28);
      const titleLines = doc.splitTextToSize(slide.title, 220);
      doc.text(titleLines, 24, 85);

      // Subtitle / Ministry author
      if (slide.subtitle) {
        doc.setTextColor(241, 245, 249);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(16);
        doc.text(slide.subtitle, 24, 115);
      }

      // Open Bible illustration in bottom right
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(15, 23, 42);
      doc.setLineWidth(1.2);
      
      doc.triangle(240, 155, 260, 170, 240, 180, 'FD');
      doc.triangle(260, 170, 280, 155, 280, 180, 'FD');

      // Footer brand
      doc.setTextColor(148, 163, 184);
      doc.setFontSize(10);
      doc.text('CORRENDO PARA DEUS • PLATAFORMA DE ESTUDOS BÍBLICOS', 24, 195);
      return;
    }

    // Normal slide Header (Golden Yellow)
    doc.setTextColor(253, 224, 71);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    const slideTitleLines = doc.splitTextToSize(slide.title, 245);
    doc.text(slideTitleLines, 24, 30);

    let currentY = 32 + slideTitleLines.length * 8;

    // Optional Subtitle
    if (slide.subtitle) {
      doc.setTextColor(224, 231, 255);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(13);
      doc.text(slide.subtitle, 24, currentY);
      currentY += 12;
    }

    // Bible Verses callout
    if (slide.bibleVerses && slide.bibleVerses.length > 0) {
      slide.bibleVerses.forEach((bv) => {
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(15);
        doc.text(bv.ref, 24, currentY);
        currentY += 8;

        if (bv.text) {
          doc.setTextColor(226, 232, 240);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(12.5);
          const verseLines = doc.splitTextToSize(`“${bv.text}”`, 245);
          doc.text(verseLines, 24, currentY);
          currentY += verseLines.length * 6.5 + 5;
        }
      });
    }

    // Bullet points
    if (slide.bulletPoints && slide.bulletPoints.length > 0) {
      slide.bulletPoints.forEach((point) => {
        doc.setTextColor(253, 224, 71);
        doc.setFontSize(13);
        doc.text('•', 24, currentY);

        doc.setTextColor(248, 250, 252);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12.5);

        const pointLines = doc.splitTextToSize(point, 236);
        doc.text(pointLines, 31, currentY);
        currentY += pointLines.length * 6.5 + 4;
      });
    }

    // Options list (quiz/reflection like slide 5)
    if (slide.options && slide.options.length > 0) {
      slide.options.forEach((opt) => {
        doc.setTextColor(253, 224, 71);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text(opt.label, 30, currentY);

        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'normal');
        doc.text(opt.text, 45, currentY);
        currentY += 10;
      });
    }

    // Highlight banner if present (like slide 10 or 15)
    if (slide.highlight) {
      currentY = Math.max(currentY + 6, 80);
      doc.setFillColor(30, 58, 138);
      doc.roundedRect(22, currentY - 6, 253, 34, 4, 4, 'F');
      doc.setDrawColor(253, 224, 71);
      doc.setLineWidth(0.8);
      doc.roundedRect(22, currentY - 6, 253, 34, 4, 4, 'S');

      doc.setTextColor(253, 224, 71);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      const highlightLines = doc.splitTextToSize(slide.highlight, 240);
      doc.text(highlightLines, 28, currentY + 6);
    }

    // Slide footer
    doc.setDrawColor(39, 70, 133);
    doc.setLineWidth(0.3);
    doc.line(24, pageHeight - 16, pageWidth - 24, pageHeight - 16);

    doc.setTextColor(148, 163, 184);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('AD. Ministério Correndo para Deus', 24, pageHeight - 10);
    doc.text(`Página ${slide.pageNumber} de ${study.slides.length}`, pageWidth - 48, pageHeight - 10);
  });

  doc.save(study.pdfFileName || `${study.slug || study.id}.pdf`);
}
