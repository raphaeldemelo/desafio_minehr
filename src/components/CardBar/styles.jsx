import styled from 'styled-components'

export const Container = styled.main`
  background-color: var(--color-white);
  border-radius: 10px;
  width: 680px;
  height: 359px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Header = styled.header`
  margin-left: 2%;
  display: flex;
  align-items: center;
  z-index: 1;
  margin-top: 20px;
  margin-bottom: -20px;
`

export const Title = styled.h1`
  font-size: 15px;
  margin-right: 15px;
`
