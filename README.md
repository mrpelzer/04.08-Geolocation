# Geolocation API - Where Am I!?

### Complete this assignment using Apple Safari browser

## Overview: In this exercise you will learn about JavaScript’s geolocation API to pull data about a user’s longitude and latitude.

### PART 1
- On line 5 of your Javascript, type the following code:
`navigator.geolocation.getCurrentPosition(showPosition);`

- Let’s look at what’s here:
- The “navigator” gets information about the user’s browser. The “geolocation” initializes the use of the Geolocation API.
- "getCurrentPosition” is a method that gets the user’s current position from the geolocation object.
- “showPosition” calls the showPosition function on line 19
  
- On line 10, add the following code: `x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;`

Breaking this one down, we have:
- A string to replace the innerHTML of the `<p>` on line 9
“Position” - the parameter of this function that takes the location obtained in our “getLocation” function on line 16.

- “coords.latitude” & “coords.longitude” - both of these are native methods used to get the latitude and longitude of a specific location.
  
- Now preview your work in a browser and press the button - give it a second to send and receive info across the API...and you should have your location on in your browser!
  
- Check to see if the location is right by plugging your coordinates here.


## PART 2 - Someone is always watching you! (using watchPosition)

- The method “watchPosition” is used on the Geolocation Object to constantly update the user’s position.  Ever use Google Maps on a phone and see the blue dot that shows where you are?   You know how it moves when you move?  That’s the watchPosition method in action.
  
On line 16, enter the following code: `navigator.geolocation.watchPosition(showPosition);`

- Notice that the watchPosition method is now in place of the getCurrentPosition method from Part 1.

- The rest is the same - instead of checking your position once, this will check your position continuously (if you were previewing this on a mobile phone, you would see the coordinates update as you move).

## CHALLENGE

- update the showPosition(position) by calling createMap

- pass the parameter position

- update the createMap method by adding the parameter position

- inside update the map.setCenter property value by passing within the array

    - latitude, longitude values *lik in the showPosition method

- Example: [Documentation](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter)

- copy the token in the Google classroom assignment and paste it at the end of accessToken

- uncomment mapboxgl.accessToken