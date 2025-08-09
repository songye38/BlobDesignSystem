import React from 'react';

import { MainPageTabType } from '../../types/MyTabType'

interface MypageTabProps {
    activeTab: MainPageTabType;
    onTabChange: (tab: 'myPosts' | 'savedPosts' | 'commentedPosts') => void;
}

const MypageTab: React.FC<MypageTabProps> = ({ activeTab, onTabChange }) => {

    const containerStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 16,
        display: 'inline-flex',
    };

    const tabBaseStyle: React.CSSProperties = {
        height: 'auto',
        paddingTop: 16,
        marginBottom: '200px',
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        cursor: 'pointer',
    };

    const labelWrapperStyle = (isActive: boolean): React.CSSProperties => ({
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        paddingBottom: '12px',
        borderBottom: isActive ? '1px var(--BDS-Grayscale-13, black) solid' : 'none',
    });

    const labelTextStyle = (isActive: boolean): React.CSSProperties => ({
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 16,
        fontFamily: 'IBM Plex Sans KR',
        fontWeight: 500,
        lineHeight: '24px',
        wordWrap: 'break-word',
        color: isActive ? 'var(--BDS-Grayscale-13, black)' : 'var(--BDS-Grayscale-7, #8C8C8C)',
    });

    return (
        <div style={containerStyle}>
            {/* 내가 쓴 글 */}
            <div style={tabBaseStyle} onClick={() => onTabChange('myPosts')}>
                <div style={labelWrapperStyle(activeTab === 'myPosts')}>
                    <div style={labelTextStyle(activeTab === 'myPosts')}>내가 쓴 글</div>
                </div>
            </div>

            {/* 저장한 글 */}
            <div style={tabBaseStyle} onClick={() => onTabChange('savedPosts')}>
                <div style={labelWrapperStyle(activeTab === 'savedPosts')}>
                    <div style={labelTextStyle(activeTab === 'savedPosts')}>저장한 글</div>
                </div>
            </div>

            {/* 댓글 단 글 */}
            <div style={tabBaseStyle} onClick={() => onTabChange('commentedPosts')}>
                <div style={labelWrapperStyle(activeTab === 'commentedPosts')}>
                    <div style={labelTextStyle(activeTab === 'commentedPosts')}>댓글 단 글</div>
                </div>
            </div>
        </div>
    );
};

export default MypageTab;
