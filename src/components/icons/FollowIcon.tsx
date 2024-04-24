import styled from 'styled-components'
interface FollowIconProps {
  $width?: string
  $height?: string
  $fill?: string
}
const FollowIcon = ({ ...props }: FollowIconProps) => {
  return (
    <FollowStyled
      width="20"
      height="20"
      viewBox="0 0 20 20"
      // fill="none"
      xmlns="http://www.w3.org/2000/FollowStyled"
      {...props}
    >
      <g clipPath="url(#clip0_167_1364)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.16699 10.8334C9.53949 10.8334 9.90616 10.8534 10.2637 10.8917C10.4835 10.915 10.685 11.0247 10.8239 11.1966C10.9629 11.3685 11.0278 11.5886 11.0045 11.8084C10.9812 12.0282 10.8715 12.2297 10.6996 12.3686C10.5277 12.5076 10.3076 12.5725 10.0878 12.5492C9.78782 12.5167 9.47949 12.5 9.16699 12.5C7.48116 12.5 5.96449 12.9917 4.88699 13.6492C4.34783 13.9775 3.94116 14.3342 3.67866 14.6675C3.40866 15.0092 3.33366 15.2675 3.33366 15.4167C3.33366 15.5184 3.36449 15.6259 3.54616 15.7717C3.75366 15.9384 4.11449 16.1109 4.66616 16.2567C5.76449 16.5484 7.34283 16.6667 9.16699 16.6667L9.71533 16.6625C9.93634 16.6595 10.1495 16.7445 10.3079 16.8986C10.4663 17.0528 10.5569 17.2636 10.5599 17.4846C10.5629 17.7056 10.478 17.9188 10.3238 18.0772C10.1696 18.2355 9.95884 18.3262 9.73783 18.3292L9.16699 18.3334C7.30949 18.3334 5.55449 18.2167 4.23949 17.8684C3.58533 17.695 2.96949 17.4467 2.50283 17.0717C2.00866 16.675 1.66699 16.1209 1.66699 15.4167C1.66699 14.7609 1.96533 14.1475 2.37033 13.6342C2.78199 13.1134 3.35116 12.6342 4.01866 12.2259C5.35449 11.4125 7.17116 10.8334 9.16699 10.8334ZM17.0837 12.2425C17.847 12.6875 18.3553 13.5675 18.3337 14.5659C18.3037 15.8742 17.2937 16.8975 15.9287 17.7084C15.6437 17.8784 15.342 18.0559 15.0003 18.0559C14.6587 18.0559 14.357 17.8784 14.072 17.7084C12.707 16.8975 11.697 15.8734 11.6678 14.5667C11.6453 13.5684 12.1537 12.6875 12.917 12.2425C13.5445 11.8767 14.3162 11.8292 15.0003 12.2042C15.6845 11.8292 16.4562 11.8767 17.0837 12.2425ZM16.0228 13.6117L15.9578 13.6142C15.8599 13.6291 15.7686 13.6726 15.6953 13.7392L15.6287 13.7992C15.3078 14.1242 14.797 14.1475 14.4487 13.8692L14.3712 13.7992C14.2353 13.6617 14.1212 13.6234 14.0428 13.6142C13.9424 13.6049 13.8416 13.6289 13.7562 13.6825C13.5353 13.8109 13.3245 14.1159 13.3337 14.5284C13.342 14.9034 13.6337 15.47 14.7503 16.17L15.0003 16.3217L15.077 16.2759C16.337 15.5275 16.6578 14.9217 16.667 14.5292C16.6753 14.115 16.4653 13.8109 16.2445 13.6825C16.1773 13.6415 16.1013 13.6172 16.0228 13.6117ZM9.16699 1.66669C10.2721 1.66669 11.3319 2.10567 12.1133 2.88708C12.8947 3.66848 13.3337 4.72828 13.3337 5.83335C13.3337 6.93842 12.8947 7.99823 12.1133 8.77963C11.3319 9.56103 10.2721 10 9.16699 10C8.06192 10 7.00212 9.56103 6.22071 8.77963C5.43931 7.99823 5.00033 6.93842 5.00033 5.83335C5.00033 4.72828 5.43931 3.66848 6.22071 2.88708C7.00212 2.10567 8.06192 1.66669 9.16699 1.66669ZM9.16699 3.33335C8.83869 3.33335 8.5136 3.39802 8.21028 3.52365C7.90697 3.64929 7.63137 3.83344 7.39922 4.06559C7.16708 4.29773 6.98293 4.57333 6.85729 4.87665C6.73166 5.17996 6.66699 5.50505 6.66699 5.83335C6.66699 6.16166 6.73166 6.48675 6.85729 6.79006C6.98293 7.09338 7.16708 7.36897 7.39922 7.60112C7.63137 7.83327 7.90697 8.01742 8.21028 8.14305C8.5136 8.26869 8.83869 8.33335 9.16699 8.33335C9.83003 8.33335 10.4659 8.06996 10.9348 7.60112C11.4036 7.13228 11.667 6.49639 11.667 5.83335C11.667 5.17031 11.4036 4.53443 10.9348 4.06559C10.4659 3.59675 9.83003 3.33335 9.16699 3.33335Z"
          fill="#09244B"
        />
      </g>
      <defs>
        <clipPath id="clip0_167_1364">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </FollowStyled>
  )
}

export default FollowIcon

const FollowStyled = styled.svg<FollowIconProps>`
  cursor: pointer;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  fill: ${({ $fill }) => $fill};
  stroke-width: 0px;
`
