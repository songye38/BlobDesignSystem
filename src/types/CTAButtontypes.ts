export const PurposeOptions = ['desktop', 'tablet', 'mobile'] as const;
export type Purpose = (typeof PurposeOptions)[number];

export const CTATypeOptions = ['writing', 'article', 'explore'] as const;
export type CTAType = (typeof CTATypeOptions)[number];

export const StatusOptions = ['default', 'hover', 'disabled'] as const;
export type Status = (typeof StatusOptions)[number];

export const labelSuffixMap: Record<CTAType, string> = {
  writing: '직접 글 작성하기',
  article: '실시간 인기글 보기',
  explore: '새로운 도시 구경하기',
};


