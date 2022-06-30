import { useEffect, useState } from "react";
import Welcome from "../contents/Welcome";
import useConnect from "../hooks/useConnect";
import ChatScreen from "./ChatScreen";

const MainContainer = ({ handleToogleScreen, setToogleWelcome, toogleWelcome }) => {
    const { chatId, chatType, allUsers, userInfo, allUsersMessages, helperToggle } = useConnect();
    const [userDetails, setUserDetails] = useState({});
    const [messageContainer, setMessageContainer] = useState([]);

    useEffect(() => {
        let user = allUsers.filter((val) => val.socketId === chatId)[0];
        setUserDetails(user);
        let currentUser = allUsersMessages.filter(val => val.socketId === chatId)[0];
        if (currentUser) {
            setMessageContainer(currentUser.messages);
        }
    }, [chatId, helperToggle]);

    return (
        <>
            <section className="hidden md:block action-section flex-1 bg-wp-intro-bg">
                {chatId ? <ChatScreen handleToogleScreen={handleToogleScreen} messageContainer={messageContainer} userDetails={userDetails} /> : <Welcome />}
            </section>
            <section className="md:hidden action-section flex-1 bg-wp-intro-bg">
                {toogleWelcome ? <ChatScreen handleToogleScreen={handleToogleScreen} messageContainer={messageContainer} userDetails={userDetails} /> : <Welcome setToogleWelcome={setToogleWelcome} handleToogleScreen={handleToogleScreen} />}
            </section>

        </>
    )
}

export default MainContainer;