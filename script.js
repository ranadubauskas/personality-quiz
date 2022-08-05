console.log("script running");

// Access all the figures using the class
let pictures=document.querySelectorAll(".card-image");
//pictures.forEach((picture) => console.log(picture.id));
let questions=document.querySelectorAll(".sectionq");
let button=document.getElementById("button");
console.log(button);
let count=1;
questions.forEach((picture)=> {
  picture.addEventListener("click", (e)=> {
    let nextSection=questions[count];
    nextSection.classList.remove("hidden");
    count++;
  })
})

// Fill in the object
let quizValues = {
  color: ["logical", "creative", "logical", "creative"],
  vacation: ["extrovert", "introvert", "extrovert", "introvert"],
  pizza: ["creative", "logical", "creative", "logical"],
  house: ["introvert", "extrovert", "introvert", "extrovert"],
  fruit: ["logical", "creative", "logical", "creative"],
  activity: ["extrovert", "introvert", "extrovert", "introvert"],
};

// 'quizTaker' object here
let quizTaker={
  logical: 0, 
  creative: 0, 
  extrovert: 0, 
  introvert: 0,
  color: 0,
  vacation:0, 
  pizza: 0,
  house: 0,
  fruit: 0,
  activity: 0
};


// Make every image clickable!
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    // Save the user's choice in a variable.
    let choice = picture.id.split("-");
    
    // Change the background yellow
      picture.classList.add("has-background-light");
     picture.classList.add("has-background-warning");
    
    
    


    // Increment the right personality trait
    let answer=quizValues[choice[0]][choice[1]];
    quizTaker[answer]++;


    // If its the last question, unhide the result.
    if (choice[0]==="activity") {
      let resultID;

      if (quizTaker.logical > quizTaker.creative) {
        resultID = "#logical-";
      } else {
        resultID = "#creative-";
      }

      if (quizTaker.introvert > quizTaker.extrovert) {
        resultID += "introvert";
      } else {
        resultID += "extrovert";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");
      button.classList.remove("hidden");
    }
  });
});
button.addEventListener("click", (e)=> {
  location.reload();
})


