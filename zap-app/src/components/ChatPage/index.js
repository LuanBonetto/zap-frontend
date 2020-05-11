import React, { useEffect } from "react"
import InputGroupChat from "../InputGroupChat/index"
import BallonChat from "../BallonChat/index"
import HeaderChat from '../HeaderChat/index'
import HeaderProfile from "../HeaderProfile/index"
import FriendList from "../FriendList/index"

export const container = {
  display: "flex"
}

export const friendsDiv = {
  width: "30%",
  height: "100vh",
}

export const chatDiv = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  height: "100vh",
  width: "70%",
  justifyContent: "flex-end",
  alignContent: "flex-end"
}

export const ballonsScrollDiv = {
  maxHeight: "82%",
  overflowY: "scroll",
  padding: "16% 0 0 0"
}

export const ballonsDiv = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  height: "100vh",
  width: "100%",
  justifyContent: "flex-end",
  alignContent: "flex-end",
}



function ChatPage(props) {

  useEffect(() => {
    document.body.style.backgroundColor = "#F4F6FB"
  })

  return (
      <div style={container}>
        <div style={friendsDiv}>
          <HeaderProfile/>
          <FriendList/>
        </div>
        <div style={chatDiv}>
          <HeaderChat/>
          <div style={ballonsScrollDiv}>
            <div style={ballonsDiv}>
              <BallonChat/>
              <BallonChat/>
              <BallonChat/>
              <BallonChat/>
              <BallonChat/>
            </div>
          </div>
          <InputGroupChat/>
        </div>
      </div>
  )
}

export default ChatPage
