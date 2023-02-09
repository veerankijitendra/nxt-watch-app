import styled from 'styled-components'

import {Button} from '../../styledComponent'

export const BG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-height: 100vh;
`

export const LoginBG = styled.form`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f8fafc')};

  min-height: 50vh;

  font-family: 'Roboto';

  padding: 0 20px;

  width: 90%;
  height: 90vh;

  max-height: 720px;
  max-width: 540px;

  border-radius: 16px;

  @media all and (min-width: 520px) {
    max-width: 400px;
    height: 500px;

    padding: 0 32px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InputLabelCon = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 16px;
`

export const Input = styled.input`
  height: 38px;

  margin-top: 8px;
  padding: 0 8px;

  font-size: 16px;
  font-weight: 300;

  width: 100%;

  min-width: 10px;

  outline: none;

  border-radius: 6px;

  border: 1px solid #94a3b8;

  background-color: ${props => (props.isDarkMode ? '#f8fafc' : null)};
`
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;

  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
`
export const CheckBox = styled.input`
  height: 16px;
  width: 16px;
`

export const CheckBoxLabel = styled(Label)`
  font-weight: 400;
`
export const CheckBoxLabelCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  align-self: flex-start;
`

export const LoginBtn = styled(Button)`
  background-color: #4f46e5;

  color: #ffffff;

  height: 42px;
  width: 100%;

  margin: 24px 0 0 0;

  font-weight: 500;
  font-size: 18px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;

  font-size: 14px;

  align-self: flex-start;
`
