import styled from 'styled-components'

interface LanguageProps {
  width?: string
  height?: string
  color?: string
  hoverColor?: string
}

const Language = ({ ...props }: LanguageProps) => {
  return (
    <LanguageStyle {...props} viewBox="0 0 48 48">
      <path d="M0 0h48v48H0z" fill="none" /> {/* 이 fill은 삭제하니, 전부 까매짐 */}
      <path d="M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zM24 8.07c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zM8.52 28C8.19 26.72 8 25.38 8 24s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4H8.52zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zM24 39.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zM28.68 28h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zM32.72 28c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z" />
    </LanguageStyle>
  )
}

export default Language

const LanguageStyle = styled.svg<LanguageProps>`
  width: ${(props) => props.width || '48px'};
  height: ${(props) => props.height || '48px'};
  fill: ${(props) => props.color || 'black'};
  &:hover {
    fill: ${(props) => props.hoverColor || 'black'};
  }
`
