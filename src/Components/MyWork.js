import React from 'react';
import '../assets/css/MyWork.css';
import ProjectCard from "./ProjectCard";
import Radium, {StyleRoot} from "radium";
import {fadeIn, fadeInLeft, fadeInRight, fadeInUp, rotateIn, zoomIn} from "react-animations";
import projects from "../Projects";

function MyWork() {
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
        },
        zoomIn: {
            animation: 'x 4s',
            animationName: Radium.keyframes(zoomIn, 'zoomIn')
        },
    };

    return (
        <div className="myWork">
            <StyleRoot>
                <div className="myWork__header">
                    <p style={styles.fadeInUp3}>My Work</p><br/>
                    <h3 style={styles.fadeInUp4}>From ideation to creation, here are some applications that I have developed</h3><br/>
                </div>
                <div className="myWork__products" style={styles.zoomIn}>
                    { projects?.map((project, index) => {
                        return (
                            <ProjectCard
                                index={index}
                                key={index}
                                description={project.description}
                                demoLink={project.demoLink}
                                img={project.img}
                                infoLink={project.infoLink}
                                title={project.title}
                            />
                        )
                    })}
                </div>
            </StyleRoot>
        </div>
    );
}

export default MyWork;
