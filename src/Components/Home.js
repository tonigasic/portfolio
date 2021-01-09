import React from 'react';
import '../assets/css/Home.css';
import '../assets/css/GlowingButton.css';
import { fadeInUp, zoomIn, rotateIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Link} from "react-router-dom";

function Home() {
    const styles = {
        fadeInUp2: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
        fadeInUp3: {
            animation: 'x 4s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
        zoomIn: {
            animation: 'x 4s',
            animationName: Radium.keyframes(zoomIn, 'zoomIn')
        },
        rotateIn: {
            animation: 'x 4s',
            animationName: Radium.keyframes(rotateIn, 'rotateIn')
        }
    }

    return (
        <div className="content">
            <div className="content__welcomeContainer">
                <StyleRoot>
                    <div style={styles.fadeInUp2}>
                        <h1 className="content__welcome">Hello, My name is <span>Toni Gasic</span>.</h1>
                    </div>
                </StyleRoot>
                <StyleRoot>
                    <div style={styles.fadeInUp3}>
                        <h2 className="content__welcome">Full Stack Web Developer.</h2>
                    </div>
                </StyleRoot>
                <StyleRoot className="content__welcomeContainerTyping">
                    <div style={styles.zoomIn}>
                        <h2>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</h2>
                    </div>
                </StyleRoot>
            </div>
            <StyleRoot>
                <div className="content__buttonContainer" style={styles.rotateIn}>
                    <Link to={'/about'}>
                        <button className="glow-on-hover" type="button">TONI GASIC</button>
                    </Link>
                </div>
            </StyleRoot>
            <br/>
        </div>
    );
}

export default Home;
