//JavaScript, jQuery, and Processing.js

//jQuery document ready
$(document).ready(function() {

  //var selection; //makes this variable global

  $('#arrowButton1').on('click', function(event) {
    event.preventDefault(); //prevents page refresh
    var selection = $('#dropDown').val();
    console.log(selection);

    //switch method for dropdown menu
    switch(selection) {

      case empty:
        //Don't do a dang thing
        break;

      case gifRandom:
        $('#gifGallery').empty(); //clear the way for what's to come!
        //append a random GIF
        break;

      case stickerRandom:
        $('#gifGallery').empty(); //clear the way for what's to come!
        //append a random sticker
        break;

      case gifTag:
        $('#gifGallery').empty(); //clear the way for what's to come!
        //append the #optionalBox
        //append arrowButton2
        //arrowButton2 click event
          //prevent page refresh
          //get the value of #optionalBox
          //append a random GIF but limit it by tag
        break;

      case stickerTag:
        $('#gifGallery').empty(); //clear the way for what's to come!
        //append the #optionalBox
        //append arrowButton2
        //arrowButton2 click event
          //prevent page refresh
          //get the value of #optionalBox
          //append a random sticker but limit it by tag
        break;

      case searchBoth:
        $('#gifGallery').empty(); //clear the way for what's to come!
        //append the #optionalBox
        //append arrowButton2
        //arrowButton2 click event
          //prevent page refresh
          //get the value of #optionalBox
          //append a "normal" search result of five items
          //append a moreButton
          //more button click event
            //prevent page refresh
            //empty #gifGallery
            //displa y the next five items in array(?)
            //do I need to exit this? repeat??
        break;

      case trendingGifs:
        $('#gifGallery').empty(); //clear the way for what's to come!
        //append ten trending GIFS and that's really it!
        break;

      default:
        console.log('HUH?');

    }
  })



})

//ajax

//animations
