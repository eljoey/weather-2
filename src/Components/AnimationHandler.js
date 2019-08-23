import React from 'react';
import NightAnimation from '../Weather animations/Night';
import RainyAnimation from '../Weather animations/Rainy';
import SnowAnimation from '../Weather animations/Snow';
import SunnyAnimation from '../Weather animations/Sunny';
import ThunderStormAnimation from '../Weather animations/ThunderStorm';
import CloudyAnimation from '../Weather animations/Cloudy';
import FewCloudsAnimation from '../Weather animations/FewClouds';
import FewCloudsNightAnimation from '../Weather animations/FewCloudsNight';

const AnimationHandler = id => {
  const cloudyIDs = ['03d', '03n', '04d', '04n', '50d', '50n'];
  const rainyIDs = ['09d', '09n', '10d', '10n'];
  const snowIDs = ['13d', '13n'];
  const tStormIDs = ['11d', '11n'];

  if (cloudyIDs.includes(id)) {
    return <CloudyAnimation />;
  } else if (id === '02d') {
    return <FewCloudsAnimation />;
  } else if (id === '02n') {
    return <FewCloudsNightAnimation />;
  } else if (id === '01n') {
    return <NightAnimation />;
  } else if (rainyIDs.includes(id)) {
    return <RainyAnimation />;
  } else if (snowIDs.includes(id)) {
    return <SnowAnimation />;
  } else if (id === '01d') {
    return <SunnyAnimation />;
  } else if (tStormIDs.includes(id)) {
    return <ThunderStormAnimation />;
  }
};

export default AnimationHandler;
