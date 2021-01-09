import React from 'react';
import '../assets/css/MySkills.css';
import Radium, {StyleRoot} from "radium";
import {fadeInLeft, fadeInRight, fadeInUp, zoomIn} from "react-animations";
import SkillsImages from '../SkillsImages';
import ToolsImages from '../ToolsImages';

function MySkills() {
    const styles = {
        zoomIn: {
            animation: 'x 4s',
            animationName: Radium.keyframes(zoomIn, 'zoomIn')
        },
        fadeInUp3: {
            animation: 'x 4s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
        fadeInUp4: {
            animation: 'x 4s',
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
    };

    return (
        <div className="mySkills">
            <StyleRoot>
                <div className="mySkills__header">
                    <p style={styles.fadeInUp3}>Languages and Technologies that I have learned and applied to my projects</p>
                </div>
                <div className="mySkills__skills" style={styles.zoomIn}>
                    { SkillsImages?.Images?.map((image, index) => {
                        return (
                            <div className="mySkills__oneSkill" style={index % 2 === 0 ? styles.fadeInLeft : styles.fadeInRight} key={index}>
                                <img src={image.src} alt=""/>
                                <p>{image.text}</p>
                            </div>
                        )
                    })}
                </div>
                <br/>
                <div className="mySkills__header">
                    <p style={styles.fadeInUp3}>My weapons of choice to help tackle any project</p>
                </div>
                <div className="mySkills__skills" style={styles.zoomIn}>
                    { ToolsImages?.Images?.map((image, index) => {
                        return (
                            <div className="mySkills__oneSkill" style={index % 2 === 0 ? styles.fadeInLeft : styles.fadeInRight} key={index}>
                                <img src={image.src} alt=""/>
                                <p>{image.text}</p>
                            </div>
                        )
                    })}
                </div>
            </StyleRoot>
        </div>
    );
}

export default MySkills;
