import styled, { CSSProp } from 'styled-components'

interface CautionProps {
  style: CSSProp
}
const CautionIcon = ({ ...props }: CautionProps) => {
  return (
    <CautionStyled viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.1912 2.88568L20.1057 16.5935C20.2263 16.8025 20.2899 17.0396 20.2899 17.281C20.2899 17.5224 20.2263 17.7595 20.1057 17.9685C19.985 18.1775 19.8114 18.3511 19.6024 18.4718C19.3934 18.5925 19.1563 18.656 18.9149 18.656H3.0859C2.84454 18.656 2.60744 18.5925 2.39841 18.4718C2.18939 18.3511 2.01582 18.1775 1.89514 17.9685C1.77447 17.7595 1.71094 17.5224 1.71094 17.281C1.71094 17.0396 1.77447 16.8025 1.89515 16.5935L9.80965 2.88568C10.3386 1.96901 11.6613 1.96901 12.1912 2.88568ZM11.0004 4.48985L3.87974 16.8227H18.1211L11.0004 4.48985ZM11.0004 13.75C11.2435 13.75 11.4767 13.8466 11.6486 14.0185C11.8205 14.1904 11.9171 14.4236 11.9171 14.6667C11.9171 14.9098 11.8205 15.143 11.6486 15.3149C11.4767 15.4868 11.2435 15.5833 11.0004 15.5833C10.7573 15.5833 10.5241 15.4868 10.3522 15.3149C10.1803 15.143 10.0837 14.9098 10.0837 14.6667C10.0837 14.4236 10.1803 14.1904 10.3522 14.0185C10.5241 13.8466 10.7573 13.75 11.0004 13.75ZM11.0004 7.33335C11.2435 7.33335 11.4767 7.42993 11.6486 7.60183C11.8205 7.77374 11.9171 8.0069 11.9171 8.25001V11.9167C11.9171 12.1598 11.8205 12.393 11.6486 12.5649C11.4767 12.7368 11.2435 12.8333 11.0004 12.8333C10.7573 12.8333 10.5241 12.7368 10.3522 12.5649C10.1803 12.393 10.0837 12.1598 10.0837 11.9167V8.25001C10.0837 8.0069 10.1803 7.77374 10.3522 7.60183C10.5241 7.42993 10.7573 7.33335 11.0004 7.33335Z"
        fill="#FF0000"
      />
    </CautionStyled>
  )
}

export default CautionIcon

const CautionStyled = styled.svg<CautionProps>`
  ${(props) => props.style};
`