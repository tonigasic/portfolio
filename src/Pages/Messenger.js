import React from "react";
import '../assets/css/Messenger.css'
import {Link} from "react-router-dom";
import Radium, {StyleRoot} from "radium";
import {fadeIn, fadeInLeft, fadeInRight, fadeInUp, rotateIn} from "react-animations";
import Css from "../assets/images/svg/css-5.svg";
import Html from "../assets/images/svg/html5.svg";
import Javascript from "../assets/images/svg/javascript-4.svg";
import ReactLogo from "../assets/images/svg/react-2.svg";
import Firebase from "../assets/images/svg/firebase-1.svg";
import Material from "../assets/images/svg/material-ui-1.svg";
import Redux from "../assets/images/svg/redux.svg";

function Messenger() {
    const styles = {
        fadeInUp4: {
            animation: 'x 4s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
        fadeInUp5: {
            animation: 'x 5s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
        fadeInUp3: {
            animation: 'x 3s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
        fadeInLeft: {
            animation: 'x 4s',
            animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
        },
        fadeInRight: {
            animation: 'x 4s',
            animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
        },
        fadeIn: {
            animation: 'x 3s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        },
        rotateIn: {
            animation: 'x 4s',
            animationName: Radium.keyframes(rotateIn, 'rotateIn')
        }
    };

    const skills = [
        {
            src: Css,
            text: 'CSS'
        },
        {
            src: Html,
            text: 'HTML'
        },
        {
            src: Javascript,
            text: 'Javascript'
        },
        {
            src: ReactLogo,
            text: 'React.js'
        },
        {
            src: Redux,
            text: 'Redux.js'
        },
        {
            src: Firebase,
            text: 'Firebase'
        },
        {
            src: Material,
            text: 'Material-UI'
        }
    ];
    return (
        <div className="messenger">
            <StyleRoot>
                <div className="messenger__header">
                    <p style={styles.fadeInUp3}>Messenger</p>
                    <h3 style={styles.fadeInUp5}>This is a messenger web app for chatting.</h3>
                </div>
                <div className="messenger__skills" style={styles.fadeInUp4}>
                    { skills?.map((image, index) => {
                        return (
                            <div className="messenger__oneSkill" style={index % 2 === 0 ? styles.fadeInLeft : styles.fadeInRight} key={index}>
                                <img src={image.src} alt=""/>
                                <p>{image.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="messenger__info" style={styles.fadeInUp4}>
                    <h4>Authentication</h4><br/>
                    <p>
                        In this project I used Firebase Google Authentication.
                    </p>
                    <p>
                        In order to use this app the user must first authenticate. The user can login using his google credentials or since this is a demo app he also has a option to make a demo login by pressing the "Demo Login" button.
                    </p>
                    <p>
                        After that the user will be redirected to the app.
                    </p>
                </div>
                <div className="messenger__info" style={styles.fadeInUp4}>
                    <h4>The Messenger App</h4><br/>
                    <p>
                        On the messenger app there are two main parts of the app. One is on the left side, the "Sidebar" where the user can see already open channels and the other is the "Chat" section on the right side where he can see the content of the opened chat.
                    </p>
                    <p>
                        In the header of the sidebar the user can search for existing channels, he can create a new channel by clicking on the button next to the search input and he can logout by clicking on the last button in the sidebar header.
                    </p>
                    <p>
                        In the header of the chat the user can see the name of the channel and he can delete the channel by clicking on the button on the right side of the header.
                    </p>
                    <p>
                        In the body of the chat the user can see all sent and received messages in different colors.
                    </p>
                    <p>
                        In the footer of the chat the user can write his message in the input field and send them by either pressing the Enter button or clicking on the send button on the right side of the footer.
                    </p>
                </div>
                <div className="messenger__buttonContainer" style={styles.rotateIn}>
                    <Link to={'/work'}>
                        <button className="glow-on-hover" type="button">GO BACK</button>
                    </Link>
                </div>
            </StyleRoot>
        </div>
    )
}

export default Messenger;