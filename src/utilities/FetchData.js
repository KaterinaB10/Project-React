const axios = require("axios");

const options = {
  method: "GET",
  url: "https://news-on-education.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "bcfe5a59efmsh9f6626c627741d7p1468f3jsnf0bd5aa9c906",
    "X-RapidAPI-Host": "news-on-education.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

console.log(axios);
