const api = "http://message-list.appspot.com";
var page_token;
var first_load = "/messages";

//loading JSON object based on the url, it loads the first object and changes the URL moving forward to new tokens
function table(link){
    $.getJSON(api + link, function(message_object){
        console.log(message_object);
        create_new_messages(message_object)
    })
}

//creating individual messages based on JSON object 
function create_new_messages(message_object){
  page_token =  "/messages?pageToken=" + message_object.pageToken;
  var count = message_object.count;
  for(var i=0; i < count; i++) {
    //fetching all the important data required to create a message
    var profile_image_url = "http://message-list.appspot.com/" + message_object.messages[i].author.photoUrl;
    var author_name = message_object.messages[i].author.name;
    var author_content = message_object.messages[i].content;
    var date_time = message_object.messages[i].updated;
    var date = date_time.slice(0,10);
    var time = date_time.slice(11,19);
    var id = message_object.messages[i].id;
    var messages_section = document.getElementById('messages')

    $(`<div id = ${id} class = "notification_card">`+
      `<table>`+
        `<tr>`+
          `<td>`+
            `<div class = "image_border">`+
              `<img class = "profile_image" src= ${profile_image_url}>`+
            `</div>`+
          `</td>`+
          `<td>`+
            `<div class = "content_section">`+
              `<p class = "author_name">${author_name}</p>`+
              `<p class = "date">${date}</p>`+
            `</div>`+
          `</td>`+
        `</tr>`+
      `</table>`+
      `<p class = "author_content">${author_content}</p>`+
    `</div>`).appendTo($(messages_section));
  }
}

//Printing out the first load of messages 
table(first_load);

//On scroll we will change the token value and add new messages to the list
window.onscroll = function(ev) {
    // console.log("window.innerHeight "+window.innerHeight)
    // console.log("window.scrollY "+ window.scrollY)
    // console.log("document.body.offsetHeight "+ document.body.offsetHeight)
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    table(page_token);
    }
};



// is the date today?
//   yes 
//     check time 
//       minutes back or more than equal to 60 min 
//         hours back  
//   No 
//     check days difference 
//       equal to 1? 
//         yes : yesterday 
//       no : get which day 
//       more than equal to 






function checkDate(){
  var month = new Array();
  month = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var inputDate = "2015-02-01";
  var todaysDate = new Date();
  var current_day = todaysDate.getDay();
  var current_month = todaysDate.getMonth();
  var current_year = todaysDate.getFullYear();
  
  var milliseconds = date.getTime();
  var seconds = milliseconds / 1000;
  
  var input_day = parseInt(inputDate.slice(8,10));
  var input_month = parseInt(inputDate.slice(5,7));
  var input_year = parseInt(inputDate.slice(0,4));



  if (input_year == current_year) { // this year
    if(input_month == current_month){ // this month
      if (input_day == current_day){ // today







      } else {
        if ((todaysDate - input_day)=1){// not today but yesterday 
          return ("Yesterday")
        } else { // not yesterday 
          return (month[input_month-1]input_month + " " + input_day)
        } 
      }
    } else { // not this month
      return (month[input_month-1]input_month + " " + input_day)
    }
  } else { // nor this year
      return (input_month + "/" + input_day + "/" + input_year) 
  }

  console.log()

}


checkDate();










