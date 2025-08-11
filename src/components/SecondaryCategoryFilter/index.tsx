import React from 'react';
import {colors,typography} from '../../tokens'

import {Category,categoryToPressBgColor} from '../../types/CategoryType'
import CloseIcon from '../../icons/CloseIcon'


interface SecondaryCategoryFilterProps {
  label: string;
  status: 'default' | 'selected';
  category: Category;
}

const SecondaryCategoryFilter: React.FC<SecondaryCategoryFilterProps> = ({
  label,
  status,
  category
}) => {
  // 공통 스타일
  const baseStyle: React.CSSProperties = {
    width: 'auto',
    height: 'auto',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    display: 'inline-flex',
    cursor: 'pointer',
    userSelect: 'none',
    fontFamily: 'IBM Plex Sans KR',
    wordWrap: 'break-word',
    ...typography.Label1.Normal
  };

  // 상태에 따른 스타일
  const styles =
    status === 'selected'
      ? {
          ...baseStyle,
          background: categoryToPressBgColor[category],
          color: colors.grayscale[100],
          outline: 'none',
        }
      : {
          ...baseStyle,
          background: colors.grayscale[100],
          color: categoryToPressBgColor[category],
          outline: `1px ${categoryToPressBgColor[category]} solid`,
          outlineOffset: '-1px',
        };

  return (
    <div style={styles}>
      <div>{label}</div>
      {status === 'selected' && <CloseIcon />}
    </div>
  );
};

export default SecondaryCategoryFilter;
