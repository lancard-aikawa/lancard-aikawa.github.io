export const SITE = {
  title: 'lancard-aikawa',
  description: '個人で作っているツールの紹介と更新履歴',
  github: 'https://github.com/lancard-aikawa',
};

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' });

export const fmtSize = (n: number) =>
  n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.ceil(n / 1024)} KB`;

type ProjectLike = { data: { name: string; latest: { date: Date } | null } };

/** 一覧の並び順: 最新の Release が新しい順。Release の無いものは後ろに名前順 */
export const byLatest = (a: ProjectLike, b: ProjectLike) =>
  (b.data.latest?.date.getTime() ?? 0) - (a.data.latest?.date.getTime() ?? 0) ||
  a.data.name.localeCompare(b.data.name);
