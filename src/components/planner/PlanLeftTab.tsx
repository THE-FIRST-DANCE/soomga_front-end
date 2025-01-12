import { useRecoilState } from 'recoil'
import { CurrentPeriod } from 'state/store/PlanInfo'
import styled from 'styled-components'
import logo from 'assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import useLanguage from 'hooks/useLanguage'

const messages = {
  'ko-KR': {
    next: '다음',
    prev: '이전',
    confirm: '정말 나가시겠습니까?',
    periodDay: '일차',
    deleteButton: '삭제',
  },
  'en-US': {
    next: 'Next',
    prev: 'Previous',
    confirm: 'Are you sure you want to leave?',
    periodDay: 'day',
    deleteButton: 'Delete',
  },
  'ja-JP': {
    next: '次へ',
    prev: '前へ',
    confirm: '本当に終了しますか？',
    periodDay: '日目',
    deleteButton: '削除',
  },
}
interface PlanLeftTabProps {
  onNext: () => void
  onPrev?: () => void
  onEdit?: () => void
  onDel?: () => void
  prevText?: string
  nextText: string
  editText?: string
  period: number
  planMember?: number
}

const PlanLeftTab = ({
  onNext,
  onPrev,
  onEdit,
  prevText,
  nextText,
  editText,
  onDel,
  period,
  planMember,
}: PlanLeftTabProps) => {
  const [currentPeriod, setCurrentPeriod] = useRecoilState(CurrentPeriod)
  const memberId = 2
  const navigate = useNavigate()
  const [language] = useLanguage()
  const message = messages[language]

  return (
    <LeftTab>
      {/* 로고 */}
      <Logo
        onClick={() => {
          navigate('/')
        }}
      >
        <img src={logo} alt="logo" />
      </Logo>

      {/* 날짜별 플랜 */}
      <PeriodBox>
        {Array.from({ length: period }, (_, i) => (
          <Period
            onClick={() => {
              setCurrentPeriod(i + 1)
            }}
            className={currentPeriod === i + 1 ? 'active' : ''}
            key={i}
          >
            <PeriodText>
              {i + 1}
              {message.periodDay}
            </PeriodText>
          </Period>
        ))}
      </PeriodBox>

      {/* 이전, 다음 */}
      <TabBox>
        {onDel && planMember == memberId && (
          <DelPage
            onClick={() => {
              onDel()
            }}
          >
            {message.deleteButton}
          </DelPage>
        )}
        {onPrev && (
          <PrevPage
            onClick={() => {
              onPrev()
            }}
          >
            {prevText}
          </PrevPage>
        )}
        {onEdit && (
          <EditPage
            onClick={() => {
              onEdit()
            }}
          >
            {editText}
          </EditPage>
        )}
        <NextPage
          onClick={() => {
            onNext()
          }}
        >
          {nextText}
        </NextPage>
      </TabBox>
    </LeftTab>
  )
}

export default PlanLeftTab

const LeftTab = styled.div`
  min-width: 100px;
  max-width: 100px;
  height: 100%;
  box-sizing: border-box;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  width: 80%;
  height: 4em;
  box-sizing: border-box;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Period = styled.div`
  width: 80%;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid var(--bs-gray-200);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--bs-gray-200);
  }

  &.active {
    background-color: var(--color-primary);
  }
`

const PeriodText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--bs-gray-600);
`

const PeriodBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 2rem;
  flex: 1;
`

const TabBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
`

const PrevPage = styled.div`
  width: 80%;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--bs-gray-400);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--bs-gray-200);
  }
`

const NextPage = styled.div`
  width: 80%;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--bs-gray-200);
  }
`

const EditPage = styled.div`
  width: 80%;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid var(--bs-gray-200);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--bs-gray-500);
  }
`

const DelPage = styled.div`
  width: 80%;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--bs-danger);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-original);
  }
`
