var rawUserAccount = '{ "accountID":"1", "companyName":"World Wildlife Fund"}';

var rawJobPosts = '{ "jobPosts" : [' +
    '{ "jobId":"16102", "jobTitle":"Livestream Fundraising Project Assistant", "datePosted":"15/9/18"},' +
    '{ "jobId":"16206", "jobTitle":"Digital Design Intern", "datePosted":"12/9/18"},' +
    '{ "jobId":"16253", "jobTitle":"Head of Digital Marketing", "datePosted":"2/9/18"},' +
    '{ "jobId":"16683", "jobTitle":"Sustainable Business Intern", "datePosted":"28/8/18"},' +
    '{ "jobId":"17231", "jobTitle":"Human Resources Intern", "datePosted":"23/8/18" } ]}';


var userAccount = JSON.parse(rawUserAccount);
var jobPosts = JSON.parse(rawJobPosts);


window.onload = function start() {

    populateJobListings();
    
};



function populateJobListings() {

    for (i = 0; i < jobPosts.jobPosts.length; i++){
        var jobId = jobPosts.jobPosts[i].jobId;
        var jobTitle = jobPosts.jobPosts[i].jobTitle;
        var numApps = "3242";
        var daysLeft = jobPosts.jobPosts[i].datePosted;
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





