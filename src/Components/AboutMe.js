import React, {useState} from 'react';
import '../assets/css/AboutMe.css';
import Radium, {StyleRoot} from "radium";
import {fadeInUp, fadeInLeft, fadeInRight, fadeIn, rotateIn} from "react-animations";
import ResponsiveGallery from 'react-responsive-gallery';
import Images from '../Images';
import cv from '../assets/documents/blank.pdf';
import image from '../assets/images/me2.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Button from '@material-ui/core/Button';

function AboutMe() {
    const [showImages, setShowImages] = useState(false);

    const styles = {
        fadeInUp4: {
            animation: 'x 3s',
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
    }

    return (
        <div className="aboutMe">
            <StyleRoot>
                <div className="aboutMe__header">
                    <p style={styles.fadeInUp4}>About Me</p>
                </div>
            </StyleRoot>

            <StyleRoot>
                <div className="aboutMe__intro" style={styles.fadeInUp3}>
                    <div className="aboutMe__infoImageContainer" style={styles.fadeInLeft}>
                        <img className="aboutMe__infoImage" src={image} alt="" />
                    </div>
                    <div className="aboutMe__infoTextContainer" style={styles.fadeInRight}>
                        <div className="aboutMe__infoTextWelcome">
                            <h2>Hello! I'm Toni Gasic,
                            </h2>
                            <h2>A Full Stack Developer
                                From Munich, DE.
                            </h2>
                        </div>
                        <div className="aboutMe__infoText">
                            <p>&emsp;&emsp;Very positive with an easy-going character, results driven,
                                ambitious and a team player with great soft skills, that's me..
                            </p>
                            <br/>
                            <p>&emsp;&emsp;As a web developer, I enjoy using my obsessive attention to detail, my love for making things,
                                and my mission-driven work ethic to literally change the world.
                                That's why I’m excited to make a big impact at a high growing company.
                            </p>
                            <br/>
                            <p>&emsp;&emsp;I act as a professional with motto's 'Yes, we can!' and 'Nothing is impossible!'.
                                I like to travel, learn new things, learn foreign languages and meet new people.
                            </p>
                            <br/>
                            <p className="aboutMe__infoTextPuls">&emsp;&emsp;
                                <strong>No matter what technology, time or place, the spirit is always the same : Create And Have Fun !!!.</strong>
                            </p>
                            <div className="aboutMe__buttonContainer" style={styles.rotateIn}>
                                <a href={cv} download>
                                    <button className="glow-on-hover" type="button">DOWNLOAD MY CV</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.fadeInLeft}>
                    { showImages ?
                        <div className="aboutMe__buttonContainer" style={styles.rotateIn}>
                            <Button className="glow-on-hover" type="button" endIcon={<ExpandLessIcon/>} onClick={(e) => setShowImages(false)}>Hide Gallery</Button>
                        </div>
                        :
                        <div className="aboutMe__buttonContainer" style={styles.rotateIn}>
                            <Button className="glow-on-hover" type="button" endIcon={<ExpandMoreIcon/>} onClick={(e) => setShowImages(true)}>Show Gallery</Button>
                        </div>
                    }
                </div>
                {showImages ?
                    <div className="aboutMe__images" style={styles.fadeIn}>
                        <ResponsiveGallery useLightBox={true} images={Images?.Images}/>
                    </div>
                    :
                    ''
                }
            </StyleRoot>

        </div>
    );
}

export default AboutMe;
