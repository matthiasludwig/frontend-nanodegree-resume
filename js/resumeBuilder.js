//Header formatting

var name = "Matthias Ludwig";
var role = "Business Geek";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Resume Objects

var work = {
    "jobs" : [
        {
            "employer" : "HoloBuilder Inc.",
            "title" : "Intern Business Development",
            "location" : "San Francisco, CA",
            "dates" : "09/2015 to present",
            "description" : "Testtext for the job at HoloBuilder Inc."
        },
        {
        "employer" : "Consiglia e.V.",
            "title" : "Head of IT",
            "location" : "Saarbruecken, Germany",
            "dates" : "04/2011 until 10/2014",
            "description" : "Testtext for job at Consiglia e.V."
        }
    ]
}

var projects = {
    "projects" : [
        {
            "title" : "Project A",
            "dates" : "2013 until 2014",
            "description" : "I did Project A",
            "images" : ["images/projectA.jpg"]
        },
        {
            "title" : "Project B",
            "dates" : "2014 until 2015",
            "description" : "I did Project B afterwards.",
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

/* Lesson 2 - Control Flow */

function displayWork()
{

if (bio.skills.length > 0)
{
    $('#header').append(HTMLskillsStart);

    for (skill in bio.skills)
    {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}

for (job in work.jobs)
{
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var formattedEmployerTitle = formattedEmployer + formattedJobTitle + formattedJobLocation + formattedJobDates + formattedJobDescription;
    $('.work-entry:last').append(formattedEmployerTitle);
}
}

displayWork();

$('#main').append(internationalizeButton);

function inName(oldname) {

    var finalName = oldName;

    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    
    return finalName;
}

projects.display = displayProjects()
{
    for (project in projects.projects)
{
    $('#projects').append(HTMLprojectStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var formattedEmployerTitle = formattedEmployer + formattedJobTitle + formattedJobLocation + formattedJobDates + formattedJobDescription;
    $('.work-entry:last').append(formattedEmployerTitle);
}
}


/*
#
# Excercises of L1 of the Udacity JavaScript Basics course
#




/*
#
# Excercises from the online class "JavaScript Basics"
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
<<<<<<< Updated upstream
}
*/