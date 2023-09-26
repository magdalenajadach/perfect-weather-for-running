// import axios from "axios";

// export default async (req, res) => {
//   const { city } = req.query;

//   const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;

//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apiKey}`;

//   try {
//     const response = await axios.get(apiUrl);
//     const data = response.data;
//     console.log(response.data);
//     console.log(response);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Something went wrong" });
//   }
// };

const axios = require("axios");

const apiKey = "71c46698e59a3626804c14b9d91c28fd";
const city = "London"; // Replace
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios
  .get(apiUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
