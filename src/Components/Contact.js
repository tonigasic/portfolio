import React, {useState} from 'react';
import '../assets/css/Contact.css';
import Radium, {StyleRoot} from "radium";
import {fadeInLeft, fadeInRight, fadeInUp} from "react-animations";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import axios from "../axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const styles = {
        fadeInUp4: {
            animation: 'x 4s',
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
        }
    };

    const sendEmail = () => {
        if (validateRequest()) {
            axios({
                method: 'post',
                url: `?name=${name}&email=${email}&message=${message}`
            })
                .then((response) => {
                    if (response.status === 200) {
                        setMessage('');
                        setName('');
                        setEmail('');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    const validateRequest = () => {
        if (name.trim() === '') {
            setErrorMessage('Please enter your name');
            setOpenSnackbar(true);
            return false;
        }
        if (email.trim() === '' || !validateEmail(email)) {
            setErrorMessage('Please enter valid Email');
            setOpenSnackbar(true);
            return false;
        }
        if (message.trim() === '') {
            setErrorMessage('Please enter your message');
            setOpenSnackbar(true);
            return false;
        }

        return true;
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleCloseSnackbar = (event, reason) => {
        setOpenSnackbar(false);
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <div className="contact">

            <StyleRoot>
                <div className="contact__header">
                    <p style={styles.fadeInUp3}>Contact</p>
                    <h1 style={styles.fadeInUp4}>GET IN TOUCH!</h1>
                </div>
            </StyleRoot>
            <StyleRoot>
                <div className="contact__container" style={styles.fadeInUp4}>
                        <div className="contact__infoContainer" style={styles.fadeInLeft}>
                            <div className="contact__infoDivs">
                                <div className="contact__infoIcon">
                                    <RoomIcon fontSize="large"/>
                                </div>
                                <div className="contact__infoText">
                                    <strong>Munich, DE</strong>
                                </div>

                            </div>
                            <div className="contact__infoDivs">
                                <div className="contact__infoIcon">
                                    <PhoneIcon fontSize="large"/>
                                </div>
                                <div className="contact__infoText">
                                    <strong>+491/76-5811-0999</strong>
                                </div>

                            </div>
                            <div className="contact__infoDivs">
                                <div className="contact__infoIcon">
                                    <MailIcon fontSize="large"/>
                                </div>
                                <div className="contact__infoText">
                                    <strong>toni.gasic.portfolio@gmail.com</strong>
                                </div>

                            </div>
                        </div>
                        <div className="contact__infoInputsContainer" style={styles.fadeInRight}>
                            <div className="contact__inputDivs">
                                <TextField
                                    className="contact__input"
                                    label="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="contact__inputDivs">
                                <TextField
                                    className="contact__input"
                                    label="Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="contact__inputDivs">
                                <TextField
                                    className="contact__input"
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={10}
                                    defaultValue=""
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    variant="outlined"
                                />
                            </div>
                            <div className="contact__inputDivs">
                                <button className="glow-on-hover" type="button" onClick={sendEmail}>SEND MESSAGE</button>
                            </div>
                        </div>
                </div>
            </StyleRoot>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Contact;
