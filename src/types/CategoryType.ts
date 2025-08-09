// category.ts
import { colors } from '../tokens'; // colors 토큰 경로에 맞게 조정

export type Category = 'recommend' | 'caution' | 'tip' | 'question' | 'help';


//  category 색상 중에서도 default상태의색상값을 가져옴
export const categoryToBgColor: Record<Category, string> = {
  recommend: colors.category.Recommend_basic,
  caution: colors.category.Caution_basic,
  tip: colors.category.Tip_basic,
  question: colors.category.Question_basic,
  help: colors.category.Help_basic,
};

//  category 색상 중에서도 Hover했을 때의 색상값을 가져옴
export const categoryToHoverBgColor: Record<Category, string> = {
  recommend: colors.category.Recommend_hover,
  caution: colors.category.Caution_hover,
  tip: colors.category.Tip_hover,
  question: colors.category.Question_hover,
  help: colors.category.Help_hover,
};


//category 색상 중에서도 Press했을 때의 색상값을 가져옴
export const categoryToPressBgColor: Record<Category, string> = {
  recommend: colors.category.Recommend_press,
  caution: colors.category.Caution_press,
  tip: colors.category.Tip_press,
  question: colors.category.Question_press,
  help: colors.category.Help_press,
};

export const labelSuffixMap: Record<Category, string> = {
  recommend: '추천해요',
  caution: '조심하세요',
  tip: '비추천해요',
  question: '궁금해요',
  help: '도와주세요',
};
