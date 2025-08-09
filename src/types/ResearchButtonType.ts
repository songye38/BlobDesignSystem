import {colors} from '../tokens/colors'

export const TypeOptions = ['desktop', 'mobile'] as const;
export type Type = (typeof TypeOptions)[number];

export const StatusOptions = ['default', 'hover'] as const;
export type Status = (typeof StatusOptions)[number];


export const backgroundColorMap: Record<Status, { background: string }> = {
  default: { background: colors.secondary.Blue},
  hover: { background:'#3B4ACC'},
};