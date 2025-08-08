import React from 'react';
import { Category, categoryToBgColor, labelSuffixMap,colors } from '../../tokens';

export interface ChipProps {
  category: Category;
  prefix: string;
}

const Chip: React.FC<ChipProps> = ({ category, prefix }) => {
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

export default Chip;
