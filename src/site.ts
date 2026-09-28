export const SITE = {
  title: 'lancard-aikawa',
  description: '個人で作っているツールの紹介と更新履歴',
  github: 'https://github.com/lancard-aikawa',
};

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' });

export const fmtSize = (n: number) =>
  n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.ceil(n / 1024)} KB`;
