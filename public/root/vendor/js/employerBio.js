var rawUserAccount = '{ "accountID":"1", "companyName":"World Wildlife Fund", "email":"enquiries@wwf.org.au", "phone":"1800 032 551", "website":"wwf.org.au", "bio":"WWF is one of Australia’s most trusted conservation organisations. At WWF, we work in Australia and in our Asia-Pacific backyard to protect endangered species and habitats, meet the challenge of climate change, and build a world where people live in harmony with nature."}';

var userAcount = JSON.parse(rawUserAccount);

window.onload = function () {
    populateUserInfomation()
};

function populateUserInfomation() {

    document.getElementById("profile_title").innerHTML = userAcount.companyName;
    document.getElementById("emailDisplay").innerHTML += userAcount.email;
    document.getElementById("phoneDisplay").innerHTML += userAcount.phone;
    document.getElementById("websiteDisplay").innerHTML += userAcount.website;
    document.getElementById("profile_decription").innerHTML = userAcount.bio;


}