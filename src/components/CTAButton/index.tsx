import React from 'react';
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
    let widthSize = 'auto';
    if (status === 'hover') bgColors = colors.primary[300];
    if (purpose=='mobile') widthSize = '335px';
    const gradientBackground = `linear-gradient(90deg, ${bgColors[0]} 0%, ${bgColors[1]} 100%)`;

    const containerStyle: React.CSSProperties = {
        width: widthSize,
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



    const textStyle = {
        color: colors.grayscale[1100],
        fontSize: 18,
        fontFamily: 'IBM Plex Sans KR',
        fontWeight: '600',
        lineHeight: '25.92px',
        wordWrap: 'break-word' as const,
    };


    const renderIcon = () => {
        switch (ctatype) {
            case 'writing':
                return <WriteIcon size="md" />;  // 숫자 대신 string key
            case 'explore':
                return <ExploreIcon size="md" />;
            case 'article':
                return <BlobHeart size="md" />;
            default:
                return null;
        }
    };


    if (purpose === 'desktop') {
        return (
            <div style={containerStyle}>
                <div>{renderIcon()}</div>
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
            <div>{renderIcon()}</div>
            <div style={textStyle}>{labelSuffixMap[ctatype]}</div>
        </div>
    );
};
export default CTAButton;
