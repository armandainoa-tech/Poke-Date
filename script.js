let chosenDate = "";
let chosenTime = "";
let chosenLocation = "";
let chosenDress = "";
let chosenBring = "";
let chosenPlans = "";





// START PAGE

window.startAdventure = function(){


    document
    .getElementById("opening")
    .classList.add("hidden");


    document
    .getElementById("planner")
    .classList.remove("hidden");


};








// PREVIEW

window.previewAdventure = function(){


    chosenDate =
    document.getElementById("dateInput").value;


    chosenTime =
    document.getElementById("timeInput").value;


    chosenLocation =
    document.getElementById("locationInput").value;


    chosenDress =
    document.getElementById("dressInput").value;


    chosenBring =
    document.getElementById("bringInput").value;


    chosenPlans =
    document.getElementById("plansInput").value;





    if(
        !chosenDate ||
        !chosenTime ||
        !chosenLocation ||
        !chosenDress ||
        !chosenBring ||
        !chosenPlans
    ){

        alert("Fill out all the adventure details ♡");

        return;

    }







    document
    .getElementById("previewDetails")
    .innerHTML =

`

📅 <b>Date:</b><br>
${chosenDate}

<br><br>

🕒 <b>Time:</b><br>
${chosenTime}

<br><br>

📍 <b>Location:</b><br>
${chosenLocation}

<br><br>

👗 <b>Dress Code:</b><br>
${chosenDress}

<br><br>

🎒 <b>Bring:</b><br>
${chosenBring}

<br><br>

🌸 <b>Plans:</b><br>
${chosenPlans}

`;






    document
    .getElementById("planner")
    .classList.add("hidden");



    document
    .getElementById("preview")
    .classList.remove("hidden");


};












// CONFIRM ADVENTURE

window.confirmAdventure = function(){



const adventureData = {


    message:

    "Your little adventure was accepted ♡",



    date:

    chosenDate,



    time:

    chosenTime,



    location:

    chosenLocation,



    dressCode:

    chosenDress,



    bring:

    chosenBring,



    plans:

    chosenPlans

};







console.log(
"Adventure Data:",
adventureData
);







// SAVE FIREBASE

if(window.saveAdventure){


    window.saveAdventure(
        adventureData
    );


}







// SEND EMAIL

emailjs.send(

    "service_msyya77",

    "template_z217jfy",

    adventureData

)

.then(function(response){


    console.log(
        "EMAIL SENT 💌",
        response
    );


})


.catch(function(error){


    console.error(
        "EMAIL FAILED",
        error
    );


});








document
.getElementById("preview")
.classList.add("hidden");



document
.getElementById("acceptedPage")
.classList.remove("hidden");



};











// CALENDAR

window.downloadCalendar = function(){

    if(!chosenDate || !chosenTime){

        alert("Choose date and time first ♡");
        return;

    }


    const start = new Date(
        chosenDate + "T" + chosenTime
    );


    const end = new Date(start);

    end.setHours(
        end.getHours() + 1
    );


    function formatDate(date){

        return date
        .toISOString()
        .replace(/[-:]/g,"")
        .split(".")[0] + "Z";

    }



    const calendarURL =
    "data:text/calendar;charset=utf8," +

    encodeURIComponent(

`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:💜 Our Little Adventure ♡
DTSTART:${formatDate(start)}
DTEND:${formatDate(end)}
LOCATION:${chosenLocation}
DESCRIPTION:${chosenPlans}
END:VEVENT
END:VCALENDAR`

    );



    window.open(calendarURL);

};






const url =
URL.createObjectURL(blob);




const link =
document.createElement("a");



link.href=url;


link.download =
"Our-Little-Adventure.ics";



document.body.appendChild(link);


link.click();


document.body.removeChild(link);



URL.revokeObjectURL(url);



};







console.log(
"Date Site Pokémon Edition 💜"
);