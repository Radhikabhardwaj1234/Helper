const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(cors());

const BASE_URL = "https://calendarific.com/api/v2/holidays";

// Route: Get holidays by country + year
app.get("/api/holidays/:country/:year", async (req, res) => {
  const { country, year } = req.params;

  // 👉 If request is US + 2019, serve local JSON
//   if (country.toUpperCase() === "US" && year === "2019") {
    try {
      const data = fs.readFileSync("test.json", "utf8");
      const holidays = JSON.parse(data);
      return res.json(holidays);
    } catch (err) {
      console.error("Error reading local JSON:", err.message);
      return res.status(500).json({ error: "Failed to read local holidays file" });
    }
//   }

  // Otherwise, call Calendarific API
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         api_key: process.env.CALENDARIFIC_API_KEY,
//         country,
//         year,
//       },
//     });

//     const holidays = response.data.response.holidays.map((h) => ({
//       name: h.name,
//       date: h.date.iso,
//       type: h.type,
//     }));

//     res.json({ country, year, holidays });
//   } catch (error) {
//     console.error("Error fetching holidays:", error.message);
//     res.status(500).json({ error: "Failed to fetch holidays" });
//   }
});


// Endpoint to fetch supported countries
app.get("/api/countries", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://calendarific.com/api/v2/countries?api_key=${process.env.CALENDARIFIC_API_KEY}`
//     );
//     // Response example: response.data.response.countries
//     res.json(response.data.response.countries);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch countries" });
//   }

 try {
      const data = fs.readFileSync("countries.json", "utf8");
      const countries = JSON.parse(data);
      return res.json(countries);
    } catch (err) {
      console.error("Error reading local JSON:", err.message);
      return res.status(500).json({ error: "Failed to read countries" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
