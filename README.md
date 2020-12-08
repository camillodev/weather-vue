<h1 align="center">Weather Vue</h1>

## Doubts about the weather? Join us and check the weather at your location, or simply any city in the world.
<p align="center">
 <img src="https://img.shields.io/static/v1?label=vue&message=2.6.11&color=<red>"/>
 <img src="https://img.shields.io/static/v1?label=bootstrap&message=4.5.3&color=<red>"/>
 <img src="https://img.shields.io/static/v1?label=axios&message=0.21.0&color=<red>"/>
 <img src="https://img.shields.io/static/v1?label=npm&message=4.12.0&color=<red>"/>
</p>

# Contents

<p align="center">
 <a href="#About">About</a> •
 <a href="#Features">Features</a> • 
 <a href="#Installation">Installation </a>•
 <a href="#Tecnology">Tecnology </a>
</p>

## About

<p> Weather Vue is a Vuejs study project. The idea is to create a project that the user can check in formations about the local weather or another place. Do you want to have a date tonight, or meet your friends, or planing the best outfit, or avoid the rain?  You can count on Weather Vue</p>

## Features

 - [x] be responsive  
 - [x] to have an input where the user can write the location (city, for example) they want to get info for  
 - [x] Show the weather info currently for the input location:
    - [x] Location (ie. Brussels, Belgium)
    - [x] Current weather description (ie. raining)
    - [x] Current temperature
    - [x] Todays high temperature
    - [x] Todays low temperature  

- [x] Add extra info about the current conditions on a hidden component the user can toggle the visibility: 
    - [x]  Wind Speed
    - [x]  Humidity
    - [x]  Pressure
    - [x]  Sunrise/Sunset Time
- [x] Show basic weather info for the next 7 days on that location  
- [x] Show basic weather info for the last 30 days on that location
- [x] If there's a need to make a big number of requests, make them concurrent

## Installation

### Requirements
Before you start, you will need to have installed in your pc the following tools: 
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
I also recomend to have a good code editing tool like [VSCode](https://code.visualstudio.com/)

### 🎲 Running the application

#### Clone this repository
$ git clone <https://github.com/camillodev/weather-vue/>

#### acess the project folder using your termnal
$ cd weather-vue

#### Install the project dependencies
$ npm install

#### running the application
$ npm run serve

#### the project will be ruuning at the port: 8080 - acess <http://localhost:8080> 


## Tecnology

The following tools were used to build this project:

- [Node.js](https://nodejs.org/en/)
- [VueJs](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Bootstrap Vue](https://bootstrap-vue.org/)
- [Axios](https://bootstrap-vue.org/)
- [OpenWeatherMapAPI](https://openweathermap.org/)
- [MomentJS](https://momentjs.com/)
