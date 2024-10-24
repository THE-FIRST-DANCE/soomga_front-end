import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  font-family: 'Arial', sans-serif;
`

const Message = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in;
`

const SubMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in 0.2s both;
`

const CountdownMessage = styled.p`
  font-size: 1rem;
  color: #888;
  animation: ${fadeIn} 0.5s ease-in 0.4s both;
`

interface NotSupportProps {
  message?: string
}
const NotSupport = ({ message }: NotSupportProps) => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    const redirect = setTimeout(() => {
      navigate(-1)
    }, 3000)

    return () => {
      clearInterval(timer)
      clearTimeout(redirect)
    }
  }, [navigate])

  return (
    <Container>
      <Message>현재 모드에서 {message}은/는 제공하지 않는 기능입니다! ⚙️</Message>
      <SubMessage>죄송합니다. 이 기능은 현재 지원되지 않습니다.</SubMessage>
      <CountdownMessage aria-live="polite">{countdown}초 후 이전 페이지로 이동합니다...</CountdownMessage>
    </Container>
  )
}

export default NotSupport
