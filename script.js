let chosenDate = "";
let chosenTime = "";
let chosenLocation = "";
let chosenDress = "";
let chosenBring = "";
let chosenPlans = "";




// START ADVENTURE

window.startAdventure = function(){

    const opening =
    document.getElementById("opening");


    const planner =
    document.getElementById("planner");


    if(opening && planner){

        opening.classList.add("hidden");

        planner.classList.remove("hidden");

    }

};








// PREVIEW ADVENTURE

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
        !chosenLocation
    ){

        alert(
        "Please add your date, time, and location ♡"
        );

        return;

    }







    document
    .getElementById("planner")
    .classList.add("hidden");



    document
    .getElementById("preview")
    .classList.remove("hidden");








    document
    .getElementById("previewDetails")
    .innerHTML = `


📅 <b>Adventure Date</b><br>
${chosenDate}


<br><br>


⏰ <b>Time</b><br>
${chosenTime}


<br><br>


📍 <b>Location</b><br>
${chosenLocation}


<br><br>


👗 <b>Trainer Outfit</b><br>
${chosenDress || "Something cute ♡"}


<br><br>


🎒 <b>Inventory</b><br>
${chosenBring || "Just yourself 💜"}


<br><br>


🌸 <b>Quest</b><br>
${chosenPlans || "A surprise adventure ✨"}

`;

};









// CALENDAR


window.downloadCalendar = function(){


    const start =
    new Date(
        chosenDate +
        "T" +
        chosenTime
    );



    const end =
    new Date(start);


    end.setHours(
        end.getHours()+1
    );





    function formatDate(date){

        return date
        .toISOString()
        .replace(/[-:]/g,"")
        .split(".")[0]
        +"Z";

    }







    const calendar =

`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:💜 Our Little Adventure
DTSTART:${formatDate(start)}
DTEND:${formatDate(end)}
LOCATION:${chosenLocation}
DESCRIPTION:
Dress: ${chosenDress}
Bring: ${chosenBring}
Plans: ${chosenPlans}
END:VEVENT
END:VCALENDAR`;







    const blob =
    new Blob(
        [calendar],
        {
            type:
            "text/calendar;charset=utf-8"
        }
    );



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







// FIREBASE SAVE


if(window.saveAdventure){

    window.saveAdventure(
        adventureData
    );

}








// EMAILJS


emailjs.send(

"service_msyya77",

"template_z217jfy",

adventureData

)

.then(function(response){

console.log(
"EMAIL SENT 💜",
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





console.log(
"Pokémon Date Site loaded 💜"
);