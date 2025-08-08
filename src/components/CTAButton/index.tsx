import React from 'react';
import { Category, categoryToBgColor, labelSuffixMap } from '../../types/CategoryType';
import { colors } from '../../tokens'; // colors 토큰 경로에 맞게 조정

export interface CTAButtonProps {
  category: Category;
  prefix: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ category, prefix }) => {
  const bgColor = categoryToBgColor[category];
  const label = `${prefix} ${labelSuffixMap[category]}`;

  return (
    <div
      style={{
        padding: '4px 8px',
        background: bgColor,
        borderRadius: 4,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <div
        style={{
          color: colors.grayscale[100],
          fontSize: 13,
          fontFamily: 'IBM Plex Sans KR',
          fontWeight: 500,
          lineHeight: '17.94px',
          wordWrap: 'break-word',
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default CTAButton;
