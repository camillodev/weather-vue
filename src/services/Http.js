import axios from 'axios'
const appId = "c2c2dfcaf351f1055d85bf842177d3dc";

const handleRequestError = (error) => {
    console.log(error);
    throw error
}


const client = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5",
  });
  

const get = (url) => {
    url = `${url}&appid=${appId}&units=metric`;

    return client.get(url).catch((error) => {
        handleRequestError(error)
    })
}

export default {
    get
}

