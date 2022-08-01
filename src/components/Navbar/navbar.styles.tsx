import styled from 'styled-components';

export const MainNavbar = styled.nav`
  background-color: #000000;
  height: 48px;
  display: flex;
  justify-content: flex-start; //not actually needed since there is one element but in case we add more
  align-items: center;
`

export const Text = styled.p`
  color: white;
  padding: 1rem;
  text-transform: capitalize;
`