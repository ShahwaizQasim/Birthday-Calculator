//console.log(user_dateOfBirth);

const formSubmit = document.querySelector("#form");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  let user_birthday = document.querySelector("#user_birthday").value;

  let user_dateOfBirth = new Date(user_birthday);
  let user_dateOFBirthTimes = user_dateOfBirth.getTime();
  let current_date = new Date();
  
  if (user_dateOfBirth > current_date) {
    alert("Pehly pedha tow ho joa bad me apni birthday dekhna")
  }
  else{
  let current_Minutes = current_date.getTime();
  let difference = current_Minutes - user_dateOFBirthTimes; // difference user age & current date

  // user_age
  let user_age = difference / (1000 * 60 * 60 * 24 * 365);
  let final_age = Math.floor(user_age);
  
  /* user ki birthday ky kitna month guzar gaye */
  let userAge_remainder = difference % (1000 * 60 * 60 * 24 * 365);
  let ageInMonths = userAge_remainder / (1000 * 60 * 60 * 24 * 30.475);
  let finaluser_ageInMonths = Math.abs(Math.floor(ageInMonths));
  //console.log(finaluser_ageInMonths);

  document.getElementById("age_print").innerHTML = `You are ${final_age} years old`;
  document.getElementById("user_daysPrint").innerHTML = `It has been ${finaluser_ageInMonths} months past since your birthday.`;
  

  /* next birthday me kitny months reh gaye */
 if ( current_date.getMonth() > user_dateOfBirth.getMonth()) {
     user_dateOfBirth.setFullYear(current_date.getFullYear()+1);
  }else{
     user_dateOfBirth.setFullYear(current_date.getFullYear());
  }

  let timeleft_nextbirthday = user_dateOfBirth.getTime() - current_date.getTime();

  let nextbirthday_daysleft = timeleft_nextbirthday / (1000 * 60 * 60 * 24);
  console.log(nextbirthday_daysleft);

  let remainderofDays = timeleft_nextbirthday % (1000 * 60 * 60 * 24);

  let hoursleft = remainderofDays / (1000 * 60 * 60)
  
  console.log("daysleft: ", nextbirthday_daysleft, "hours ",hoursleft);
  //let daysleft = remainder / (1000 * 60 * 60 * 24)
  // console.log("DaysLeft" , daysleft , "MonthsLeft",nextbirthday_monthsleft);

  //console.log(nextbirthday_remainder);
}
})

  // let user_days = difference / (1000 * 60 * 60 * 24);
  // let user_Finaldays = Math.floor(user_days);
  // document.getElementById(
  //   "user_daysPrint"
  // ).innerHTML = `So many days of your life have passed: ${user_Finaldays}`;
  






  // let user_yearcalculate = current_date.getFullYear() - user_dateOfBirth.getFullYear();
  //  //let currentyear = current_date.getFullYear();
  //  //console.log(currentyear); // current year 24

  //  //let useryear = user_dateOfBirth.getFullYear();
  //  //console.log(useryear); // user birthday year 2003
  // //console.log("year", user_yearcalculate);


  // let user_monthcalculate = (current_date.getMonth() + 1) - (user_dateOfBirth.getMonth() + 1);

  //   // let currentmonth = current_date.getMonth() + 1;
  //   // console.log(currentmonth); // jo month chl raha hoga wo ayega yahan
    
  //   // let userbirthdaymonth = user_dateOfBirth.getMonth() + 1;
  //   // console.log(userbirthdaymonth); // yahan user ka birthday month ayega
  // //console.log("months", user_monthcalculate);


  // let user_dayscalculate = current_date.getDate() - user_dateOfBirth.getDate();
  //   //  let currentdate = current_date.getDate(); 
  //   //  //console.log(currentdate); // yahan se current date mil jaegi

  //   //  let userdate = user_dateOfBirth.getDate();
  //   //  //console.log(userdate); //yahan se user ki birthday date maloom ho jaegi
    
  // //console.log("days", user_dayscalculate);
  




