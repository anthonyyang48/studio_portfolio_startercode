//Unit 1 Portfolio with Firebase
// Use Firebase to store the images links and info for your projects. 
// Use Jquery to dynamically display the information from firebse. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************


// Initialize Firebase
var config = {
    apiKey: "AIzaSyA8hz0Iq-rloAdG6oMYTGZGY_ldzPz5oXs",
    authDomain: "my-portfolio-89eda.firebaseapp.com",
    databaseURL: "https://my-portfolio-89eda.firebaseio.com",
    projectId: "my-portfolio-89eda",
    storageBucket: "",
    messagingSenderId: "684916841306"
};

firebase.initializeApp(config);

var projects = firebase.database().ref('projects');
    
projects.on('value', function(snapshot) {
     $(".projects").empty();
    var projects = snapshot.val();
    
     for (var key in projects){
        var div = $('<div class = "col-sm-4 portfolio-item">');
        var title = $("");
        var preview = $();
        var image = $();
        var paragraph = $();
        var source = $();
    }

title.append(title);
preview.append(preview);
img.append(image);
paragraph.append(paragraph);
source.append(source);


      
    
    
});

