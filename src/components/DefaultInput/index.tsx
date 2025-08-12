import React from 'react';
import {colors,typography} from '../../tokens'

import {Status} from '../../types/DefaultInputType'

interface DefaultInputProps {
  status: Status;
  placeholder?: string;
  content?: string;
  currentLength?: number;
  maxLength?: number;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  status,
  placeholder = '플레이스 홀더',
  content = '',
  currentLength = 0,
  maxLength = 10,
}) => {
  switch (status) {
    case 'default':
      return (
        <div
          style={{
            width: '100%',
            height: 'auto',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 20,
            background: colors.grayscale[100],
            borderBottom: `1.6px solid ${colors.grayscale[600]}`,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              alignSelf: 'stretch',
              color: colors.grayscale[600],
              fontFamily: 'IBM Plex Sans KR',
              wordWrap: 'break-word',
              ...typography.Body2.Normal
            }}
          >
            {placeholder}
          </div>
        </div>
      );

    case 'disabled':
      return (
        <div
          style={{
            width: '100%',
            height: 'auto',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 20,
            background: colors.grayscale[400],
            borderBottom: `1.6px solid ${colors.grayscale[600]}`,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              color: colors.grayscale[700],
              fontFamily: 'IBM Plex Sans KR',
              wordWrap: 'break-word',
              ...typography.Body2.Normal
            }}
          >
            {placeholder}
          </div>
        </div>
      );

    case 'focused':
      return (
        <div
          style={{
            width: '100%',
            height: 'auto',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 20,
            background: colors.grayscale[100],
            borderBottom: '2.4px #FFC7A6 solid',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <div
              style={{
                width: 20,
                height: 0,
                transform: 'rotate(90deg)',
                transformOrigin: 'top left',
                outline: '1.6px #FF9456 solid',
                outlineOffset: '-0.8px',
              }}
            />
            <div
              style={{
                width: 287,
                color: colors.grayscale[1300],
                fontFamily: 'IBM Plex Sans KR',
                wordWrap: 'break-word',
                ...typography.Body2.Normal
              }}
            >
              클릭함
            </div>
          </div>
        </div>
      );

    case 'writingSingleLine':
      return (
        <div
          style={{
            width: '100%',
            height: 'auto',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 20,
            background: 'var(--BDS-Grayscale-1, white)',
            borderBottom: '2.4px #FFC7A6 solid',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                color: 'var(--BDS-Grayscale-13, black)',
                fontSize: 15,
                fontFamily: 'IBM Plex Sans KR',
                fontWeight: 400,
                lineHeight: '21.9px',
                wordWrap: 'break-word',
              }}
            >
              {content || '한줄'}
            </div>
            <div
              style={{
                textAlign: 'center',
                color: 'var(--BDS-Grayscale-8, #595959)',
                fontSize: 12,
                fontFamily: 'IBM Plex Sans',
                fontWeight: 400,
                lineHeight: '15.96px',
                wordWrap: 'break-word',
              }}
            >
              {currentLength} / {maxLength}
            </div>
          </div>
        </div>
      );

    case 'writingMultiLine':
      return (
        <div
          style={{
            width: '100%',
            height: 'auto',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 20,
            background: 'var(--BDS-Grayscale-1, white)',
            borderBottom: '2.4px #FFC7A6 solid',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                gap: 8,
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  color: 'var(--BDS-Grayscale-13, black)',
                  fontSize: 15,
                  fontFamily: 'IBM Plex Sans KR',
                  fontWeight: 400,
                  lineHeight: '21.9px',
                  wordWrap: 'break-word',
                }}
              >
                {content || '안녕하세요 잘 될까요? 여러줄이 들어갑니다. 아래에 붙어요. 글자수를 세어요.하하하하하하하하하하하하하하하하하ㅏ'}
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: 'var(--BDS-Grayscale-8, #595959)',
                  fontSize: 12,
                  fontFamily: 'IBM Plex Sans',
                  fontWeight: 400,
                  lineHeight: '15.96px',
                  wordWrap: 'break-word',
                }}
              >
                {currentLength} / {maxLength}
              </div>
            </div>
          </div>
        </div>
      );

    case 'commentWriting':
      return (
        <div
          style={{
            width: '100%',
            height: 'auto',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 16,
            paddingRight: 20,
            background: 'white',
            borderTop: '2.4px #FFC7A6 solid',
            borderBottom: '2.4px #FFC7A6 solid',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                gap: 12,
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  gap: 12,
                  display: 'inline-flex',
                }}
              >
                <div
                  style={{
                    flex: '1 1 0',
                    color: 'var(--BDS-Grayscale-13, black)',
                    fontSize: 15,
                    fontFamily: 'IBM Plex Sans KR',
                    fontWeight: 400,
                    lineHeight: '21.9px',
                    wordWrap: 'break-word',
                  }}
                >
                  {content || 'ㅇㄹㄴㄹㅇㄹㅇㄴㄹㄴㅇㄹㄴㅇㅇㄹㄴ'}
                </div>
                <div
                  style={{
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 4,
                    paddingBottom: 4,
                    background:
                      'linear-gradient(90deg, #FF9456 0%, #FE81C4 100%)',
                    borderRadius: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      color: 'var(--BDS-Grayscale-1, white)',
                      fontSize: 13,
                      fontFamily: 'IBM Plex Sans KR',
                      fontWeight: 500,
                      lineHeight: '17.94px',
                      wordWrap: 'break-word',
                    }}
                  >
                    게시
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default DefaultInput;
