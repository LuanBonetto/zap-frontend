import axios from 'axios'
import { push } from "connected-react-router"

const baseURL = "https://us-central1-zap-labenu.cloudfunctions.net/app"

export const signUp = (newUser) => async (dispatch) => {
  try{
    const response = await axios.post(`${baseURL}/user/signup`, newUser)
    localStorage.setItem("token", response.data.token)
    dispatch(push("/chat"))
  }catch(err){
    window.alert(err)
  }
}

export const login = (user) => async (dispatch) => {
  try{
    const response = await axios.post(`${baseURL}/user/login`, user)
    localStorage.setItem("token", response.data.token)
    dispatch(push("/chat"))
  }catch(err){
    window.alert(err)
  }
}

export const sendRedefinePassword = (email) => async (dispatch) => {
  try{
    const userEmail = {
      email: email
    }
    await axios.put(`${baseURL}/user/redefinePassword`, userEmail)
    window.alert("Verifique seu e-mail para redefinir sua senha")
  }catch(err){
    window.alert(err)
  }
}
