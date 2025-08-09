export const statusOptions = ['hover', 'default' ,'pressed','disabled','cancel'] as const;
export type Status = (typeof statusOptions)[number];

export const TypeOptions = ['primary', 'secondary'] as const;
export type Type = (typeof TypeOptions)[number];

