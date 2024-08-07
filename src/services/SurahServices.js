import axios from "axios"

export const fetchSurah = (callback) => {
    axios.get(
        `${process.env.REACT_APP_SERVER}v1/surah`)
        .then((data) => {
            callback(data.data.data)
            console.log(`data `, data.data.data);
        })
        .catch((err) => {
            console.log('error', err);
        })
}