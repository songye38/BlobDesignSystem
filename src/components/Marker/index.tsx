import React from 'react';
import { Category, categoryToBgColor } from '../../types/CategoryType';
import { colors } from '../../tokens/colors';

import HelpIcon from '../../icons/MarkerHelpRequest';
import TipIcon from '../../icons/MarkerNotRecommend';
import QuestionIcon from '../../icons/MarkerQuestion';
import RecommendIcon from '../../icons/MarkerRecommend';
import CationIcon from '../../icons/MarkerWarning';



export interface MarkerProps {
    type: Category;
}


const Marker: React.FC<MarkerProps> = ({
    type
}) => {


    const bgColor = categoryToBgColor[type];

    const containerStyle: React.CSSProperties = {
        width: 57,
        height: 57,
        position: 'relative',
        transform: 'rotate(135deg)', // 마커 모양 회전
        transformOrigin: 'center',
        background: bgColor,
        borderTopLeftRadius: 28,
        borderBottomRightRadius: 28,
        borderBottomLeftRadius: 28,
        outline: `3px ${colors.grayscale[100]} solid`,
        outlineOffset: '-3px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const iconWrapperStyle: React.CSSProperties = {
        transform: 'rotate(-135deg)', // 아이콘은 원래 방향으로 복귀
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };


    const renderIcon = () => {
        switch (type) {
            case 'help':
                return <HelpIcon size={28} />;
            case 'tip':
                return <TipIcon size={28} />;
            case 'question':
                return <QuestionIcon size={28} />;
            case 'recommend':
                return <RecommendIcon size={28} />;
            case 'caution':
                return <CationIcon size={28} />;
            default:
                return null;
        }
    };



    return (
        <div style={containerStyle}>
            <div style={iconWrapperStyle}>
                {renderIcon()}
            </div>
        </div>
    );

};

export default Marker;
