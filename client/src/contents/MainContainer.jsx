import Welcome from "../contents/Welcome";
import ChatScreen from "./ChatScreen";


const MainContainer = () => {
    return (
        <section className="action-section flex-1 bg-wp-intro-bg">
            {/* <Welcome /> */}
            <ChatScreen />
        </section>
    )
}

export default MainContainer;