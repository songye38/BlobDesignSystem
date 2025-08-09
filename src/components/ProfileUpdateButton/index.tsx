import React from 'react';

import {Type, Status,labelMap,styleMap} from '../../types/ProfileUpdateButtonType'


interface ProfileUpdateButtonProps {
  type: Type;
  status: Status;
}

const ProfileUpdateButton: React.FC<ProfileUpdateButtonProps> = ({ type, status }) => {
  const label = labelMap[type];
  const { background, outlineColor } = styleMap[status];

  return (
    <div
      style={{
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8,
        position: 'absolute',
        background,
        borderRadius: 24,
        outline: `1px solid ${outlineColor}`,
        outlineOffset: '-1px',
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: 10,
        userSelect: 'none',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          color: 'var(--BDS-Grayscale-13, black)',
          fontSize:13,
          fontFamily: 'IBM Plex Sans KR',
          fontWeight:500,
          lineHeight:'19.88px',
          wordWrap: 'break-word',
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default ProfileUpdateButton;
