

//<editor-fold desc="LOADING: Firebase init code">
// Initialize Firebase
var config = {
    apiKey: "AIzaSyApi3weoa0PPvli41nrx_p7Jir4BzGwFm0",
    authDomain: "careerhubv2.firebaseapp.com",
    databaseURL: "https://careerhubv2.firebaseio.com",
    projectId: "careerhubv2",
    storageBucket: "careerhubv2.appspot.com",
    messagingSenderId: "67408577281"
};
firebase.initializeApp(config);

var database = firebase.database();
var ref = database.ref('jobs');


//</editor-fold>

//<editor-fold desc="FUNCTION: For loading/fading the screen loading gif">
jQuery(window).on('load',function() {
    // Animate loader off screen
    $("#pageLoadingContainer").fadeOut("slow");
});
//</editor-fold>

//<editor-fold desc="FUNCTIONS: main login page functions, for going to and from the employer/student dashboard">
function goToStudentLogin(){
    //This function is attatched to buttons in the login, it flips the div (for fancy purposes)
    var container = document.getElementById('login-flipper');
    var backButton = document.getElementById('backToLoginButton');
    var loginButton = document.getElementById('login-submit-button');
    backButton.innerHTML = "I'm Not a Student!";
    loginButton.setAttribute("onClick", "goToStudentDash()");
    container.style.webkitTransform = "rotateY(180deg)";

}

function goToEmployeeLogin(){
    //This function is attatched to buttons in the login, it flips the div (for fancy purposes)
    var container = document.getElementById('login-flipper');
    var backButton = document.getElementById('backToLoginButton');
    var loginButton = document.getElementById('login-submit-button');
    backButton.innerHTML = "I'm Not an Employer!";
    loginButton.setAttribute("onClick", "goToEmployeeDash()");
    container.style.webkitTransform = "rotateY(180deg)";
}

function backToLoginSelection(){
    //This function is attatched to buttons in the login, it flips the div (for fancy purposes)
    var container2 = document.getElementById('login-flipper');
    container2.style.webkitTransform = "rotateY(0deg)";
}

function goToEmployeeDash(){
    //Get loading animation div
    var loadIcon = document.getElementById("login-loader");

    //Hide make loading animation visible and change the cursor to loading
    loadIcon.style.visibility = "visible";
    $("body").css("cursor", "progress");

    //This waits for 3 seconds before opening the page
    setTimeout(function (){window.open("../employerDash/employerDashIndex.html","_self");}, 2000);

}

function goToStudentDash(){
    //Get loading animation div
    var loadIcon = document.getElementById("login-loader");

    //Hide make loading animation visible and change the cursor to loading
    loadIcon.style.visibility= "visible";
    $("body").css("cursor", "progress");

    //This waits for 3 seconds before opening the page
    setTimeout(function (){
        window.open("../studentDash/studentDashIndex.html","_self");
        }, 3000);
}
//</editor-fold>

//<editor-fold desc="FUNCTION: Button for posting data to the database">
function submitTo_DB(){

    //Getting input values from page
    var jobTitle = document.getElementById("jobTitleInput").value;
    var jobDescription = document.getElementById("jobDescriptionInput").value;
    var jobPay = document.getElementById("jobPayInput").value;
    var jobEmail = document.getElementById("jobEmailInput").value;

    console.log(jobTitle, jobDescription, jobPay, jobEmail);

    //Creating data
    var data= {
        title: jobTitle,
        description: jobDescription,
        jobPay: jobPay,
        email: jobEmail

    };

    //Pushes data to the DB
    ref.push(data);
}
//</editor-fold>

function post_job_to_db(){

    //Getting input values from page
    var job_class = document.getElementById("job_class").value;
    var job_title = document.getElementById("job_title").value;
    var job_location = document.getElementById("job_location").value;
    var job_type = document.getElementById("job_type").value;
    var job_salary = document.getElementById("job_salary").value;
    var job_email_contact = document.getElementById("job_email_contact").value;
    var job_description = document.getElementById("job_description").value;



    console.log(job_class, job_title, job_location, job_type, job_salary, job_email_contact, job_description);

    //Creating data
    var job_data= {
        job_class:job_class,
        job_title:job_title,
        job_location:job_location,
        job_type:job_type,
        job_salary:job_salary,
        job_email_contact:job_email_contact,
        job_description:job_description

    };

    //Pushes data to the DB
    ref.push(job_data);


    //takes page back to emp dash
    window.location.href = "../../../../../careerHubV2/public/root/employerDash/employerDashIndex.html";

}

function get_job_from_firebase() {

}
















//<editor-fold desc="FUNCTION: Check to see which page we're currently on">
//This if statement will check to see if the page is the student dashboard; If we are on the student dashboard
// then run the job fetching code.
function checkPage(){
    if (document.title == "Student Dashboard"){
        console.log("We Are On The Student Dashboard");
        return true;
    }
    else{
        console.log("We Are Not On The Student Dashboard");
        return false;
    }
}

//</editor-fold>

//<editor-fold desc="FUNCTIONS: Loading job postings dynamically">
function fetchJobs(){
    //This is getting the data based on weather or not it's a value
    ref.on('value', gotData, errData);
}

//logging the data that's got from the firebase ref.on call into the console
function gotData(data){
    //getting 'jobs' db branch from firebase database
    var jobs = data.val();
    var keys = Object.keys(jobs);
    console.log(keys);

    //This clears the jobposting div of any elements if any were in there before we run the rest of the code and add more elements in
    document.getElementById("jobDisplayDiv").innerHTML = "";

    //running through a for loop based on the ammount of items in the db
    for (var i = 0; i < keys.length; i++){
        //calling in values from the database
        var k = keys[i];
        var titl = jobs[k].job_title;
        var desc = jobs[k].job_description;
        var email = jobs[k].job_email_contact;
        var jpay = jobs[k].job_salary;
        var location = jobs[k].job_location;
        var jtype = jobs[k].job_type;
        var jclass = jobs[k].job_class;

        console.log(titl, desc, jpay, email);

        //create an element on the page for each job in the db
        var main_container = document.createElement("div");
        var top_container = document.createElement("div");
        var left_container = document.createElement("div");
        var leftP1 = document.createElement("p");
        var leftP2 = document.createElement("p");
        var middle_container = document.createElement("div");
        var right_container = document.createElement("div");
        var resumeBtn = document.createElement("input");
        var submitResume = document.createElement("BUTTON");
        var leftP3 = document.createElement("p");
        var leftP4 = document.createElement("p");

        //Assigning values from the database into text notes
        var leftText1 = document.createTextNode(titl+" - ");
        var leftText2 = document.createTextNode(jpay+" - ");
        var leftText3 = document.createTextNode(location+" - ");
        var leftText4 = document.createTextNode(jtype);
        var topText = document.createTextNode(jclass);
        var middleText = document.createTextNode(desc);
        var rightText = document.createTextNode(email);
        var resumeText = document.createTextNode("Upload");
        var submitResumeText = document.createTextNode("Submit!");

        //adding the text to left, middle, and right divs
        left_container.appendChild(leftP1);
        left_container.appendChild(leftP2);
        middle_container.appendChild(middleText);
        right_container.appendChild(rightText);
        leftP1.appendChild(leftText1);
        leftP2.appendChild(leftText2);
        resumeBtn.appendChild(resumeText);
        top_container.appendChild(document.createTextNode("wowww ayylmao, job classification"));
        leftP3.appendChild(document.createTextNode("location"));
        leftP4.appendChild(document.createTextNode(":job type"));
        left_container.appendChild(leftP3);
        left_container.appendChild(leftP4);

        //adding ID's to each element
        left_container.setAttribute("id", "jobDisplayDiv-post-title");
        middle_container.setAttribute("id", "jobDisplayDiv-post-desc");
        right_container.setAttribute("id", "jobDisplayDiv-post-email");
        main_container.setAttribute("id", "jobDisplayDiv-post-container");
        resumeBtn.setAttribute("id", "inputGroupFile01");
        resumeBtn.setAttribute("class", "custom-file-input");
        resumeBtn.setAttribute("type", "file");
        resumeBtn.setAttribute("aria-describedby", "inputGroupFileAddon01");
        submitResume.setAttribute("class", "file-submit");
        submitResume.setAttribute("onclick", "uploadFile()");
        submitResume.setAttribute("id", "resumeFile")
        top_container.setAttribute("id", "jobDisplayDiv-post-header");

        //adding containers to main div
        main_container.appendChild(top_container);
        main_container.appendChild(left_container);
        main_container.appendChild(middle_container);
        main_container.appendChild(right_container);
        main_container.appendChild(resumeBtn);
        main_container.appendChild(submitResume);


        //fetching the main div on the doc and adding the maincontainer to it
        var mainJobDiv = document.getElementById("jobDisplayDiv");
        mainJobDiv.appendChild(main_container);

    }
}

//logging the data that's got from the firebase ref.on call if it's an error
function errData(err){
    console.log('Error!');
    console.log(err);
}
//</editor-fold>

//<editor-fold desc="FUNCTION: Making the navbar stick to top of page when scrolling">
//When the user scrolls the page, execute myFunction
window.onload = function() {

    //Checking to see if we are on the student dashboard (because the employee dash doesn't have this code yet)
    if(checkPage()){
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        //All of this code works towards making the navbar stick to the top of the page when the user scrolls.
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }
};
//</editor-fold>

//<editor-fold desc="FUNCTIONS: Swapping between pages">
function student_showProfile(){
    //this function hides the show profile section and brings in the job section
    changePageContent("jobPage");

}

function student_displayJobs(){
    //this function hides the jobs section and shows the profile
    changePageContent("profilePage");

}

function changePageContent(page){
    //get required document vars
    var profileButton = document.getElementById("student_showJobButton");
    var jobButton = document.getElementById("student_showProfileButton");

    var jobsContent = document.getElementById("student-jobsContent");
    var profileContent = document.getElementById("student-profileContent");

    if(page=="jobPage"){
        //Change color of profile button
        jobButton.style.backgroundColor = "#9ba1bf";
        profileButton.style.backgroundColor = "#d6d6d6";

        jQuery("#student-jobsContent").fadeOut(500);
        setTimeout(function () {
            jQuery("#student-profileContent").fadeIn(500);
            //this code will delete all of the job postings from the job display div when the profile section is loaded
            document.getElementById("jobDisplayDiv").innerHTML = "";
        }, 500);


    }
    else{
        //Change color of jobs button
        jobButton.style.backgroundColor = "#d6d6d6";
        profileButton.style.backgroundColor = "#9ba1bf";

        fetchJobs();

        //this code fades out/then in the required info
        jQuery("#student-profileContent").fadeOut(500);
        setTimeout(function () {
            jQuery("#student-jobsContent").fadeIn(500);
        }, 500);

    }
}

jQuery(document).ready(function(){
    //Check to see if we are on the student dashboard, if we hare then change the page content to the profile screen
    if(checkPage()){
        changePageContent("jobPage");
    }

});
//</editor-fold>

var selectedFile;

// $('#file').on('change', function(event){
//     selectedFile = event.target.files[0];
// }

function uploadFile() {
    var filename = document.getElementById('inputGroupFileAddon01').files.item(0).name;
    window.alert("file name: " + filename)
    var filename = selectedFile.name;
    var storageRef = firebase.storage().ref('/resumes/' + filename);
    var uploadTask = storageRef.put(selectedFile);
    uploadTask.on("state_changed", function (snapshot) {

    }, function (error) {

    }, function () {
        var downloadURL = uploadTask.snapshot.downloadURL;
    });
}




