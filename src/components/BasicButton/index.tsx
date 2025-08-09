import React from 'react';
import { Status, Type } from '../../types/BasicButtonType';
import { colors } from '../../tokens/colors';

interface BasicButtonProps {
  status: Status;
  type: Type;
  label: string;
  onClick?: () => void;
}

// type + status별 스타일 매핑
const buttonStyles: Record<Type, Record<Status, React.CSSProperties>> = {
  primary: {
    default: {
      background: `linear-gradient(90deg, ${colors.primary[400]} 0%, ${colors.primary[500]} 100%)`,
      color: colors.grayscale[100],
      border: 'none',
    },
    hover: {
      background: `linear-gradient(90deg, ${colors.primary[300]} 0%, ${colors.primary[400]} 100%)`,
      color: colors.grayscale[100],
      border: 'none',
    },
    pressed: {
      background: `linear-gradient(90deg, ${colors.primary[500]} 0%, ${colors.primary[600]} 100%)`,
      color: colors.grayscale[100],
      border: 'none',
    },
    disabled: {
      background: colors.grayscale[400],
      color: colors.grayscale[600],
      cursor: 'not-allowed',
      border: 'none',
      opacity: 0.6,
    },
    cancel: {
      background: colors.grayscale[400],
      color: colors.grayscale[1300],
      border: 'none',
      opacity: 0.6,
    },
  },
  secondary: {
    default: {
      background: colors.grayscale[100],
      color: colors.primary[400][1],
      border: `1px solid ${colors.primary[50]}`,
    },
    hover: {
      background: colors.primary[50][1],
      color: colors.primary[200][1],
      border: `1px solid ${colors.primary[50]}`,
    },
    pressed: {
      background: colors.primary[200][1],
      color: colors.primary[400][1],
      border: `1px solid ${colors.primary[50]}`,
    },
    disabled: {
      background: colors.grayscale[100],
      color: colors.grayscale[600],
      border: `1px solid ${colors.grayscale[600]}`,
      cursor: 'not-allowed',
      opacity: 0.6,
    },
    cancel: {
      background: colors.grayscale[100],
      color: colors.grayscale[1300],
      border: `1px solid ${colors.grayscale[600]}`,
      opacity: 0.6,
    },
  },
};

const BasicButton: React.FC<BasicButtonProps> = ({ status, type, label, onClick }) => {
  const baseStyle: React.CSSProperties = {
    width: 'auto',
    height: 'auto',
    padding: '8px 16px',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'inline-flex',
    fontSize: 14,
    fontFamily: 'IBM Plex Sans KR',
    fontWeight: 600,
    lineHeight: '19.88px',
    cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
  };

  // status가 hover나 pressed일 땐 따로 처리할 수 있는데, 지금은 style만 지정해둔 상태니까
  // 여기선 기본 스타일 + 상태별 스타일 합치기
  const style = {
    ...baseStyle,
    ...buttonStyles[type][status],
  };

  return (
    <div
      style={style}
      onClick={status !== 'disabled' ? onClick : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && status !== 'disabled') {
          onClick && onClick();
        }
      }}
      aria-disabled={status === 'disabled'}
    >
      {label}
    </div>
  );
};

export default BasicButton;
