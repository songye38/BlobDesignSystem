type GradientColor = [string, string];

type PrimaryColorKeys = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type GrayscaleKeys = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200 | 1300;

type SecondaryColors = 'Yellow' | 'Blue' | 'Green';

type CategoryColors =
  | 'Recommend_hover'
  | 'Recommend_basic'
  | 'Recommend_press'
  | 'Caution_hover'
  | 'Caution_basic'
  | 'Caution_press'
  | 'Tip_hover'
  | 'Tip_basic'
  | 'Tip_press'
  | 'Question_hover'
  | 'Question_basic'
  | 'Question_press'
  | 'Help_hover'
  | 'Help_basic'
  | 'Help_press';

type SystemColors =
  | 'Success'
  | 'Success_bg'
  | 'Warning'
  | 'Warning_bg'
  | 'Error'
  | 'Error_bg'
  | 'Complete'
  | 'Complete_bg';

export const colors: {
  primary: Record<PrimaryColorKeys, GradientColor>;
  secondary: Record<SecondaryColors, string>;
  category: Record<CategoryColors, string>;
  system: Record<SystemColors, string>;
  grayscale: Record<GrayscaleKeys, string>;
} = {
  primary: {
    50: ['#FFF2EA', '#FFF0F8'],
    100: ['#FFE0CE', '#FFDAEE'],
    200: ['#FFC7A6', '#FFBDE0'],
    300: ['#FFAC7D', '#FE9ED2'],
    400: ['#FF9456', '#FE81C4'],
    500: ['#FF7C31', '#FE65B7'],
    600: ['#D9692A', '#D8569C'],
    700: ['#B55823', '#B44882'],
    800: ['#91471C', '#913A68'],
    900: ['#733816', '#722D52'],
  },
  secondary: {
    Yellow: '#FFF50C',
    Blue: '#1D2BA4',
    Green: '#96E6BB',
  },
  category: {
    Recommend_hover: '#F8BFDE',
    Recommend_basic: '#EB2F96',
    Recommend_press: '#D32A87',
    Tip_hover: '#FDCAB9',
    Tip_basic: '#FA541C',
    Tip_press: '#E14C19',
    Question_hover: '#B6ECEC',
    Question_basic: '#13C2C2',
    Question_press: '#11AFAF',
    Caution_hover: '#FDF4B6',
    Caution_basic: '#FADB14',
    Caution_press: '#E1C512',
    Help_hover: '#E2F3B5',
    Help_basic: '#A0D911',
    Help_press: '#90C30F',
  },
  system: {
    Success: '#52C41A',
    Success_bg: '#CFF2BE',
    Warning: '#FAAD14',
    Warning_bg: '#FBE2AE',
    Error: '#FF4D4F',
    Error_bg: '#FFAEAF',
    Complete: '#1890FF',
    Complete_bg: '#ABD6FE',
  },
  grayscale: {
    100: '#ffffff',
    200: '#fafafa',
    300: '#f5f5f5',
    400: '#f0f0f0',
    500: '#d9d9d9',
    600: '#BFBFBF',
    700: '#8c8c8c',
    800: '#595959',
    900: '#434343',
    1000: '#262626',
    1100: '#1f1f1f',
    1200: '#141414',
    1300: '#000000',
  },
};
