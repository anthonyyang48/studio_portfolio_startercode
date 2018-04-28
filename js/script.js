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

var projects = firebase.database().ref('Projects ');
    
    projects.on('value', function(snapshot) {
          
         var projectsArray = snapshot.val();
         
          for  (var key in projectsArray){
              console.log(key)
                var project = projectsArray[key];

                $(".projects").append('<img id="image" src="' + project.project_image_url + '"/>');
                $(".projects").append('<h1 id="title">' + project.title + '</h1>');
                $(".projects").append('<a class="btn btn-primary link" id="site-link" href="' + project.live_site_url  + '">' + "Preview" + '</a>');
                $(".projects").append('<a class="btn btn-primary link" id="github-link" href="' + project.source_url + '">' + "Code" + '</a>');
         
          }
    
    
    
 });

