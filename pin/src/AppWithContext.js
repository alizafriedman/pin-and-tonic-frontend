import React, { useState } from "react";
import App from "./App";
import { UserContext }  from "./UserContext";
import { backendUrl } from "./config";

const AppWithContext = () => {
const localStorageToken = localStorage.getItem("temp-token");

const [user, setUser] = useState('name');
const [singleBoard, setSingleBoard] = useState('cocktails');
  const [boards, setBoards] = useState([]);
  const [newBoard, setNewBoard] = useState(null);
  const [pin, setPin] = useState(null);
const [authToken, setAuthToken] = useState(localStorageToken);
const [needLogin, setNeedLogin] = useState(!!localStorageToken);

  const login = (token) => {
    window.localStorage.setItem("temp-token", token);
    setAuthToken(token);
    setNeedLogin(false);
  };

  const loadBoards = async () => {
    const response = await fetch(`${backendUrl}/users/all`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (response.ok) {
      const boards = await response.json();
      setBoards(boards.boards);
    }
  };

  const getOneBoard = async (id) => {
    const response = await fetch(`${backendUrl}/boards/${id}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (response.ok) {
      const BoardsResponse = await response.json();
      setSingleBoard(BoardsResponse);
    }
  };


  const createBoard = async (boardName, img) => {
   console.log(boardName, img)
   const response = await fetch(`${backendUrl}/boards/new`, {
     method: "post",
     headers: {
       Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
     },
     body: JSON.stringify({ boardName, img })
   });
   if (response.ok) {
     const BoardsResponse = await response.json();
     setNewBoard(BoardsResponse);
   }
 };

  return (
    <UserContext.Provider
      value={{
        user,
        singleBoard,
        boards,
        pin,
        newBoard,
        authToken,
        setAuthToken,
        needLogin,
        createBoard,
        login,
        loadBoards,
        getOneBoard,
      }}
    >
      <App />
    </UserContext.Provider>
  );
};

export default AppWithContext;
