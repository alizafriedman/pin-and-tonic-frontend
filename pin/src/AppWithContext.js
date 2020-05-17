import React, { useState, useEffect } from "react";
import App from "./App";
import { UserContext }  from "./UserContext";
import { backendUrl } from "./config";
import {useHistory} from 'react-router-dom'

const AppWithContext = () => {
const localStorageToken = localStorage.getItem("temp-token");

const [user, setUser] = useState('name');
const [singleBoard, setSingleBoard] = useState(null);
  const [boards, setBoards] = useState([]);
  const [newBoard, setNewBoard] = useState(null);
  // const [addPinToBoard, setAddPinToBoard] = useState(null);
  const [pin, setPin] = useState(null);
  const [pins, setAllPins] = useState([]);
const [authToken, setAuthToken] = useState(localStorageToken);
const [needLogin, setNeedLogin] = useState(!!localStorageToken);
  const history = useHistory();

  useEffect(() => {
    if (authToken) {
      loadBoards();
    }
  }, [authToken])
   
  
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

  const loadPins = async () => {
    const response = await fetch(`${backendUrl}/pins/all`, {
      headers: { Authorization: `Bearer ${authToken}` },
            // body: JSON.stringify({ category, imgUrl, pinName, description})

    });
    if (response.ok) {
      const pins = await response.json();
      setAllPins(pins.pins);
    }
  };


  const getOneBoard = async (id) => {
    const response = await fetch(`${backendUrl}/boards/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      // body: JSON.stringify({ category, imgUrl, pinName, description})
    });
    if (response.ok) {
      const BoardsResponse = await response.json();
      setSingleBoard(BoardsResponse.board);
    }
  };

  const addBoardIdToPin = async (boardId, id) => {
    const response = await fetch(`${backendUrl}/pins/${id}`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ boardId})
    });
    if (response.ok) {
      history.push(`/boards/${boardId}`)
      // const updatePins = await response.json();
      // setAddPinToBoard(updatePins)
    }
  }

  const createBoard = async (boardName, img) => {
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
        pins,
        newBoard,
        authToken,
        setAuthToken,
        loadPins,
        needLogin,
        setAllPins,
        createBoard,
        login,
        loadBoards,
        getOneBoard,
        addBoardIdToPin,
        // setAddPinToBoard,
        // addPinToBoard
      }}
    >
      <App />
    </UserContext.Provider>
  );
};

export default AppWithContext;
