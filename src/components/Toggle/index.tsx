import React from 'react';


import {colors} from '../../tokens/colors'


export type Status = 'toggled' | 'untoggled';


interface ToggleProps {
  status: Status;
  onChange?: (status: Status) => void;
}

const Toggle: React.FC<ToggleProps> = ({ status, onChange }) => {
  // checked 여부는 status가 'selected'인지로 판단 (필요하면 더 확장 가능)
  const checked = status === 'toggled';

  // 공통 스타일
  const baseStyle: React.CSSProperties = {
    width: 'auto',
    height: 'auto',
    paddingTop: 2,
    paddingBottom: 2,
    position: 'relative',
    borderRadius: 16,
    alignItems: 'center',
    display: 'inline-flex',
    cursor: 'pointer',
    userSelect: 'none',
  };

  // 체크 여부에 따른 스타일 분기
  const containerStyle: React.CSSProperties = checked
    ? {
        ...baseStyle,
        paddingLeft: 24,
        paddingRight: 2,
        background: colors.system.Complete,
        justifyContent: 'flex-end',
      }
    : {
        ...baseStyle,
        paddingLeft: 2,
        paddingRight: 24,
        background: '#BFBFBF',
        justifyContent: 'flex-start',
        gap: 4,
      };

  const shadowStyle: React.CSSProperties = checked
    ? {
        width: 52,
        height: 30,
        left: -4,
        top: -4,
        position: 'absolute',
        opacity: 0,
        background: colors.system.Complete,
        boxShadow: '2px 2px 2px',
        borderRadius: 23,
        filter: 'blur(1px)',
      }
    : {
        width: 52,
        height: 30,
        left: -4,
        top: -4,
        position: 'absolute',
        opacity: 0.01,
        background: 'black',
        boxShadow: '2px 2px 2px',
        borderRadius: 23,
        filter: 'blur(1px)',
      };

  const knobWrapperStyle: React.CSSProperties = {
    width: 18,
    height: 18,
    position: 'relative',
    boxShadow: '0px 2px 4px rgba(0, 35, 11, 0.20)',
    overflow: 'hidden',
    borderRadius: 77,
  };

  const knobInnerStyle: React.CSSProperties = {
    width: 18,
    height: 18,
    left: 0,
    top: 0,
    position: 'absolute',
    background: 'white',
    borderRadius: 16,
  };

  const handleClick = () => {
    const newStatus = checked ? 'untoggled' : 'toggled';
    onChange?.(newStatus);
  };

  return (
    <div
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      style={containerStyle}
      data-checked={checked}
      data-animation="false"
      data-icon="false"
      data-loading="false"
      data-size="medium"
      data-text="false"
    >
      <div style={shadowStyle} />
      <div style={knobWrapperStyle}>
        <div style={knobInnerStyle} />
      </div>
    </div>
  );
};

export default Toggle;
