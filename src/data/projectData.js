import truckOnGif from '../images/truck-on.gif';
import breezy from '../images/breezy.png';
import capita from '../images/capita.png';
import rancid from '../images/rancid.png';
import spacestagram from '../images/spacestagram.png';
import hopAround from '../images/hop-around.png';
import tonys from '../images/tonys.gif';
import qu from '../images/qu.png';

const projects = [
  {
    id: '1234',
    title: 'Truck On',
    description: 'Truck on is a fullstack project directed towards offroading and the desire for exploration. The main purpose of this app was to help offroaders find trails with activities that they enjoy. Users can search for trails based on difficulty, traffic, activities or type of trail. Otherwise browse from a list of some local favorite trails. Upon selecting a trail more details are provided such as the current weather and comments from other offroaders that have completed that specific trail.',
    url: 'https://github.com/dorifuto-dev/truck-on-ui',
    deployedUrl: 'https://truck-on.surge.sh/',
    imageUrl: truckOnGif
  },
  {
    id: '1235',
    title: 'Breezy - Breath Easy',
    description: 'The purpose of the Breathe-Easy (Breezy) App is to help a user find the cleanest air around them. The idea for this project was conceived in the aftermath of the Colorado/Western fire season in 2020 and 2021. Built with React, TypeScript, and the IQAir Air Quality API.',
    url: 'https://github.com/hheyhhay/breathe-easy-stretch',
    deployedUrl: 'https://breezy-breathe-easy.surge.sh/',
    imageUrl: breezy
  },
  {
    id: '1236',
    title: 'Capita - Stocks info',
    description: 'Capita is an application designed to help the everyday stock investor to quickly view trends on their portfolios. Built with React, using stocks API from Financial Modeling Prep.',
    url: 'https://github.com/dorifuto-dev/Capita',
    deployedUrl: 'http://capita.surge.sh/',
    imageUrl: capita
  },
  {
    id: '1237',
    title: 'Rancid Tomatillos',
    description: 'Rancid Tomatillos, a fresh new movie website offering reviews and information about the newest releases and top movies. Created with React.',
    url: 'https://github.com/hheyhhay/rancid-tomatillos',
    deployedUrl: 'https://rancid-tomalittos.surge.sh/',
    imageUrl: rancid
  },
  {
    id: '1238',
    title: 'Spacestagram',
    description: 'Feeling spaced out? Check out some cool space photos on Spacestagram -- the universe\'s new social network. Brought to you by React and the NASA Astronomy Image of the Day API',
    url: '',
    deployedUrl: 'https://spacestagram-shopify.surge.sh/',
    imageUrl: spacestagram
  },
  {
    id: '1239',
    title: 'HopAround Travel',
    description: 'Mock travel business app built in vanilla JS.',
    url: '',
    deployedUrl: '',
    imageUrl: hopAround
  },
  {
    id: '1240',
    title: 'Tony\'s Taste of Singapore',
    description: 'Static comp challenge based off an existing design',
    url: '',
    deployedUrl: '',
    imageUrl: tonys
  },
  {
    id: '1241',
    title: 'QU - Musical Voting App',
    description: 'Developed for OUR Tech, LLC. QU is an app designed to be like a virtual song suggest list where guests have communication with the DJ or party host. Tech stack uses React Native.',
    url: '',
    deployedUrl: '',
    imageUrl: qu
  }
]

export default projects;