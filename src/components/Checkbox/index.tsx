import React from 'react';
import { BgColorByStatus, OutlineByStatus, Status } from '../../types/CheckboxType';
import CheckIcon from '../../icons/Check';

interface CheckboxProps {
  status: Status;
  onChange?: (status: Status) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ status, onChange }) => {
  const isChecked = status === 'selected' || status === 'alreaySelected';

  const outlineValue = OutlineByStatus[status];

  // gradient가 있으면 border로 처리, 없으면 outline 처리
  const hasGradient = outlineValue.startsWith('linear-gradient');

  const boxStyle: React.CSSProperties = {
    width: 16,
    height: 16,
    borderRadius: 4,
    padding:2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: BgColorByStatus[status],
    cursor: 'pointer',
    ...(hasGradient
      ? {
          border: `1.6px solid transparent`,
          backgroundImage: `${BgColorByStatus[status]}, ${outlineValue}`,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }
      : {
          outline: `1.6px solid ${outlineValue}`,
        }),
  };

  const handleChange = (checked: boolean) => {
    onChange?.(checked ? 'selected' : 'unselected');
  };

  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="checkbox"
        style={{ display: 'none' }}
        checked={isChecked}
        onChange={(e) => handleChange(e.target.checked)}
      />
      <div style={boxStyle}>
        {isChecked && <CheckIcon size="sm" />}
      </div>
    </label>
  );
};

export default Checkbox;
