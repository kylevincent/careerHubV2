var rawUserAccount = '{ "accountID":"1", "companyName":"World Wildlife Fund"}';

var rawJobPosts = '{ "jobPosts" : [' +
    '{ "jobId":"16102", "jobTitle":"Livestream Fundraising Project Assistant", "dateExpires":"15/9/18"},' +
    '{ "jobId":"16206", "jobTitle":"Digital Design Intern", "dateExpires":"12/9/18"},' +
    '{ "jobId":"16253", "jobTitle":"Head of Digital Marketing", "dateExpires":"2/9/18"},' +
    '{ "jobId":"16683", "jobTitle":"Sustainable Business Intern", "dateExpires":"28/8/18"},' +
    '{ "jobId":"17231", "jobTitle":"Human Resources Intern", "dateExpires":"23/8/18" } ]}';


var userAccount = JSON.parse(rawUserAccount);
var jobPosts = JSON.parse(rawJobPosts);


window.onload = function start() {
    populateJobListings();
    populateInfoHeader();
};


function populateInfoHeader() {
    document.getElementById("account_title_header").innerHTML = userAccount.companyName;
    document.getElementById("currentJobPostsLabel").innerHTML = jobPosts.jobPosts.length;
    document.getElementById("totalJobPostslabel").innerHTML = jobPosts.jobPosts.length + 12;
    document.getElementById("totalJobAppsLabel").innerHTML = Math.floor(Math.random() * 4000)+2000;
    document.getElementById("totalJobsOfferedLabel").innerHTML = Math.floor(Math.random() * 50)+10;
}


function populateJobListings() {

    for (i = 0; i < jobPosts.jobPosts.length; i++){
        var jobId = jobPosts.jobPosts[i].jobId;
        var jobTitle = jobPosts.jobPosts[i].jobTitle;
        var numApps = Math.floor(Math.random() * 200)+50;
        var daysLeft = jobPosts.jobPosts[i].dateExpires;
        var editLink = "edit";

        var setString = "<tr><td>" +
            jobId +
            "</td><td>" +
            jobTitle +
            "</td><td>" +
            numApps +
            "</td><td>" +
            daysLeft +
            "</td><td>" +
            editLink +
            "</td></tr>";

        document.getElementById("jobListings").innerHTML += setString;
    }









    
}





