$("#main").append("Matthias Ludwig");

var awesomeThoughts = "I am Matthias and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);

var name = "Matthias Ludwig";
var role = "Business Geek";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var contactInfo = ["112 Columbus Avenue", "94133", "San Francisco, CA"];
var skills = ["Business", "Programming", "Front-End Web Development"];


var bio = {
    "name" : "Matthias Ludwig",
    "role" : "Business Geek",
    "contact" : contactInfo,
    "picture" : "images/me.jpg",
    "welcome-message" : "Welcome to my page!",
    "skills" : skills
}

//$("#main").append(bio.skills); //Testing if Bio is correctly stored


var work = {
"currentJob" : "Intern: Business Development",
"currentEmployer" : "HoloBuilder Inc.",
"years" : 0,
"city" : "San Francisco, CA"
}

var education = {
"school" : "Hult International Business School",
"years" : 1,
"city" : "San Francisco, CA"
}

$("#main").append(work["currentJob"]);
$("#main").append(education.school);

//Onwards to JSON

var edu = {
    "schools" : [
        {
            "name" : "Hult International Business School",
            "city" : "San Francisco, CA",
            "major" : "Master of International Business",
            "graduation" : 2015
        },
        {
            "name" : "Saarland University",
            "city" : "Saarbruecken, Germany",
            "major" : "Bachelor of Science in Business and Law",
            "graduation" : 2014
        }
    ]
}
