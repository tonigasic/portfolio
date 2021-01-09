import axios from "axios";

const instance = axios.create({
    //baseURL: 'http://localhost:5001/toni-gasic-portfolio/us-central1/sendMail' //the local api (cloud function) url
    baseURL: 'https://us-central1-toni-gasic-portfolio.cloudfunctions.net/sendMail' //the api (cloud function) url
})

export default instance;