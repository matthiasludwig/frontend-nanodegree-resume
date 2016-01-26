/*
The document follows the following structure
1. JSON Object
2. Function Decleration
3. Calling of the function (declared in 2.)
*/

var bio = {
    "name" : "Matthias Ludwig",
    "role" : "Business Geek",
    "welcomemessage" : "Welcome to my resume!",
    "contacts" : {
        "mobile" : "(415) 483-6433",
        "email" : "matthiasludwig@me.com",
        "github" : "matthiasludwig",
        "linkedin" : "/in/ludwigmatthias",
        "homepage" : "www.matthiasludwig.me",
        "twitter" : "matthiasludw",
        "location" : "San Francisco, CA"
    },
    "skills" : ["Business", "Programming", "Front-End Web Development"],
    "biopic" : "images/matthias.jpg"
}

bio.display = function()
{
    //Formatting the Data from the JSON with function from the helper.js file
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedHomepage = HTMLblog.replace("%data%", bio.contacts.homepage);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);

    //Header Section of the Resume with Data
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedLinkedin);
    $('#topContacts').append(formattedHomepage);
	$('#topContacts').append(formattedTwitter);
	$('#topContacts').append(formattedLocation);
	$('#header').append(formattedBiopic);
	$('#header').append(formattedWelcome);

    // Footer Section with Contact data
	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedLinkedin);
    $('#footerContacts').append(formattedHomepage);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedLocation);

    //Adding Skills from the skills Array to the header
    if (bio.skills.length > 0)
    {
        $('#header').append(HTMLskillsStart);

        for (skill in bio.skills)
        {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}


var work = {
    "jobs" : [
        {
            "employer" : "HoloBuilder Inc.",
            "title" : "Intern Business Development",
            "location" : "San Francisco, CA",
            "dates" : "09/2015 to present",
            "description" : "Worked closely with the VP of Business Development and Product on various assignments during the expansion of the company from Germany to the US."
        },
        {
            "employer" : "Consiglia e.V.",
            "title" : "Head of IT",
            "location" : "Saarbruecken, Germany",
            "dates" : "02/2012 until 10/2014",
            "description" : "Administered the internal IT infrastructure that included the homepage, Facebook page and E-Mail Accounts. Modeled and improved the processes that apply to all departments, as well as during consulting projects. Led different project groups to continuously improve the organization and find new business opportunities."
        },
        {
            "employer" : "KWT - Office for Knowledge and Technology Transfer of Saarland University",
            "title" : "Student Assistant",
            "location" : "Saarbruecken, Germany",
            "dates" : "04/2013 until 08/2013",
            "description" : "Supported entrepreneurs with different educational backgrounds on how to start and grow their business. Advised students on business development workshops and scholarships that best suited their needs."
        },
        {
            "employer" : "German-European Law Library (Deutsch-Europäisches Juridicum)",
            "title" : "Student Assistant",
            "location" : "Saarbruecken, Germany",
            "dates" : "09/2011 until 03/2014",
            "description" : "Helped law students and professionals with their research needs for books and online databases. Answered user’s questions and helped them to find the right resources. Developed a Facebook page for communication and user support purposes."
        }
    ]
}

work.display = function()
{
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


var projects = {
    "projects" : [
        {
            "title" : "Boersenwochenende",
            "dates" : "2013",
            "description" : "The Börsenwochenende organized by the Börseninitiative Saar e.V. is an excursion to different financial institutions in Frankfurt a. Main, Germany. The goal is to put students in touch with financial companies and to gain new insights from the financial sector.",
            "images" : ["images/boersenwochenende.jpg"]
        },
        {
            "title" : "Consiglia Homepage",
            "dates" : "2014",
            "description" : "Transferring of the current homepage to a homepage to Squarespace",
            "images" : ["images/consigliahomepage.jpg"]
        }
    ]
}
projects.display = function()
{
    for (project in projects.projects)
    {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

        var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;
        $('.project-entry:last').append(formattedProject);
    }
}


var education = {
    "schools" : [
        {
            "name" : "Hult International Business School",
            "location" : "San Francisco, CA",
            "degree" : "Master's Degree",
            "majors" : "International Business",
            "dates" : "2014 until 2015",
            "url" : "www.hult.edu"
        },
        {
            "name" : "Saarland University",
            "location" : "Saarbruecken, Germany",
            "degree" : "Bachelor's Degree",
            "majors" : "Business and Law",
            "dates" : "2009 until 2014",
            "url" : "www.uni-saarland.de"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "FEND Nanodegree",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "www.udacity.com"
        },
        {
            "title" : "Introduction to Computer Science",
            "school" : "Harvard on edX",
            "dates" : "2016",
            "url" : "www.edx.org"
        }
    ]
}

education.display = function()
{
    for (school in education.schools)
    {
        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);

        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolLocation);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolMajor);
        $('.education-entry:last').append(formattedSchoolUrl);
    }

    $('.education-entry:last').append(HTMLonlineClasses);

    for (online in education.onlineCourses)
    {
        var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

        var formattedOnline = formattedOnlineName + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
        $('.education-entry:last').append(formattedOnline);
    }
}

//Call the function declared with the JSON above to make the content visible in the HTMLemail

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);


/*
# International Name function
#

$('#main').append(internationalizeButton);

function inName(name) {

    var finalName = name;

    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");

    return finalName;
}
*/


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
