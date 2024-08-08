import axios from "axios";

export const fetchSurah = (callback) => {
  axios
    .get(`${process.env.REACT_APP_SERVER}v2/surat`)
    .then((data) => {
      callback(data.data.data);
      console.log(`data `, data.data.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const fetchDetailSurah = (id, callback) => {
  axios
    .get(`${process.env.REACT_APP_SERVER}v2/surat/${id}`)
    .then((data) => {
      callback(data.data.data);
      console.log("data detail", data.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
