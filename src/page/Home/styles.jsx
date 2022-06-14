import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const Header = styled.header`
  background-color: var(--color-green);
  display: flex;
  height: 91px;
`
export const SectionTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px;
`
export const Title = styled.h1`
  color: var(--color-white);
  font-size: 28px;
`
export const Subtitle = styled.strong`
  color: var(--color-gray);
  font-size: 14px;
  font-weight: 500;
`
export const Button = styled.button`
  background-color: var(--color-green);
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const Text = styled.strong`
  color: var(--color-gray);
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
`
