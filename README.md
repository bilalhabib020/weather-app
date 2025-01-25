# Weather App

## Description

This **Weather App** is a React-based application that allows users to search and retrieve real-time weather data for any city. The app dynamically updates its background based on the time of day (morning, afternoon, evening, or night), enhancing the user experience. It leverages the OpenWeatherMap API to fetch weather details, providing a seamless and visually engaging way to stay updated on the current weather conditions.

## Features

- **Real-Time Weather Data:** Displays the temperature, weather type, wind speed, humidity, and pressure for the searched city.
- **Dynamic Backgrounds:** Changes the app's background based on the time of day.
- **Responsive UI:** Built with Bootstrap for a clean and mobile-friendly design.
- **Error Handling:** Notifies users when an invalid city is entered or if there's an issue fetching data.
- **Loading Indicator:** Displays a loader while fetching weather data.

## Technologies Used

- **React** for building the user interface.
- **Axios** for making API calls.
- **Bootstrap** for styling and responsiveness.
- **React-Loader-Spinner** for the loading animation.
- **OpenWeatherMap API** for fetching weather data.

## How It Works

1. Users enter the name of a city in the search bar.
2. The app fetches real-time weather data from the OpenWeatherMap API when the "Enter" key is pressed.
3. Weather details such as temperature, description, wind speed, and more are displayed.
4. If an invalid city is entered, an error message is shown.

## Demo

You can view the deployed app on GitHub Pages [here](INSERT_GITHUB_PAGES_LINK).

---

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000`.

---

## API Key Setup

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).
2. Replace the placeholder API key in `App.jsx`:
   ```javascript
   const api_key = 'YOUR_API_KEY';
   ```

---

## Project Structure

```
src/
├── components/
│   ├── Error.jsx      // Component for error messages
│   ├── Input.jsx      // Component for the input field
│   └── Output.jsx     // Component for displaying weather details
├── App.css            // Custom styling
├── App.jsx            // Main app component
└── index.js           // Entry point
```

---

## Contributing

Feel free to submit issues or pull requests. Contributions are always welcome!

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

