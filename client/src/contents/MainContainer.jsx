import { useEffect, useState } from "react";
import Welcome from "../contents/Welcome";
import useConnect from "../hooks/useConnect";
import ChatScreen from "./ChatScreen";


const MainContainer = () => {
    const { chatId, chatType, allUsers, userInfo, allUsersMessages, helperToggle } = useConnect();
    const [userDetails, setUserDetails] = useState({});
    const [messageContainer, setMessageContainer] = useState([]);


    useEffect(() => {
        let user = allUsers.filter((val) => val.socketId === chatId)[0];
        setUserDetails(user);
        let currentUser = allUsersMessages.filter(val => val.socketId === chatId)[0];
        // console.log(allUsersMessages);
        if (currentUser) {
            setMessageContainer(currentUser.messages);
        }
    }, [chatId, helperToggle]);

    return (
        <section className="action-section flex-1 bg-wp-intro-bg">
            {/* {console.log(allUsersMessages)} */}
            {chatId ? <ChatScreen messageContainer={messageContainer} userDetails={userDetails} /> : <Welcome />}
        </section>
    )
}

export default MainContainer;