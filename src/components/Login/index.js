import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {NxtWatchImage} from '../../styledComponent'

import {
  BG,
  LoginBG,
  InputLabelCon,
  Input,
  Label,
  CheckBox,
  CheckBoxLabel,
  CheckBoxLabelCon,
  LoginBtn,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isPasswordVisible: false,
    isUsernameOnFocus: false,
    isPasswordOnFocus: false,
    isLoginSuccessful: true,
    errorMsg: '',
  }

  onSubmitButtonClicked = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {history} = this.props

      const jwtToken = data.jwt_token

      Cookies.set('jwt_token', jwtToken, {expires: 30})
      this.setState({
        errorMsg: '',
      })

      history.replace('/')
    }
    const errorMsg = data.error_msg
    this.setState({
      username: '',
      password: '',
      isLoginSuccessful: false,
      errorMsg,
    })
  }

  onChangeUserName = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangePasswordType = () => {
    this.setState(previous => ({
      isPasswordVisible: !previous.isPasswordVisible,
    }))
  }

  onUsernameChangeFocus = () => {
    this.setState({})
  }

  onPasswordChangeFocus = () => {
    this.setState(previous => ({
      isPasswordOnFocus: !previous.isPasswordOnFocus,
    }))
  }

  renderLoginForm = isDarkMode => {
    const {
      username,
      password,
      isUsernameOnFocus,
      isPasswordOnFocus,
      isPasswordVisible,
    } = this.state
    const passwordType = isPasswordVisible ? 'text' : 'password'
    return (
      <>
        <InputLabelCon>
          <Label isDarkMode={isDarkMode} htmlFor="username">
            USERNAME
          </Label>
          <Input
            isOnFocus={isUsernameOnFocus}
            isDarkMode={isDarkMode}
            id="username"
            type="text"
            value={username}
            onChange={this.onChangeUserName}
          />
        </InputLabelCon>
        <InputLabelCon>
          <Label isDarkMode={isDarkMode} htmlFor="password">
            PASSWORD
          </Label>
          <Input
            isOnFocus={isPasswordOnFocus}
            isDarkMode={isDarkMode}
            id="password"
            type={passwordType}
            value={password}
            onChange={this.onChangePassword}
          />
        </InputLabelCon>
        <CheckBoxLabelCon>
          {isPasswordVisible ? (
            <CheckBox
              checked
              id="showPassword"
              type="checkbox"
              onClick={this.onChangePasswordType}
            />
          ) : (
            <CheckBox
              id="showPassword"
              type="checkbox"
              onClick={this.onChangePasswordType}
            />
          )}
          <CheckBoxLabel isDarkMode={isDarkMode} htmlFor="showPassword">
            Show Password
          </CheckBoxLabel>
        </CheckBoxLabelCon>
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const {errorMsg, isLoginSuccessful} = this.state
          return (
            <BG>
              <LoginBG
                isDarkMode={isDarkMode}
                onSubmit={this.onSubmitButtonClicked}
              >
                <NxtWatchImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch"
                />
                {this.renderLoginForm(isDarkMode)}
                <LoginBtn type="submit">Login</LoginBtn>
                {!isLoginSuccessful ? <ErrorMsg>*{errorMsg}</ErrorMsg> : null}
              </LoginBG>
            </BG>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
