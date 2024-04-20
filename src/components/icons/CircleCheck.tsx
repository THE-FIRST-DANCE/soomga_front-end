import { CSSProp, styled } from 'styled-components'

interface CircleCheckProps {
  $width?: string
  $height?: string
  $margin?: string
}

const CircleCheck = ({ ...props }: CircleCheckProps) => {
  return (
    <CircleCheckStyle
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.9993 0.750244C13.4777 0.750244 14.9417 1.04142 16.3076 1.60715C17.6735 2.17288 18.9146 3.00208 19.96 4.04741C21.0054 5.09274 21.8347 6.33373 22.4004 7.69952C22.9662 9.06531 23.2574 10.5292 23.2574 12.0075C23.2574 13.4858 22.9662 14.9496 22.4004 16.3154C21.8347 17.6812 21.0054 18.9222 19.96 19.9675C18.9146 21.0129 17.6735 21.8421 16.3076 22.4078C14.9417 22.9735 13.4777 23.2647 11.9993 23.2647C9.01348 23.2647 6.14994 22.0787 4.03863 19.9675C1.92733 17.8564 0.741211 14.9931 0.741211 12.0075C0.741211 9.02188 1.92733 6.15855 4.03863 4.04741C6.14994 1.93627 9.01348 0.750244 11.9993 0.750244ZM11.9993 2.25121C9.41159 2.25121 6.92985 3.2791 5.10006 5.10876C3.27026 6.93841 2.24229 9.41996 2.24229 12.0075C2.24229 14.595 3.27026 17.0766 5.10006 18.9062C6.92985 20.7359 9.41159 21.7638 11.9993 21.7638C14.587 21.7638 17.0688 20.7359 18.8986 18.9062C20.7284 17.0766 21.7563 14.595 21.7563 12.0075C21.7563 9.41996 20.7284 6.93841 18.8986 5.10876C17.0688 3.2791 14.587 2.25121 11.9993 2.25121ZM17.2531 7.94737L18.3114 9.00555L10.123 17.1933L5.68727 12.758L6.74553 11.6998L10.123 15.077L17.2531 7.94737Z"
        fill="black"
      />
    </CircleCheckStyle>
  )
}

export default CircleCheck

const CircleCheckStyle = styled.svg<CircleCheckProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $margin }) => $margin};
`
