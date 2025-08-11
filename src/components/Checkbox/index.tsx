import React from 'react';
import { BgColorByStatus, OutlineByStatus, Status } from '../../types/CheckboxType';
import CheckIcon from '../../icons/Check';

interface CheckboxProps {
  status: Status;
  onChange?: (status: Status) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ status, onChange }) => {
  const isChecked = status === 'selected' || status === 'alreaySelected';

  // outline이 gradient인 경우 처리
  const outlineValue = OutlineByStatus[status];
  const isGradientOutline = outlineValue.startsWith('linear-gradient');

  const boxStyle: React.CSSProperties = {
    width: 16,
    height: 16,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: BgColorByStatus[status],
  };

  if (isGradientOutline) {
    // gradient border 흉내내기: border 투명 + backgroundClip
    boxStyle.border = '1.6px solid transparent';
    boxStyle.background = BgColorByStatus[status];
    boxStyle.backgroundClip = 'padding-box';
    // gradient border를 진짜 만들려면 wrapper div로 감싸서 처리하는 방법도 있음
  } else {
    boxStyle.outline = `1.6px solid ${outlineValue}`;
  }

  const handleChange = (checked: boolean) => {
    // 상태 전환 로직 (필요에 맞게 확장 가능)
    if (checked) {
      onChange?.('selected');
    } else {
      onChange?.('unselected');
    }
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
        {isChecked && <CheckIcon size="md" />}
      </div>
    </label>
  );
};

export default Checkbox;
