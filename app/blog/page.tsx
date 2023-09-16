// pages/index.js
// 'use client'
// import React, { useState } from 'react';
// import Head from 'next/head';

// interface WeatherAppProps {}

// const WeatherApp: React.FC<WeatherAppProps> = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState<any>(null); // You can specify a more specific type here

//   const fetchWeatherData = async () => {
//     // Replace 'YOUR_API_KEY' with your actual API key
//     const apiKey = 'YOUR_API_KEY';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <Head>
//         <title>Weather App</title>
//       </Head>
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-semibold mb-4">Weather App</h1>
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Enter city name..."
//             className="border p-2 w-64 rounded-l focus:outline-none"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
//             onClick={fetchWeatherData}
//           >
//             Get Weather
//           </button>
//         </div>
//         {weatherData && (
//           <div className="mt-4">
//             <h2 className="text-xl font-semibold">
//               {weatherData.name}, {weatherData.sys?.country || 'N/A'}
//             </h2>
//             <div className="text-4xl font-bold mt-2">
//             {Math.round((weatherData.main.temp - 273.15) || 0)}°C
//             </div>
//             <div className="mt-2">{weatherData.weather[0].description}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;
