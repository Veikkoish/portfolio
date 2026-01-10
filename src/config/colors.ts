export const colors = {
  bgDark: '#161514',
  hardware: '#2563ff',    // vivid blue
  software: '#10a081',    // bright green
  mechanical: '#da7400',  // punchy orange
  text: '#f5f5f5',
  textSecondary: '#a0a0a0',
  cardBg: '#1a1a1a',
};
//#0c0804
//#05040c
export type Category = 'hardware' | 'software' | 'mechanical' | 'all';

export const categoryColors: Record<Exclude<Category, 'all'>, string> = {
  hardware: colors.hardware,
  software: colors.software,
  mechanical: colors.mechanical,
};

