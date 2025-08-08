import React, { SVGProps } from 'react';
import { Purpose, CTAType, Status, labelSuffixMap } from '../../types/CTAButtontypes';
import { colors } from '../../tokens/colors';

import ExploreIcon from '../../icons/Explore';
import WriteIcon from '../../icons/Write';
import BlobHeart from '../../icons/BlobHeart';

export interface CTAButtonProps {
    purpose: Purpose;
    ctatype: CTAType;
    status: Status;
}


const CTAButton: React.FC<CTAButtonProps> = ({ purpose, ctatype, status }) => {

    let bgColors = colors.primary[100];
    if (status === 'hover') bgColors = colors.primary[300];
    const gradientBackground = `linear-gradient(90deg, ${bgColors[0]} 0%, ${bgColors[1]} 100%)`;

    const containerStyle: React.CSSProperties = {
        width: 'auto',
        height: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        background: gradientBackground,
        borderRadius: 12,
        flexDirection: 'column', // 여기서 타입이 맞아야 함
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 55,
        display: 'inline-flex',
    };

    const iconWrapperStyle = {
        width: 24,
        height: 24,
        position: 'relative' as const,
        overflow: 'hidden',
    };

    const iconStyle = {
        width: 20,
        height: 17.67,
        left: 2,
        top: 3,
        position: 'absolute' as const,
        outline: '2px var(--BDS-Grayscale-10, #262626) solid',
        outlineOffset: '-1px',
    };

    const textStyle = {
        color: colors.grayscale[1100],
        fontSize: 18,
        fontFamily: 'IBM Plex Sans KR',
        fontWeight: '600',
        lineHeight: 25.92,
        wordWrap: 'break-word' as const,
    };


    const renderIcon = () => {
        switch (ctatype) {
            case 'writing':
                return <WriteIcon size={24} />;
            case 'explore':
                return <ExploreIcon size={24} />;
            case 'article':
                return <BlobHeart size={24} />;
            default:
                return null;
        }
    };


    if (purpose === 'desktop') {
        return (
            <div style={containerStyle}>
                <div style={iconWrapperStyle}>{renderIcon()}</div>
                <div
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 8,
                        display: 'inline-flex',
                    }}
                >
                    <div style={textStyle}>{labelSuffixMap[ctatype]}</div>
                </div>
            </div>
        );
    }

    // mobile or tablet
    return (
        <div style={containerStyle}>
            <div style={iconWrapperStyle}>{renderIcon()}</div>
            <div style={textStyle}>{labelSuffixMap[ctatype]}</div>
        </div>
    );
};
export default CTAButton;
