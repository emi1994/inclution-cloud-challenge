import styled from "styled-components";
import { StatusBarType } from './type'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const MainCard = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: whitesmoke;
  border: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-width: 250px;
  min-height: 200px;
`
export const Text = styled.p`
  text-transform: capitalize;
  padding: 0.2rem;  
`

export const StatusBar = styled.div<StatusBarType>`
  width: 100%;
  background-color:${(props) => props.error ? '#ff0000' : '#008000'};
  text-align: center;
  color: whitesmoke;
  text-transform: capitalize;
`
export const Timer = styled.p`
  
`