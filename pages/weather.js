import React from "react";

const weather = ({ weatherData }) => {
  return (
    <div>{weatherData.name + ", " + process.env.NEXT_PUBLIC_ANALYTICS_ID}</div>
  );
};

export default weather;

export async function getServerSideProps() {
  const ipRequest = await fetch(`http://ip-api.com/json/`);
  const ipData = await ipRequest.json();
  const city = ipData.regionName;

  const api_key = process.env.API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${api_key}&units=metric`;
  const weatherRequest = await fetch(url);
  const weatherData = await weatherRequest.json();

  console.log(weatherData);
  return { props: { weatherData } };
}
