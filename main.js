function age() {
    // let birthYear = document.querySelector(".Year").value;
    // let birthMonth = document.querySelector(".Month").value;
    // let birthDate = document.querySelector(".Date").value;
    // let inpTag = document.getElementsByTagName("input").value

    // let presentDate = new Date();
    // let presentYear = presentDate.getFullYear();
    // let presentMonth = presentDate.getMonth();
    // let presentDay = presentDate.getDate();


    // user input date
    var birthYear = document.querySelector(".Year").value;
    var birthMonth = document.querySelector(".Month").value;
    var birthDate = document.querySelector(".Date").value;
    var allInput = document.querySelector(".totalDate").value;
    // present date
    var presentDate = new Date();
    var presentYear = presentDate.getFullYear();
    var presentMonth = presentDate.getMonth();
    var presentDay = presentDate.getDate();

    if(allInput == null || allInput == ""){
        document.querySelector(".show_result").innerHTML = "Please type your Birth Date ";
        return false;
    } else{

            // year function
    var resultYear = presentYear - birthYear;

    // month function
    if (presentMonth >= birthMonth) {
        var resultMonth = (presentMonth - birthMonth+1);
    } else {
        resultYear--;
        var resultMonth = 12 + presentMonth - birthMonth +1;
    }

    //get days  
    if (presentDay >= birthDate)
        var resultDay = presentDay - birthDate;
    else {
        resultMonth--;
        var resultDay = 31 + presentDay - birthDate;

        if (resultMonth < 0) {
            resultMonth = 11;
            resultYear--;
        }
    }

    document.querySelector(".show_result").innerHTML = "Your current age is " + resultYear + " Year, " + resultMonth + " Month, " + resultDay + " Day";
    }





}


















// function ageCalculator() {  
//     //collect input from HTML form and convert into date format  
//     var userinput = document.getElementById("DOB").value;  
//     var dob = new Date(userinput);  

//     //check user provide input or not  
//     if(userinput==null || userinput==''){  
//       document.getElementById("message").innerHTML = "**Choose a date please!";    
//       return false;   
//     }   

//     //execute if the user entered a date   
//     else {  
//     //extract the year, month, and date from user date input  
//     var dobdobYear = dob.getYear();  
//     var dobdobMonth = dob.getMonth();  
//     var dobdobDate = dob.getDate();  

//     //get the current date from the system  
//     var now = new Date();  
//     //extract the year, month, and date from current date  
//     var currentYear = now.getYear();  
//     var currentMonth = now.getMonth();  
//     var currentDate = now.getDate();  

//     //declare a variable to collect the age in year, month, and days  
//     var age = {};  
//     var ageString = "";  

//     //get years  
//     yearAge = currentYear - dobYear;  

//     //get months  
//     if (currentMonth >= dobMonth)  
//       //get months when current month is greater  
//       var monthAge = currentMonth - dobMonth;  
//     else {  
//       yearAge--;  
//       var monthAge = 12 + currentMonth - dobMonth;  
//     }  

//     //get days  
//     if (currentDate >= dobDate)  
//       //get days when the current date is greater  
//       var dateAge = currentDate - dobDate;  
//     else {  
//       monthAge--;  
//       var dateAge = 31 + currentDate - dobDate;  

//       if (monthAge < 0) {  
//         monthAge = 11;  
//         yearAge--;  
//       }  
//     }  
//     //group the age in a single variable  
//     age = {  
//     years: yearAge,  
//     months: monthAge,  
//     days: dateAge  
//     };  


//     if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )  
//        ageageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";  
//     else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )  
//        ageString = "Only " + age.days + " days old!";  
//     //when current month and date is same as birth date and month  
//     else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )  
//        ageageString = age.years +  " years old. Happy Birthday!!";  
//     else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )  
//        ageageString = age.years + " years and " + age.months + " months old.";  
//     else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )  
//        ageageString = age.months + " months and " + age.days + " days old.";  
//     else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )  
//        ageageString = age.years + " years, and" + age.days + " days old.";  
//     else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )  
//        ageageString = age.months + " months old.";  
//     //when current date is same as dob(date of birth)  
//     else ageString = "Welcome to Earth! <br> It's first day on Earth!";   

//     //display the calculated age  
//     return document.getElementById("result").innerHTML = ageString;   

//   }  
// }  