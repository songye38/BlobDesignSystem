export const statusOptions = ['default', 'disabled' ,'focused','writingSingleLine','writingMultiLine','commentWriting'] as const;
export type Status = (typeof statusOptions)[number];