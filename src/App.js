import React, { useState, useEffect } from 'react';
import './App.css';

import Api from './Api';

import ChatListItem from './Components/ChatListItem';
import ChatIntro from './Components/ChatIntro';
import ChatWindow from './Components/ChatWindow';
import NewChat from './Components/NewChat';
import Login from './Components/Login';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { async } from '@firebase/util';
import Api from './Api';

export default () => {

  const [chatlist, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 'M4uZglWPd4WdknSsd6ks',
    name: 'Vanessa Maia',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'
  });
  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {
    if(user !== null) {
      let unsub = Api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    await Api.addUser(newUser);
    setUser(newUser);
  }

  if(user === null) {
    return (<Login onReceive={handleLoginData} />);
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
           chatlist={chatlist}
           user={user}
           show={showNewChat}
           setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
          <div onClick={handleNewChat} className="header--btn">
            <DonutLargeIcon style={{color: '#919191'}} />
          </div>
          <div className="header--btn">
            <ChatIcon style={{color: '#919191'}} />
          </div>
          <div className="header--btn">
            <MoreVertIcon style={{color: '#919191'}} />
          </div>
        </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}} />
            <input type="search" placeholder="Procurar um começar uma nova conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((index, key) => (
            <ChatListItem
               key={key}
               data={item}
               active={activeChat.chatId === chatlist[key].chatId}
               onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <chatWindow
             user={user}
             data={activeChat}
          />
        }
        {activeChat.chatId === undefined && {
          <ChatIntro/>
        }
      </div>
    </div>
  );
}