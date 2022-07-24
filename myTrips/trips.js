/*
FILE			: trips.js
PROGRAMMER		: Nawriz Ibrahim
DATE			: 2022-07-24
DESCRIPTION		: This file uses the trips object defined by the library. 
                  Once the click event is fired, the application will gather all the user input and 
                  validate it and then start adding to the list.
*/

// Import the function push() and the object trip from lib_trips.js
import {push, trip} from './lib_trips.js';

$(document).ready( () => 
{
    $("#add_trip").click( () => 
    {
       trip.destination = $("#destination").val();
       trip.miles = parseFloat($("#miles").val());
       trip.gallons = parseFloat($("#gallons").val());
       
       push(trip);
    });
    
    $("#destination").focus();
});


/*-------- Below code behaves the same and produce the same result using object literal ----------*/ 
// import {trip} from './lib_trips.js';

// $(document).ready( () => 
// {
//     $("#add_trip").click( () => 
//     {
//        trip.destination = $("#destination").val();
//        trip.miles = parseFloat($("#miles").val());
//        trip.gallons = parseFloat($("#gallons").val());
       
//        trip.push(trip);
//     });
    
//     $("#destination").focus();
// });