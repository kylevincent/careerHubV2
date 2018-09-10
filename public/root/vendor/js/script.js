
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

// function CreateTableFromJSON() {
//
//
//     var myBooks = $.getJSON('../vendor/res/db/db.json');
//
//     // EXTRACT VALUE FOR HTML HEADER.
//     // ('Book ID', 'Book Name', 'Category' and 'Price')
//     var col = [];
//     for (var i = 0; i < myBooks.length; i++) {
//         for (var key in myBooks[i]) {
//             if (col.indexOf(key) === -1) {
//                 col.push(key);
//             }
//         }
//     }
//
//     // CREATE DYNAMIC TABLE.
//     var table = document.createElement("table");
//
//     // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
//
//     var tr = table.insertRow(-1);                   // TABLE ROW.
//
//     for (var i = 0; i < col.length; i++) {
//         var th = document.createElement("th");      // TABLE HEADER.
//         th.innerHTML = col[i];
//         tr.appendChild(th);
//     }
//
//     // ADD JSON DATA TO THE TABLE AS ROWS.
//     for (var i = 0; i < myBooks.length; i++) {
//
//         tr = table.insertRow(-1);
//
//         for (var j = 0; j < col.length; j++) {
//             var tabCell = tr.insertCell(-1);
//             tabCell.innerHTML = myBooks[i][col[j]];
//         }
//     }
//
//     // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
//     var divContainer = document.getElementById("showData");
//     divContainer.innerHTML = "";
//     divContainer.appendChild(table);
// }

//<editor-fold desc="MATTS CODE FOR DB">
// // Add data from Firebase to table
// firebase.database().ref('quotes').on('child_added', function (quoteSnapshot) {
//     retrieveQuotes(quoteSnapshot)
// });
//
// // Handles quotes that have been removed
// firebase.database().ref('quotes').on('child_removed', function (quoteSnapshot) {
//     removeQuote(quoteSnapshot)
// });
//
//
// function retrieveQuotes(quoteSnapshot) {
//     var table = document.getElementById("quote-table-body");
//
//     var tr = document.createElement("tr");
//
//     var th = document.createElement("th");
//     var scopeAtt = document.createAttribute("scope");
//     scopeAtt.value = "row";
//
//     var idAtt = document.createAttribute("id");
//     idAtt.value = quoteSnapshot.key;
//
//     var txt = document.createTextNode(quoteNum.toString());
//     th.setAttributeNode(scopeAtt);
//     tr.setAttributeNode(idAtt);
//     th.appendChild(txt);
//     tr.appendChild(th);
//
//     var td = document.createElement("td");
//     txt = document.createTextNode(quoteSnapshot.val().author);
//     td.appendChild(txt);
//     tr.appendChild(td);
//
//     td = document.createElement("td");
//     txt = document.createTextNode(quoteSnapshot.val().date);
//     td.appendChild(txt);
//     tr.appendChild(td);
//
//     td = document.createElement("td");
//     txt = document.createTextNode(quoteSnapshot.val().quote);
//     var em = document.createElement("em");
//     em.appendChild(txt);
//     td.appendChild(em);
//     tr.appendChild(td);
//
//     table.appendChild(tr);
//
//     quoteNum += 1;
// }
//
// function removeQuote(quoteSnapshot) {
//     var parent = document.getElementById("quote-table-body");
//     var child = document.getElementById(quoteSnapshot.key);
//     parent.removeChild(child);
// }
//
// function modifyQuote(quoteSnapshot) {
//
//     var tr = document.getElementById(quoteSnapshot.key);
//
//     var td = document.createElement("td");
//     txt = document.createTextNode(quoteSnapshot.val().author);
//     td.appendChild(txt);
//     tr.appendChild(td);
//
//     td = document.createElement("td");
//     txt = document.createTextNode(quoteSnapshot.val().date);
//     td.appendChild(txt);
//     tr.appendChild(td);
//
//     td = document.createElement("td");
//     txt = document.createTextNode(quoteSnapshot.val().quote);
//     var em = document.createElement("em");
//     em.appendChild(txt);
//     td.appendChild(em);
//     tr.appendChild(td);
//
//     table.appendChild(tr);
// }
//
//</editor-fold>

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



function testButton(){

    if (jQuery("#testingDIV span").text() === ('1')){
        jQuery('#testingDIV span').text("0");

    }
    else{
        jQuery('#testingDIV span').text("1");
    }


    //Creating data
    var data= {
        name: "goodname",
        score: 43
    }

    //Pushes data to the DB
    ref.push(data);

    //This is getting the data based on weather or not it's a value
    ref.on('value', gotData, errData);
}

//logging the data that's got from the firebase ref.on call into the console
function gotData(data){

    //console.log(data.val());
    var jobs = data.val();
    var keys = Object.keys(jobs);
    console.log(keys);
    for (var i = 0; i < keys.length; i++){
        var k = keys[i];
        var initials = jobs[k].name;
        var score = jobs[k].score;
        console.log(initials, score);
    }
}

//logging the data that's got from the firebase ref.on call if it's an error
function errData(err){
    console.log('Error!');
    console.log(err);
}


