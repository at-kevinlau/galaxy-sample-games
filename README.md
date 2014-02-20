# galaxy-sample-games

Sample games used for testing Galaxy navigator.game API. Only button_test.html actually interfaces with the API at the moment.

Type ``npm start`` to run, go to http://0.0.0.0:1337/static/button_test.html to run the test page. (Other games are included in here, but may or may not actually interface with navigator.game.)

Alternatively, try http://at-kevinlau.github.io/galaxy-sample-games/button_test.html

If nothing seems to be working and an error about already being authenticated shows up in the console, try deleting the 'authenticated' key in redis.

WIP - progress paused until v1.

TODO:
* Implement API usage into all sample games
* Remove some extra modules from the copy/pasted galaxy-api server
* Remove some of the libraries (and require installing them globally on a local machine instead)
