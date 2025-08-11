import React from 'react';
import { Category, categoryToBgColor, typeToLabelMap } from '../../types/CategoryType';
import { colors, typography } from '../../tokens';

import RecommendIcon from '../../icons/RecommendIcon';
import TipIcon from '../../icons/TipIcon';
import CautionIcon from '../../icons/CautionIcon';
import HelpIcon from '../../icons/HelpIcon';
import QuestionIcon from '../../icons/QuestionIcon';
import RightIcon from '../../icons/RightIcon';

interface FirstCategoryFilterProps {
  category: Category;
  status: 'default' | 'selected';
}

const iconMap = {
  recommend: RecommendIcon,
  tip: TipIcon,
  caution: CautionIcon,
  help: HelpIcon,
  question: QuestionIcon,
};

const FirstCategoryFilter: React.FC<FirstCategoryFilterProps> = ({ category, status }) => {
  const outlineColor = categoryToBgColor[category];
  const color = status === 'selected' ? outlineColor : 'black';

  // category에 따라 적절한 아이콘 컴포넌트 가져오기
  // 예를 들어 category가 'recommend'라면 RecommendIcon
  // 여기선 category 이름이 iconMap 키와 같다는 가정 하에 아래처럼 뽑음
  const IconComponent = iconMap[category] || QuestionIcon;

  return (
    <div
      style={{
        width: 'auto',
        height: 'auto',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 8,
        background: colors.grayscale[100],
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
        cursor: 'pointer',
        userSelect: 'none',
        outline: status === 'selected' ? `1.6px ${outlineColor} solid` : 'none',
      }}
    >
      <IconComponent color={categoryToBgColor[category]} size={16} />
      <div
        style={{
          textAlign: 'center',
          color,
          fontFamily: 'IBM Plex Sans KR',
          wordWrap: 'break-word',
          userSelect: 'none',
          ...typography.Body1.Normal,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        {typeToLabelMap[category]}
        <RightIcon color={color} size={24} />
      </div>
    </div>
  );
};

export default FirstCategoryFilter;
