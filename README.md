# Alarm Clock

#### Alarm Clock App using Node, Gulp and Bower

#### By *Leah Sherrell and Maria DelCastillo*

## Description

Goals:

- As a user of your alarm clock, I would like to be able to view the current time.

- I would also like to be able to enter a time into a form to set an alarm.

- The alarm should turn on at the specified alarm time.

- As a user, when the alarm turns on I want it to either show me something on the screen (like a picture/animation) or make a sound, or both.

## Technologies Used
 - Node
 - Gulp
 - Bower

## Setup/Installation Requirements

Download Repo

Make sure you have Node installed

run $ npm install and $ bower install in terminal

run $ gulp build and $ gulp serve

### npm and bower Commands for future Dev of Similar Projects (with basic file structure at 4th commit)
Initial npm(CEO), gulp(GM), browserify (interpreter for browser, creates build folder with app.js file)
  - npm init
  - npm install gulp --save-dev
  - npm install browserify --save-dev
  - npm install vinyl-source-stream --save-dev
To concatinate front-end files into app.js:
  - npm install gulp-concat --save-dev
Makes files smaller and faster
  - npm install gulp-uglify --save-dev
Give us an environment variable (either development or production)
  - npm install gulp-util --save-dev
Able to delete tmp and build folder/file
  - npm install del --save-dev
Add linter (debugger)
  - npm install jshint --save-dev
  - npm install gulp-jshint --save-dev

Front-end manager (bower)
  - bower init
Get jQuery
  - bower install jquery --save
Get Bootstrap
  - bower install bootstrap --save


### License

MIT License

Copyright (c) 2017 **Leah Sherrell and Maria DelCastillo**
