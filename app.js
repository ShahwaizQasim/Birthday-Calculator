//console.log(user_dateOfBirth);

const formSubmit = document.querySelector("#form");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  let user_birthday = document.querySelector("#user_birthday").value;

  let user_dateOfBirth = new Date(user_birthday);
  let user_dateOFBirthTimes = user_dateOfBirth.getTime();
  // alert(user_dateOFBirthMinutes)
  let current_date = new Date();
  let current_Minutes = current_date.getTime();
  let difference = current_Minutes - user_dateOFBirthTimes;
  let user_age = difference / (1000 * 60 * 60 * 24 * 365);
  let final_age = Math.floor(user_age);
  document.getElementById("age_print").innerHTML = `Your Age is: ${final_age}`;

  let user_days = difference / (1000 * 60 * 60 * 24);
  let user_Finaldays = Math.floor(user_days);
  document.getElementById(
    "user_daysPrint"
  ).innerHTML = `So many days of your life have passed: ${user_Finaldays}`;
  

  let user_yearcalculate = current_date.getFullYear() - user_dateOfBirth.getFullYear();
   //let currentyear = current_date.getFullYear();
   //console.log(currentyear); // current year 24

   //let useryear = user_dateOfBirth.getFullYear();
   //console.log(useryear); // user birthday year 2003
  //console.log("year", user_yearcalculate);


  let user_monthcalculate = (current_date.getMonth() + 1) - (user_dateOfBirth.getMonth() + 1);

    // let currentmonth = current_date.getMonth() + 1;
    // console.log(currentmonth); // jo month chl raha hoga wo ayega yahan
    
    // let userbirthdaymonth = user_dateOfBirth.getMonth() + 1;
    // console.log(userbirthdaymonth); // yahan user ka birthday month ayega
  //console.log("months", user_monthcalculate);


  let user_dayscalculate = current_date.getDate() - user_dateOfBirth.getDate();
    //  let currentdate = current_date.getDate(); 
    //  //console.log(currentdate); // yahan se current date mil jaegi

    //  let userdate = user_dateOfBirth.getDate();
    //  //console.log(userdate); //yahan se user ki birthday date maloom ho jaegi
    
  //console.log("days", user_dayscalculate);
  
  
   if (user_monthcalculate < 0 || user_monthcalculate === 0 && current_date.getDate() < user_dateOfBirth.getDate()) {
     user_yearcalculate--;
     user_monthcalculate += 11;
     //console.log("If chal rha hai");
     if (current_date.getDate() > user_dateOfBirth.getDate()) {
        user_dayscalculate;
     } else{
        user_dayscalculate = current_date.getDate() + (user_dateOfBirth.getDate() - 31);
        user_monthcalculate--;
     }
    }
    document.getElementById("user_Ageprint").innerHTML = `You are ${user_yearcalculate} years, ${user_monthcalculate} months and ${user_dayscalculate} days old`

  
    let userDays = user

   
  });


//let multiply = 365 *365;
//console.log(multiply);




