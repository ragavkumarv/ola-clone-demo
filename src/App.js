import "./App.css";

import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// const center = { lat: 28.7041, lng: 77.1025 };

function App() {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const theme = createTheme({
    palette: {
      primary: {
        main: green[600],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h1>This your staring point</h1>
    </ThemeProvider>
  );
}

function LocationFinder() {}

function RideSelect() {
  const duration = 10;
  const rides = [
    {
      pic: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini-active.svg",
      time: duration,
      // price: "₹131",
      description: "Comfy, economical cars",
      type: "Mini",
      multiplier: 5,
      discount: 0,
    },
    {
      pic: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto.svg",
      time: duration,
      // price: "₹131",
      description: "Get autos at your doorstep",
      type: "Auto",
      multiplier: 4,
      discount: 0,
    },
    {
      pic: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play-active.svg",
      time: duration,
      // price: "₹131",
      description: "Music, movies, TV and more",
      type: "Prime Play",
      multiplier: 6,
      discount: 5,
    },

    {
      pic: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan-active.svg",
      time: duration,
      // price: "₹131",
      description: "Spacious sedans, top drivers",
      type: "Prime Sedan",
      multiplier: 5.5,
      discount: 5,
    },
    {
      pic: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike-active.svg",
      time: duration,
      // price: "₹131",
      description: "Beat the traffic on a bike",
      type: "Bike",
      multiplier: 2,
      discount: 4,
    },
    {
      pic: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv-active.svg",
      time: duration,
      // price: "₹131",
      description: "Spacious SUVs",
      type: "Prime Suv",
      multiplier: 8,
      discount: 0,
    },
  ];

  return <></>;
}

export default App;
