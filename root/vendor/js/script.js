
jQuery(window).on('load',function() {
    // Animate loader off screen
    $("#pageLoadingContainer").fadeOut("slow");;
});

//<editor-fold desc="FUNCTIONS: main login page functions, for going to and from the employer/student dashboard">
function goToStudentLogin(){
    //This function is attatched to buttons in the login, it flips the div (for fancy purposes)
    var container = document.getElementById('login-flipper');
    var backButton = document.getElementById('backToLoginButton');
    var loginButton = document.getElementById('login-submit-button')
    backButton.innerHTML = "I'm Not a Student!";
    container.style.webkitTransform = "rotateY(180deg)";
    loginButton.setAttribute("onClick", "goToStudentDash()");

}

function goToEmployeeLogin(){
    //This function is attatched to buttons in the login, it flips the div (for fancy purposes)
    var container = document.getElementById('login-flipper');
    var backButton = document.getElementById('backToLoginButton');
    var loginButton = document.getElementById('login-submit-button');
    backButton.innerHTML = "I'm Not an Employer!";
    container.style.webkitTransform = "rotateY(180deg)";
    loginButton.setAttribute("onClick", "goToEmployeeDash()");
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
