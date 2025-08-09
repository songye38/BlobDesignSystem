import React from 'react';
import { Category, categoryToHoverBgColor } from '../../types/CategoryType';

interface MarkerDetailProps {
    type: Category; //위험, 추천, 팁, 질문과 같은 항목이 들어온다 -> 배경색과 연관
    prefix: string; // 예: '호텔'
    timeAgo: number;  // 예: '17' + '시간전'은 따로 붙이기
    title: string;    // 예: '간단한 제목이 들어갑니다.'
}

const MarkerDetail: React.FC<MarkerDetailProps> = ({ type, prefix, timeAgo, title }) => {



    const bgColor = categoryToHoverBgColor[type];

    const containerStyle: React.CSSProperties = {
        width: 'auto',
        height: 'auto',
        //boxShadow: '0px 4px 12px 8px rgba(0, 0, 0, 0.28)',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'inline-flex',
    };

    const contentWrapperStyle: React.CSSProperties = {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 16,
        paddingBottom: 16,
        background: bgColor,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
    };

    const innerWrapperStyle: React.CSSProperties = {
        width: 'auto',
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 4,
        display: 'inline-flex',
    };

    const headerRowStyle: React.CSSProperties = {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
    };

    const prefixTextStyle: React.CSSProperties = {
        color: 'black',
        fontSize: 14,
        fontFamily: 'IBM Plex Sans KR',
        fontWeight: 600,
        lineHeight: '19.88px',
        wordWrap: 'break-word',
    };

    const timeTextStyle: React.CSSProperties = {
        color: 'var(--BDS-Grayscale-7, #8C8C8C)',
        fontSize: 12,
        fontFamily: 'IBM Plex Sans',
        fontWeight: 400,
        lineHeight: '15.96px',
        wordWrap: 'break-word',
    };

    const titleWrapperStyle: React.CSSProperties = {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
    };

    const titleTextStyle: React.CSSProperties = {
        width: 169,
        color: 'black',
        fontSize: 15,
        fontFamily: 'IBM Plex Sans KR',
        fontWeight: 400,
        lineHeight: '21.90px',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 1, // 보여줄 줄 수
        WebkitBoxOrient: 'vertical',
    };

    return (
        <div style={containerStyle}>
            <div style={contentWrapperStyle}>
                <div style={innerWrapperStyle}>
                    <div style={headerRowStyle}>
                        <div style={prefixTextStyle}>{prefix}</div>
                        <div style={timeTextStyle}>{timeAgo}시간전</div>
                    </div>
                    <div style={titleWrapperStyle}>
                        <div style={titleTextStyle}>{title}</div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    display: 'flex',
                }}
            />
        </div>
    );
};

export default MarkerDetail;
