import axios from "axios";

export default async (req, res) => {
  const { city } = req.query;

  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
