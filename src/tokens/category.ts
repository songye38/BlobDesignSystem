// category.ts
import { colors } from './colors'; // colors 토큰 경로에 맞게 조정

export type Category = 'recommend' | 'caution' | 'tip' | 'question' | 'help';

export const categoryToBgColor: Record<Category, string> = {
  recommend: colors.category.Recommend_basic,
  caution: colors.category.Caution_basic,
  tip: colors.category.Tip_basic,
  question: colors.category.Question_basic,
  help: colors.category.Help_basic,
};

export const labelSuffixMap: Record<Category, string> = {
  recommend: '추천해요',
  caution: '조심하세요',
  tip: '비추천해요',
  question: '궁금해요',
  help: '도와주세요',
};
