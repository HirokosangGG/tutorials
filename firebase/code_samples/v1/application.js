// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var config = {
  apiKey: "<AIzaSyBNL-UAZu0_6kclzSu34S8-BYiZeJ2qriw>",
  authDomain: "<lab1-86253.firebaseapp.com",
  databaseURL: "https://lab1-86253-default-rtdb.firebaseio.com",
  projectId: "lab1-86253",
  storageBucket: "<lab1-86253.appspot.com>",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var recommendations = myFirebase.child("recommendations");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
recommendations.push({
    "title": "The danger of a single story",
    "presenter": "Chimamanda Ngozi Adichie",
    "link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
});
var mydetail = myFirebase.child("Mydetail")

mydetail.push({
  "studentID": "6310210105",
  "Name"     : "sulfa chaisoongnern",
  "LineID"   : "0622132172"
});

var TA = myFirebase.child("TA");

TA.push({
  "TA1":
  {
    "StudentId": "6310210105",
    "Name" : "Sulfa chaisoongnern",
    "Mail"  : "sula.2002@gmail.com"
  },
    "TA2": 
    {
     "studentID" : "6210210100",
     "Name" : "Maya",
     "Mail" : "6210210100@psu.ac.th"
    }
});
