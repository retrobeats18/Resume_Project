var bio = {
    'name': 'Jordan Strickland',
    'role': 'Front End Developer',
    'contacts': {
        'mobile': '555-555-5555',
        'email': 'ninjadev@randomdomain.com',
        'github': 'retrobeats18',
        'twitter': '@retrobeats18',
        'location': 'Lafayette, IN'
    },
    'welcomeMessage': 'Hi, thank you for taking a look at my resume. I am currently taking courses at Udacity and aspiriing to be a Front End Developer! Please take a moment to review my work experience and coding projects below.',
    'skills': ['HTML', 'CSS', 'Bootstrap', 'CSS Grid Based Layouts', 'JS', 'Responsive Design'],
    'biopic': 'images/me.jpg'
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts').append(formattedMobile);

    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $('#topContacts').append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(formattedGithub);

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append(formattedLocation);

    var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedBiopic);

    var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcome);

    $('#header').append(HTMLskillsStart);

    if (bio.skills.length > 0) {
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkill);
        });
    };

    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedGithub);
};

bio.display();

var education = {
    'schools': [{
        'name': 'Udacity',
        'location': 'Online, IN',
        'degree': 'Nanodegree',
        'majors': ['Front End Web Development'],
        'dates': '2016-Present',
        'url': 'www.udacity.com'
    }, {
        'name': 'Washington State University',
        'location': 'Pullman, WA',
        'degree': 'Bachelors of Science',
        'majors': ['Biology Pre-PT'],
        'dates': '2014',
        'url': 'https://wsu.edu/'
    }, {
        'name': 'Clark College',
        'location': 'Vancouver, WA',
        'degree': 'Associates of Art',
        'majors': ['General Studies'],
        'dates': '2011',
        'url': 'http://www.clark.edu/'
    }],
    'onlineCourses': [{
        'title': 'HTML Syntax',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'http://udacity.com'
    }, {
        'title': 'CSS Syntax',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'http://udacity.com'
    }, {
        'title': 'Intro to HTML and CSS',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'http://udacity.com'
    }, {
        'title': 'JavaScript Syntax',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'http://udacity.com'
    }, {
        'title': 'Intro to jQuery',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'http://udacity.com'
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        console.log(school);
        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $('.education-entry:last').append(formattedSchoolNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
        $('.education-entry:last').append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
        $('.education-entry:last').append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.majors);
        $('.education-entry:last').append(formattedSchoolMajor);
    });

    $('#education').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $('#education').append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
        var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
        $('.education-entry:last').append(formattedOnlineSchoolTitle);

        var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.dates);
        $('.education-entry:last').append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace('%data%', course.url);
        $('.education-entry:last').append(formattedOnlineURL);
    });
};

education.display();


var work = {
    'jobs': [{
        'title': 'Lab Technician',
        'employer': 'Dow Agro Sciences',
        'dates': 'February 2016 - Present',
        'location': 'West Lafayette, IN',
        'description': 'As a Cell biology Lab Technician...'
    }, {
        'title': 'Lab Technician',
        'employer': 'Purdue University',
        'dates': 'October 2015 - February 2016',
        'location': 'West Lafayette, IN',
        'description': '...'
    }, {
        'title': 'Administrative Assistant',
        'employer': 'Flagstaff Community Christian School',
        'dates': 'December 2014 - June 2015',
        'location': 'Flagstaff, AZ',
        'description': '...'
    }, {
        'title': 'Interim Testing Coordinator, Disability Resources',
        'employer': 'Northern Arizona University',
        'dates': 'September 2014 - December 2014',
        'location': 'Flagstaff, AZ',
        'description': '...'
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        $('.work-entry:last').append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        $('.work-entry:last').append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(formattedDescription);
    });
};

work.display();

var projects = {
    'projects': [{
        'title': 'Build a Portfolio',
        'dates': 'Aug. 2016',
        'description': 'Live Link: https://retrobeats18.github.io/',
        'images': ['images/portfolio1.png', 'images/portfolio2.png']
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        $('.project-entry:last').append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedProjectDescription);

        project.images.forEach(function(img) {
            var formattedImage = HTMLprojectImage.replace('%data%', img);
            $('.project-entry:last').append(formattedImage);
        });
    });
};

projects.display();

$("#mapDiv").append(googleMap);