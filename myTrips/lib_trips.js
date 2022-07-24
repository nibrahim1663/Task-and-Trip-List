/*
FILE			: lib_trips.js
PROGRAMMER		: Nawriz Ibrahim
DATE			: 2022-07-24
DESCRIPTION		: This file has all the logic for the Trip Application. It uses the module pattern concept to 
                  create a trips object that uses a private constant to store the array of Trip objects but provides 
                  public properties and methods named push(), totalMpg, and toString().
*/

// Export the function push() and the object trip
export {push, trip};

// private variables and constants
let strTrip ="";
let str = "";
let totalMiles = 0;        
let totalGallons = 0; 
const trip = { destination: "", miles: 0, gallons: 0 };
const trips = { _trips:[] }; 

/*
Function	: isValid()
Description	: This is a private function and is called to validate the user input
Parameters	: NOTHING
Returns		: True if user input is VALID, false otherwise
*/
const isValid = () => 
{          
    if (trip.destination == "" || isNaN(trip.miles) || isNaN(trip.gallons)) 
    {
        return false;
    } 
    else if (trip.miles <= 0 || trip.gallons <= 0)
    {
        return false;
    } 
    else 
    {
        return true;
    }
};


/*
Function	: mpg()
Description	: This is a private function and is called to calculate the miles per gallon
Parameters	: NOTHING
Returns		: The calculated miles per gallon
*/
const mpg = () => 
{                
    var milesPerGallon = 0;
    milesPerGallon = trip.miles / trip.gallons;
    return milesPerGallon;
};


/*
Function	: showTrip()
Description	: This is a private function and is called to show the trip string and keep a track of its last value.
Parameters	: NOTHING
Returns		: The last value of the trip string
*/
const showTrip = () => 
{
    const milePerGallon= mpg().toFixed(1);
    let temp = `${trip.destination}: Miles - ${trip.miles}; MPG - ${milePerGallon}` + "\n";
    strTrip += temp;
    return strTrip;
};


/*
Function	: push()
Description	: This is a public function and is called to push/add a new trip to the trip list each time the
              the event listener for the click button(Add Trip) is fired.
Parameters	: The trip to be added
Returns		: NOTHING
*/
const push = (x) => 
{
    var errorMsg =  document.getElementById("errorMsg");
    errorMsg.innerText = "";
   
    if (isValid()) 
    {
        trips._trips.push(x);
        $("#trip_list").val(toString());
        $("#destination").val("");
        $("#miles").val("");
        $("#gallons").val("");
        $("#destination").focus();
    } 
    else 
    {
        errorMsg.style.display = "block";
        errorMsg.innerText = "OBS!!! Please complete all fields." + "\n" + "Miles and gallons must be numeric and greater than zero.";
    }
    
}

/*
Function	: totalMpg()
Description	: This is a public function and is called to calculate the total miles per gallons
Parameters	: NOTHING
Returns		: The total calculated miles per gallons
*/
const totalMpg = () => 
{         
    var result = 0;

    for (let x of trips._trips) 
    {
        totalMiles += trip.miles;
        totalGallons += trip.gallons;
    }

    result = totalMiles / totalGallons;

    return result;
}

/*
Function	: toString()
Description	: This is a public function and is called to concatinate the trip string to another string and return it.
Parameters	: NOTHING
Returns		: The total calculated miles per gallons
*/
const toString = () =>
{
    str = showTrip() + "\n";
    str += "\nCumulative MPG: " + totalMpg().toFixed(1);
    return str;
}


/*-------- Below code behaves the same and produce the same result but it uses object literal ----------*/ 

// export {trip};

// let str1 ="";
// let str = "";
// let totalMiles = 0;        
// let totalGallons = 0; 
// // private variables and constants

// const trip = {destination: "", miles: 0, gallons: 0,

// isValid() 
// {              // a read-only property
//     if (trip.destination == "" || isNaN(trip.miles) || isNaN(trip.gallons)) 
//     {
//         return false;
//     } else if (trip.miles <= 0 || trip.gallons <= 0){
//         return false;
//     } else {
//         return true;
//     }
// },

// mpg() 
// {                
//     return trip.miles / trip.gallons;
// },

// showTrip() 
// {
//     const mpg = trip.mpg().toFixed(1);
//     let temp = `${trip.destination}: Miles - ${trip.miles}; MPG - ${mpg}` + "\n";
//     str1 += temp;
//     return str1;
// },
//  _trips:[],
    

//     push(x) 
//     {
      
//     // only allow Trip objects to be added to array

        
//         if (trip.isValid()) 
//         {
//             this._trips.push(x);
//             $("#trip_list").val(trip.toString());

//             $("#destination").val("");
//             $("#miles").val("");
//             $("#gallons").val("");

//             $("#destination").focus();

            
//         } 
//         else {
//             alert("Please complete all fields.\nMiles and gallons " + "must be numeric and greater than zero.");
//             $("#destination").select();
//         }
        
//     },

//   totalMpg() 
//   {             // a read-only property
              
//         for (let x of this._trips) 
//         {
//             totalMiles += trip.miles;
//             totalGallons += trip.gallons;
//         }
//         return totalMiles / totalGallons;
//     },

//     toString()
//     {
//         str = trip.showTrip() + "\n";
//         str += "\nCumulative MPG: " + this.totalMpg().toFixed(1);
//         return str;
//     }
// };