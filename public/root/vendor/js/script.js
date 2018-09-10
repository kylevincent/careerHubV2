jQuery(document).ready(function(){
    changePageContent("jobPage");
})

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
    $("#pageLoadingContainer").fadeOut("slow");;
});
//</editor-fold>

//<editor-fold desc="FUNCTIONS: main login page functions, for going to and from the employer/student dashboard">
function goToStudentLogin(){
    //This function is attatched to buttons in the login, it flips the div (for fancy purposes)
    var container = document.getElementById('login-flipper');
    var backButton = document.getElementById('backToLoginButton');
    var loginButton = document.getElementById('login-submit-button')
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

//<editor-fold desc="FUNCTION: Test button for posting jobs to the DB">
function testButton(){

    if (jQuery("#testingDIV span").text() === ('1')){
        jQuery('#testingDIV span').text("0");

    }
    else{
        jQuery('#testingDIV span').text("1");
    }


    //Creating data
    var data= {
        title: "beer bois",
        description: "We find the beer, we look at it for 3 seconds, then we drink"
    }

    //Pushes data to the DB
    ref.push(data);
}
//</editor-fold>

//<editor-fold desc="FUNCTION: Check to see which page we're currently on">
//This if statement will check to see if the page is the student dashboard; If we are on the student dashboard
// then run the job fetching code.
if (document.title == "Student Dashboard"){
    console.log("We Are On The Student Dashboard");
}
else{
    console.log("We Are Not On The Student Dashboard");
}
//</editor-fold>

//<editor-fold desc="FUNCTIONS: Loading job postings dynamically">
function fetchJobs(){
    //This is getting the data based on weather or not it's a value
    ref.on('value', gotData, errData);
}

//logging the data that's got from the firebase ref.on call into the console
function gotData(data){
    var jobs = data.val();
    var keys = Object.keys(jobs);
    console.log(keys);

    //running through a for loop based on the ammount of items in the db
    for (var i = 0; i < keys.length; i++){
        var k = keys[i];
        var titl = jobs[k].title;
        var desc = jobs[k].description;
        console.log(titl, desc);

        //create an element on the page for each job in the db
        var main_container = document.createElement("div");
        var left_container = document.createElement("div");
        var right_container = document.createElement("div");
        var leftText = document.createTextNode(titl);
        var rightText = document.createTextNode(desc);

        //adding ID's to each element
        left_container.setAttribute("id", "jobDisplayDiv-post-title");
        right_container.setAttribute("id", "jobDisplayDiv-post-desc");
        main_container.setAttribute("id", "jobDisplayDiv-post-container");

        //adding text to left/right divs
        left_container.appendChild(leftText);
        right_container.appendChild(rightText);

        //adding containers to main div
        main_container.appendChild(left_container);
        main_container.appendChild(right_container);

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
};
//</editor-fold>


function student_showJobs(){
    //this function hides the show profile section and brings in the job section
    changePageContent("jobPage");

}

function student_showProfile(){
    //this function hides the jobs section and shows the profile
    changePageContent("profilePage");

}

function changePageContent(page){
    //get required document vars
    var profileButton = document.getElementById("student_showProfileButton");
    var jobButton = document.getElementById("student_showJobsButton");

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





