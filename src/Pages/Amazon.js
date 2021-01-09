import React from "react";
import '../assets/css/Amazon.css'
import Radium, {StyleRoot} from "radium";
import {fadeIn, fadeInLeft, fadeInRight, fadeInUp, rotateIn} from "react-animations";
import Css from "../assets/images/svg/css-5.svg";
import Html from "../assets/images/svg/html5.svg";
import Javascript from "../assets/images/svg/javascript-4.svg";
import Node from "../assets/images/svg/node-js-logo.svg";
import Express from "../assets/images/svg/express-109.svg";
import ReactLogo from "../assets/images/svg/react-2.svg";
import Stripe from "../assets/images/svg/stripe.svg";
import Firebase from "../assets/images/svg/firebase-1.svg";
import Material from "../assets/images/svg/material-ui-1.svg";
import {Link} from "react-router-dom";

function Amazon() {
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
            src: Node,
            text: 'Node.js'
        },
        {
            src: Express,
            text: 'Express.js'
        },
        {
            src: ReactLogo,
            text: 'React.js'
        },
        {
            src: Stripe,
            text: 'Stripe'
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
        <div className="amazon">
            <StyleRoot>
                <div className="amazon__header">
                    <p style={styles.fadeInUp3}>Amazon</p>
                    <h3 style={styles.fadeInUp5}>This is an E-Commerce website clone of Amazon Shopping site.</h3>
                </div>
                <div className="amazon__skills" style={styles.fadeInUp4}>
                    { skills?.map((image, index) => {
                        return (
                            <div className="amazon__oneSkill" style={index % 2 === 0 ? styles.fadeInLeft : styles.fadeInRight} key={index}>
                                <img src={image.src} alt=""/>
                                <p>{image.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="amazon__info" style={styles.fadeInUp4}>
                    <h4>Authentication</h4><br/>
                    <p>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
                    </p>
                    <p>
                        In order to buy a product on this page the user must authenticate. To do that he must click on the "Sign In" button in the header.
                    </p>
                    <p>
                        After that the user will be redirected to the Login page. The user can then Login or create a new account.
                        In this app the user can use dummy data to create the account so he does not have to enter his real email address or password.
                        After that he can use that data to login.
                    </p>
                    <p>
                        After the login the user-data will be stored in the React context and used throughout the app.
                    </p>
                </div>
                <div className="amazon__info" style={styles.fadeInUp4}>
                    <h4>The Amazon App</h4><br/>
                    <p>
                        After the login the user will automatically be redirected to the home page. There the user can add products to the basket or even search for them in the header.
                    </p>
                    <p>
                        Once the user has picked his products and added them to the basket he now can click on the basket icon on the right side of the header.
                    </p>
                    <p>
                        On the checkout page the user can see the products he added to the basket and also the subtotal. There is also an option to remove the products if he changed his mind.
                    </p>
                    <p>
                        If the user clicks on the "Proceed to checkout" button he will be redirected on the payment page. There he can once more see his projects and the subtotal.
                    </p>
                    <p>
                        In this section, in order to buy the products, the user must enter his Credit-Card data. Since this is a demo app feel free to use the following data:
                    </p>
                    <div className="amazon__cardInfo">
                        <div>
                            <p>Credit-Card number: 4242 4242 4242 4242</p>
                            <p>Expiration date: 04 / 24</p>
                            <p>Security code: 242</p>
                            <p>Post Code: 42424</p>
                        </div>
                    </div><br/>
                    <p>Once the user entered the Credit-Card data and pressed the "Buy Now" button he will be redirected to the Orders page where the user can see all the orders he made.</p>
                    <p>From here if he wants to return to the home page all he needs to do is to press the amazon logo in the header.</p>
                </div>
                <div className="amazon__buttonContainer" style={styles.rotateIn}>
                    <Link to={'/work'}>
                        <button className="glow-on-hover" type="button">GO BACK</button>
                    </Link>
                </div>
            </StyleRoot>
        </div>
    )
}

export default Amazon;