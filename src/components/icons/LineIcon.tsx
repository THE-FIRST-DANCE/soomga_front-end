import styled from 'styled-components'

interface LineStyle {
  width?: string
  height?: string
}

const LineIcon = ({ ...props }: LineStyle) => {
  return (
    <LineStyle {...props}>
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs></defs>
        <title />
        <g data-name="5-line" id="_5-line">
          <rect className="cls-1" height="64" rx="11.2" ry="11.2" transform="translate(64 64) rotate(180)" width="64" />
          <path
            className="cls-2"
            d="M56.4,28.4C56.4,19.6,46,10,32.4,10c-13.25,0-24,7.8-24,18.4,0,9.78,8.38,17.86,20.17,19.05a2.38,2.38,0,0,1,1.79,1.06A2.82,2.82,0,0,1,30.8,50a19,19,0,0,1-.36,3.23.8.8,0,0,0,1.1.91C37.19,51.64,56.4,41.36,56.4,28.4Z"
          />
          <path
            className="cls-1"
            d="M23.6,32.8H20V24.4a1.2,1.2,0,1,0-2.4,0V34a1.2,1.2,0,0,0,1.2,1.2h4.8a1.2,1.2,0,0,0,0-2.4Z"
          />
          <path
            className="cls-1"
            d="M26.8,23.2a1.2,1.2,0,0,0-1.2,1.2V34A1.2,1.2,0,0,0,28,34V24.4A1.2,1.2,0,0,0,26.8,23.2Z"
          />
          <path
            className="cls-1"
            d="M38,23.2a1.2,1.2,0,0,0-1.2,1.2v6l-5-6.72a1.2,1.2,0,0,0-2.16.72V34A1.2,1.2,0,0,0,32,34V28l5,6.72a1.19,1.19,0,0,0,1,.48,1.26,1.26,0,0,0,.38-.06A1.2,1.2,0,0,0,39.2,34V24.4A1.2,1.2,0,0,0,38,23.2Z"
          />
          <path
            className="cls-1"
            d="M46.8,30.4a1.2,1.2,0,1,0,0-2.4H43.2V25.6h3.6a1.2,1.2,0,1,0,0-2.4H42a1.2,1.2,0,0,0-1.2,1.2V34A1.2,1.2,0,0,0,42,35.2h4.8a1.2,1.2,0,0,0,0-2.4H43.2V30.4Z"
          />
        </g>
      </svg>
    </LineStyle>
  )
}

export default LineIcon

const LineStyle = styled.svg<LineStyle>`
  width: ${(props) => props.width || '45px'};
  height: ${(props) => props.height || '45px'};

  & .cls-1 {
    fill: #00cf2e;
  }

  & .cls-2 {
    fill: #fff;
  }

  cursor: pointer;
`
