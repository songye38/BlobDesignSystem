import {colors} from '../tokens/colors'

export const TypeOptions = ['profileEdit', 'gotoMypage', 'logout','imageEdit'] as const;
export type Type = (typeof TypeOptions)[number];

export const StatusOptions = ['default', 'hover', 'active'] as const;
export type Status = (typeof StatusOptions)[number];


export const labelMap: Record<Type, string> = {
  profileEdit: '프로필 수정',
  gotoMypage: '마이페이지',
  logout: '로그아웃',
  imageEdit: '이미지 수정',
};

export const styleMap: Record<Status, { background: string; outlineColor: string }> = {
  default: { background: colors.grayscale[100], outlineColor: colors.grayscale[1300] },
  hover: { background:colors.grayscale[400], outlineColor: colors.grayscale[1300] },
  active: { background: colors.grayscale[500], outlineColor: colors.grayscale[1300] },
};