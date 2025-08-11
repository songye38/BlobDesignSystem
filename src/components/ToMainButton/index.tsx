import React from 'react';
import { colors, typography } from '../../tokens'
import HomeIcon from '../../icons/Home';

type Status = 'default' | 'hover';

interface TomainButtonProps {
    status: Status;
}

const TomainButton: React.FC<TomainButtonProps> = ({ status }) => {
    const baseStyle: React.CSSProperties = {
        width: 'auto',
        height: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        background:
            status === 'default'
                ? `linear-gradient(90deg, ${colors.primary[100]} 0%, ${colors.primary[100]} 100%)`
                : `linear-gradient(90deg, ${colors.primary[300]} 0%, ${colors.primary[300]} 100%)`
    };

    const iconWrapperStyle: React.CSSProperties = {
        width: 24,
        height: 24,
        position: 'relative',
        overflow: 'hidden',
    };

    const textStyle: React.CSSProperties = {
        color: colors.grayscale[1000],
        fontFamily: 'IBM Plex Sans KR',
        wordWrap: 'break-word',
        ...typography.Headline1
    };

    return (
        <div style={baseStyle}>
            <div style={iconWrapperStyle}>
                <HomeIcon size="md"/>
            </div>
            <div style={textStyle}>메인으로 이동</div>
        </div>
    );
};

export default TomainButton;
