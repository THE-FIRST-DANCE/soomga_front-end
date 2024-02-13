import Modal from 'components/shared/Modal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { PlanListConfirm, PlanListRecoil } from 'recoil/atoms/PlanList'
import styled, { CSSProp } from 'styled-components'

interface SelectTransportationProps {
  isOpen: boolean
  onRequestClose: () => void
}

const SelectTransportation = ({ isOpen, onRequestClose }: SelectTransportationProps) => {
  const [transportation, setTransportation] = useState<string>('public')
  const setPlanList = useSetRecoilState(PlanListConfirm)
  const planList = useRecoilValue(PlanListRecoil)
  const navigate = useNavigate()

  const handleSelect = () => {
    setPlanList({ planList, transportation })
    onRequestClose()
    navigate('/planner/confirm')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      ariaHideApp={false}
      style={{
        content: {
          maxWidth: '400px',
        },
      }}
    >
      <Container>
        <Title>이동수단 선택</Title>
        <Explan>{transportation === 'public' ? '대중교통을 이용합니다.' : '승용차를 이용합니다.'}</Explan>
        <Select>
          <SelectTransportationItem
            className={transportation === 'public' ? 'active' : ''}
            onClick={() => setTransportation('public')}
          >
            <SubwayIcon style={{ width: '2rem', height: '2rem' }} />
            <div>대중교통</div>
          </SelectTransportationItem>
          <SelectTransportationItem
            className={transportation === 'car' ? 'active' : ''}
            onClick={() => setTransportation('car')}
          >
            <CarIcon style={{ width: '2rem', height: '2rem' }} />
            <div>승용차</div>
          </SelectTransportationItem>
        </Select>
        <Footer>
          <FooterText onClick={() => onRequestClose()} style={{ color: 'var(--bs-gray-400)' }}>
            닫기
          </FooterText>
          <FooterText onClick={() => handleSelect()}>일정생성</FooterText>
        </Footer>
      </Container>
    </Modal>
  )
}

export default SelectTransportation

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const Explan = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.4rem 1rem;
  background-color: var(--bs-gray-200);
  border-radius: 0.5rem;
`

const Select = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const SelectTransportationItem = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  &.active {
    background-color: var(--color-primary);
  }
`

const Footer = styled.div`
  width: 100%;
  margin-top: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

const FooterText = styled.div<{ style?: CSSProp }>`
  font-size: 1.2rem;
  cursor: pointer;
`

interface IconProps {
  style: CSSProp
}

const SubwayIcon = ({ ...props }: IconProps) => {
  return (
    <IconStyle {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2h-1.8zM13 5v6h6V7a2 2 0 0 0-2-2h-4zm-2 0H7a2 2 0 0 0-2 2v4h6V5zm8 8H5v5h14v-5zM7.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </g>
    </IconStyle>
  )
}

const CarIcon = ({ ...props }: IconProps) => {
  return (
    <IconStyle {...props} fill="none" viewBox="0 0 184 134" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.1492 114.579C38.1492 118.521 38.3848 121.891 38.0908 125.212C37.7114 129.498 35.6026 131.906 31.3521 132.406C26.2744 133.052 21.1521 133.279 16.0371 133.084C11.7053 132.871 9.76781 130.237 9.60503 125.867C9.47377 122.374 9.35233 118.876 9.35758 115.381C9.35758 113.384 8.75706 111.987 6.63381 111.679C1.95149 111.001 0.774006 107.685 0.645364 103.668C0.519347 99.7366 0.529171 95.8 0.492416 91.8659C0.426782 84.8726 0.42679 77.8786 0.295523 70.8866C0.164255 64.3344 2.75154 59.2846 8.22802 55.6787C9.28998 54.9797 10.2371 54.1067 11.2531 53.3014C10.9906 53.0251 10.9289 52.9142 10.837 52.8708C3.81877 49.6042 2.9747 44.0372 8.78854 38.5561C12.909 34.6713 18.0219 33.1833 23.5561 33.4268C25.661 33.5194 26.4408 32.8269 26.9822 30.9557C28.2864 26.448 29.96 22.0413 31.1552 17.5073C33.6263 8.13025 39.9265 4.28745 49.2531 3.45193C75.7291 1.07927 102.22 -0.364731 128.817 0.0802664C133.4 0.156402 136.835 1.46515 139.21 5.49113C143.754 13.1952 148.479 20.793 152.96 28.5332C153.91 30.1741 154.677 30.7497 156.686 30.6525C160.271 30.4966 163.862 30.6868 167.41 31.2203C168.989 31.4663 170.489 32.0747 171.793 32.9978C173.097 33.9208 174.17 35.1335 174.927 36.5405C177.467 40.8861 176.436 45.4732 172.277 48.3073C171.569 48.7891 170.833 49.2262 169.795 49.8878C171.861 51.2005 173.586 52.544 175.511 53.4714C180.171 55.7148 182.005 59.5753 182.448 64.4526C183.461 75.6057 183.361 86.707 181.236 97.7467C180.279 102.715 178.206 106.81 173.344 109.086C172.765 109.357 172.259 110.559 172.317 111.282C172.561 114.326 173.151 117.342 173.393 120.386C173.976 127.737 170.853 131.224 163.577 131.532C159.099 131.721 154.622 131.946 150.143 132.063C143.042 132.246 140.697 130.006 140.429 122.859C140.29 120.895 140.292 118.925 140.436 116.962C140.693 114.573 140.121 113.732 137.478 113.882C129.95 114.311 122.404 114.579 114.865 114.6C90.3746 114.666 65.8847 114.596 41.3948 114.578C40.2094 114.578 39.0254 114.579 38.1492 114.579ZM79.9579 106.366C79.9605 106.503 79.9634 106.642 79.9664 106.78C99.2989 106.452 118.642 106.408 137.959 105.671C147.302 105.315 156.633 103.904 165.895 102.489C171.081 101.696 172.065 100.318 172.431 95.051C173.042 86.2449 173.294 77.4146 173.784 68.6007C174.055 63.7254 172.557 60.4201 167.79 57.9765C162.025 55.023 156.304 51.5444 153.096 45.3669C151.185 41.6914 149.195 38.0514 147.172 34.433C142.864 26.7257 138.398 19.1036 134.227 11.3233C132.323 7.76664 129.64 6.70403 125.766 6.67449C100.31 6.57576 74.866 7.85026 49.5465 10.4924C43.4425 11.1054 39.2557 13.5431 37.8328 19.8053C37.4554 21.2863 36.9884 22.743 36.4342 24.1673C33.7018 31.7598 31.0213 39.372 28.138 46.9067C27.4894 48.3887 26.4727 49.6803 25.1845 50.659C20.9105 54.0542 16.6364 57.4849 12.0873 60.4863C7.48767 63.5193 5.76022 67.2919 6.37061 72.8288C7.43454 82.4822 8.01734 92.1908 8.57983 101.893C8.71109 104.124 9.46654 105.109 11.5452 105.218C19.0556 105.612 26.5641 106.231 34.0779 106.315C49.366 106.484 64.6626 106.366 79.9566 106.366H79.9579ZM155.288 123.459C157.242 123.307 159.196 123.06 161.152 123.031C162.757 123.008 163.581 122.493 163.537 120.769C163.476 118.484 163.512 116.196 163.552 113.91C163.579 112.432 163.098 111.729 161.445 111.934C157.341 112.442 153.208 112.736 149.121 113.344C148.431 113.447 147.464 114.639 147.381 115.41C146.533 123.24 147.237 123.942 154.962 123.488C155.07 123.484 155.179 123.474 155.286 123.459H155.288ZM14.5466 114.673C15.006 117.523 15.4314 120.745 16.1218 123.909C16.2772 124.323 16.5329 124.693 16.8661 124.984C17.1993 125.275 17.5996 125.479 18.0311 125.578C21.2995 125.681 24.5711 125.571 27.825 125.246C28.6231 125.16 29.7526 123.887 29.9128 123.01C30.251 120.855 30.3634 118.671 30.2481 116.492C30.2304 115.875 29.452 114.764 29.0011 114.752C24.2387 114.623 19.4777 114.673 14.5453 114.673H14.5466ZM157.334 35.449L156.933 36.2543C157.886 37.9418 158.795 39.6555 159.799 41.3082C162.156 45.1943 162.73 45.3073 166.697 42.8591C169.388 41.1973 169.519 38.9867 166.621 37.7954C163.696 36.5996 160.443 36.1992 157.334 35.449ZM23.7366 38.862C19.4554 39.4861 16.0161 40.7128 13.3501 43.6211C12.294 44.7729 12.2028 45.7214 14.0878 46.4657C19.0163 48.4084 20.4077 47.8565 22.3026 42.7331C22.7082 41.6337 23.1125 40.5376 23.7366 38.8593V38.862Z"
        fill="black"
      />
      <path
        d="M82.6422 57.5315C73.1437 57.8111 63.6459 58.199 54.1454 58.3191C49.9068 58.3736 45.6543 57.9804 41.4203 57.6358C35.9425 57.1902 32.33 51.0495 34.3745 45.7319C37.3779 37.9214 39.5996 29.8084 42.1502 21.8234C42.5638 20.3926 43.3539 19.0989 44.4379 18.0775C45.522 17.056 46.8603 16.3441 48.3132 16.0161C52.4137 14.895 56.5931 14.0856 60.8157 13.5949C73.6399 12.4214 86.4786 11.3095 99.3382 10.6532C106.955 10.2653 114.618 10.8068 122.26 10.8855C127.191 10.9361 130.968 13.1276 133.308 17.3321C137.758 25.325 142.277 33.3218 143.75 42.567C143.908 43.3014 144.199 44.0008 144.608 44.6305C147.911 50.214 146.22 54.0969 139.874 54.7874C132.064 55.6373 124.229 56.4039 116.385 56.7616C105.148 57.2742 93.8932 57.3838 82.6488 57.6654L82.6422 57.5315ZM136.003 47.1732C132.733 38.7826 129.893 31.2491 126.863 23.7931C124.521 18.0278 124.161 17.9294 118.002 18.2424C100.34 19.1416 82.6738 19.9561 65.0176 20.959C60.2336 21.2314 55.4778 22.0302 50.7147 22.636C49.6171 22.7129 48.5757 23.1506 47.7527 23.8809C46.9297 24.6112 46.3712 25.5931 46.1643 26.6738C44.5983 32.5743 42.7592 38.4045 41.2936 44.3293C39.6574 50.9426 40.2435 50.195 45.7889 50.0657C66.3172 49.5859 86.8409 48.9308 107.365 48.2857C116.632 47.9929 125.89 47.5696 136.003 47.1732Z"
        fill="black"
      />
      <path
        d="M88.4615 88.1458C79.618 88.4976 70.7758 88.8619 61.9317 89.1901C60.5146 89.2426 58.9204 89.5268 57.7193 88.9971C56.4119 88.4208 54.9023 87.2014 54.5032 85.9379C53.9211 84.108 55.5186 82.8282 57.2494 82.5519C60.2679 82.0712 63.3115 81.7644 66.3652 81.633C82.6267 80.9329 98.8905 80.2856 115.157 79.6909C117.778 79.6979 120.396 79.8527 123 80.1543C125.022 80.3118 126.33 81.4532 126.388 83.4714C126.447 85.512 125.065 86.7249 123.167 87.0097C120.58 87.4283 117.968 87.6662 115.348 87.7218C106.388 87.8059 97.4297 87.7541 88.4661 87.7541C88.4622 87.886 88.4615 88.0159 88.4615 88.1458Z"
        fill="black"
      />
      <path
        d="M65.8244 78.7215C64.5215 78.7215 63.1032 79.0425 61.9519 78.6264C60.9156 78.2516 59.5668 77.1351 59.4651 76.2228C59.3601 75.2731 60.3505 73.7097 61.2779 73.2463C62.962 72.472 64.7722 72.0084 66.6211 71.8778C78.7719 70.7207 90.9326 69.6653 103.091 68.5856C103.525 68.5363 103.964 68.547 104.396 68.6172C106.559 69.0346 108.868 69.3359 109.168 72.1877C109.392 74.3089 107.676 76.1257 104.681 76.4598C100.784 76.8969 96.8501 77.0282 92.9285 77.2179C83.8913 77.655 74.8516 78.0488 65.8125 78.4596L65.8244 78.7215Z"
        fill="black"
      />
      <path
        d="M149.188 85.2518C144.297 85.2019 141.057 82.8588 139.897 78.5328C138.787 74.3979 141.101 68.4252 144.688 66.4975C145.666 66.0217 146.731 65.7536 147.817 65.71C151.834 65.4409 155.355 66.932 158.449 69.304C161.369 71.5435 161.917 75.6581 160.067 79.119C158.073 82.8457 153.724 85.2984 149.188 85.2518Z"
        fill="black"
      />
      <path
        d="M40.0846 77.987C40.0951 83.9925 34.998 89.1047 29.0778 89.0272C27.8769 89.0191 26.6897 88.7705 25.5864 88.2961C24.4831 87.8217 23.486 87.131 22.654 86.2649C21.822 85.3988 21.1719 84.3749 20.7421 83.2534C20.3123 82.132 20.1115 80.9358 20.1516 79.7354C20.235 73.2042 24.702 68.9393 31.4932 68.9059C36.5535 68.8829 40.0754 72.6063 40.0846 77.987Z"
        fill="black"
      />
    </IconStyle>
  )
}

const IconStyle = styled.svg<IconProps>`
  ${(props) => props.style}
`
