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

    // $(`<div id = ${id} class = "per_message_div">`+
    //   `<table>`+
    //     `<tr>`+
    //       `<td>`+
    //         `<div class = "image_border">`+
    //           `<img class = "profile_image" src= ${profile_image_url}>`+
    //         `</div>`+
    //       `</td>`+
    //       `<td>`+
    //         `<div class = "content_section">`+
    //           `<p class = "author_name"> ${author_name}</p>`+
    //           `<div class = "date_section">`+
    //             `<p class = "date">${time}</p>`+
    //           `</div>`+
    //         `</div>`+
    //       `</td>`+
    //     `</tr>`+
    //     `<p class = "author_content">${author_content}</p>`+
    //   `</table>`+
    // `</div>`).appendTo($(messages_section));
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
