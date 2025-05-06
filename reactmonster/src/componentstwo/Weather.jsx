// const Weather = ({ temperature }) => {
//   if (temperature < 15) {
//     return <p>It's cold outside!</p>;
//   } else if (temperature < 25) {
//     return <p>It's nice outside!</p>;
//   } else {
//     return <p>It's hot outside!</p>;
//   }
// };

// export default Weather;

const Weather = () => {
  let temp = 3;

  if (temp < 15) {
    return <h1>It's cold outside!</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>It's nice outside</h1>;
  } else if (temp > 25) {
    return <h1>It's hot outside!</h1>;
  }
};

export default Weather;
