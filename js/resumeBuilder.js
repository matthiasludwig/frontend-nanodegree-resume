// Resume Objects

var work = {
    "jobs" : [
        {
            "employer" : "",
            "title" : "",
            "location" : "",
            "dates" : "",
            "description" : ""
        },
        {
        "employer" : "",
            "title" : "",
            "location" : "",
            "dates" : "",
            "description" : ""
        }
    ]
}

var projects = {
    "projects" : [
        {
            "title" : "",
            "dates" : "",
            "description" : "",
            "images" : ["images/projectA.jpg"]
        },
        {
            "title" : "",
            "dates" : "",
            "description" : "",
            "images" : ["images/projectB.jpg"]
        }
    ]
}

var bio = {
    "name" : "Matthias Ludwig",
    "role" : "Business Geek",
    "welcome-message" : "Welcome to my resume!",
    "contacts" : {
        "mobile" : "(415) 483-6433",
        "email" : "matthiasludwig@me.com",
        "github" : "matthiasludwig",
        "twitter" : "matthiasludw",
        "location" : "San Francisco, CA"
    },
    "skills" : ["Business", "Programming", "Front-End Web Development"]
}

var education = {
    "schools" : [
        {
            "name" : "Hult International Business School",
            "location" : "San Francisco, CA",
            "degree" : "Master's Degree",
            "majors" : "International Business",
            "dates" : 2015,
            "url" : "www.hult.edu"
        },
        {
            "name" : "Saarland University",
            "location" : "Saarbruecken, Germany",
            "degree" : "Bachelor's Degree",
            "majors" : "Business and Law",
            "dates" : 2014,
            "url" : "www.uni-saarland.de"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "FEND Nanodegree",
            "school" : "Udacity",
            "dates" : 2016,
            "url" : "www.udacity.com"
        },
        {
            "title" : "Introduction to Computer Science",
            "school" : "Harvard on edX",
            "dates" : 2016,
            "url" : "www.edx.org"
        }
    ]
}


/*
#
# Excercises of L1 of the Udacity JavaScript Basics course
#

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
*/