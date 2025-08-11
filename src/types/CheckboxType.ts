
import {colors} from '../../src/tokens/colors'

export const StatusOptions = ['unselected', 'disabled', 'intermeditate','selected','alreaySelected'] as const;
export type Status = (typeof StatusOptions)[number];

export const BgColorByStatus: Record<Status, string> = {
  unselected: colors.grayscale[100],
  disabled: colors.grayscale[300],
  intermeditate: colors.grayscale[100],
  selected: `linear-gradient(90deg, ${colors.primary[400][0]} 0%, ${colors.primary[400][1]} 100%)`,
  alreaySelected: colors.grayscale[300],
};

export const OutlineByStatus: Record<Status, string> = {
  unselected: colors.grayscale[500],
  disabled: colors.grayscale[500],
  intermeditate: `linear-gradient(90deg, ${colors.primary[400][0]} 0%, ${colors.primary[400][1]} 100%)`,
  selected: colors.grayscale[100],
  alreaySelected: colors.grayscale[500],
};


