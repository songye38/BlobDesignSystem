import React from 'react';
import { colors, typography, iconSizes } from '../../tokens';
import { Type, Status, backgroundColorMap } from '../../types/ResearchButtonType';

import ResearchIcon from '../../icons/Refresh';

interface ResearchButtonProps {
    type: Type;
    status: Status;
}

const typographyMap: Record<Type, React.CSSProperties> = {
  desktop: typography.Body1.Normal,   
  mobile: typography.Label1.Normal   
};

const iconSizeMap: Record<Type, number> = {
  desktop: iconSizes.sm,
  mobile: iconSizes.xs
};

const ResearchButton: React.FC<ResearchButtonProps> = ({ type, status }) => {
    const { background } = backgroundColorMap[status];

    return (
        <div
            style={{
                width: 'auto',
                height: 'auto',
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                background,
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
                display: 'inline-flex',
                cursor: 'pointer',
                userSelect: 'none',
            }}
        >
                <ResearchIcon size={iconSizeMap[type]} />
                <div
                    style={{
                        color: colors.grayscale[200],
                        fontFamily: 'IBM Plex Sans KR',
                        wordWrap: 'break-word',
                        ...typographyMap[type],
                    }}
                >
                    현 지도에서 검색
                </div>
            </div>
    );
};

export default ResearchButton;
