
/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Jordan Strickland");
// $("#header").append("Hi");
//var firstName = "jordan";
//console.log(firstName);
// var awesomeThoughts = "I am Jordan and I am AWESOME!"
// console.log(awesomeThoughts);
// var funThoughts =
//  [string].replace ([old], [new])
//  awesomeThoughts.replace ("AWESOME", "FUN");
// console.log(funThoughts);
// $("#main").append(funThoughts);
var bio = {
    "name": "Jordan Strickland",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "ninjadev@randomdomain.com",
        "github": "retrobeats18",
        "twitter": "@retrobeats18",
        "location": "Lafayette, IN"
    },
    "welcomeMessage": "Hi, thank you for taking a look at my resume. I am currently taking courses at Udacity and aspiriing to be a Front End Developer! Please take a moment to review my work experience and coding projects below.",
    "skills": ["HTML", "CSS", "Bootstrap", "CSS Grid Based Layouts", "JS", "Responsive Design"],
    "bioPic": "images/me.jpg"
};

//var name = "Jordan Strickland";
var formattedName = HTMLheaderName.replace("%data%", bio.name);

//var role = "Front End Developer";
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//var formattedContact = HTMLcontactGeneric.replace("%data", bio.contacts);
//$("#topContacts").append(HTMLcontactGeneric);
bio.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBiopic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);

    for (var skill in bio.skills) {
        if (bio.skills.length > 0) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithub);
};

bio.display();

/*if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
} */

//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#header").prepend(bio.contacts["mobile"]);
//$("#header").prepend(bio.contacts["email"]);
//$("#header").prepend(bio.contacts["github"]);
//$("#header").prepend(bio.contacts["location"]);

// var work = {};
// work.position = "Lab Technician";
// work.employer = "Dow Agro Sciences";
// work.years = 0.5;


// var education = {};
// education["lastSchool"] = "Washington State University";
// education["years"] = "2011-2014";
// education["city"] = "Pullman, WA";

// $("#main").append(work["position"]);
// $("#main").append(education.lastSchool);

var education = {
    "schools": [{
        "name": "Udacity",
        "location": "Online, IN",
        "degree": "Nanodegree",
        "majors": "Front End Web Development",
        "dates": "2016-Present",
        "url": "www.udacity.com"
    }, {
        "name": "Washington State University",
        "location": "Pullman, WA",
        "degree": "Bachelors of Science",
        "majors": "Biology Pre-PT",
        "dates": 2014,
        "url": "..."
    }, {
        "name": "Clark College",
        "location": "Vancouver, WA",
        "degree": "Associates of Art",
        "majors": "General Studies",
        "dates": 2011,
        "url": "..."
    }],
    "onlineCourses": [{
        "title": "HTML Syntax",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://udacity.com"
    }, {
        "title": "CSS Syntax",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://udacity.com"
    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://udacity.com"
    }, {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://udacity.com"
    }, {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://udacity.com"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        console.log(school);
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineSchoolTitle);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};

education.display();


var work = {
    "jobs": [{
        "title": "Lab Technician",
        "employer": "Dow Agro Sciences",
        "dates": "February 2016 - Present",
        "location": "West Lafayette, IN",
        "description": "As a Cell biology Lab Technician..."
    }, {
        "title": "Lab Technician",
        "employer": "Purdue University",
        "dates": "October 2015 - February 2016",
        "location": "West Lafayette, IN",
        "description": "..."
    }, {
        "title": "Administrative Assistant",
        "employer": "Flagstaff Community Christian School",
        "dates": "December 2014 - June 2015",
        "location": "Flagstaff, AZ",
        "description": "..."
    }, {
        "title": "Interim Testing Coordinator, Disability Resources",
        "employer": "Northern Arizona University",
        "dates": "September 2014 - December 2014",
        "location": "Flagstaff, AZ",
        "description": "..."
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

var projects = {
    "projects": [{
        "title": "Build a Portfolio",
        "dates": "Aug. 2016",
        "description": "Live Link: https://retrobeats18.github.io/",
        "image": ["images/portfolio1.png", "images/portfolio2.png"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);

        project.image.forEach(function(img) {
            var formattedImage = HTMLprojectImage.replace("%data%", img);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

projects.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
