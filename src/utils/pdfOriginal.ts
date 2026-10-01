/**
 * Entrega o caminho do PDF ORIGINAL da pasta public/estudos/.
 * Respeita a base de publicação do Vite / GitHub Pages.
 */
export const getPdfOriginalUrl = (pdfFileName: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanName = pdfFileName.replace(/^\/+/, '').replace(/^estudos\//, '');
  return `${cleanBase}estudos/${cleanName}`;
};
