import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React from 'react';

function WeatherComp() {

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'c4e477bbbadbc1ea649b6de02ab1cc4b',
        lat: '33.892166',
        lon: '9.561555499999997',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });

    return (
      <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Ariana"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
      />
      );
}

export default WeatherComp;