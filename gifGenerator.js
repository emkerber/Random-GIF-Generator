//JavaScript, jQuery, and Processing.js

//jQuery document ready
$(document).ready(function() {


            $('#arrowButton1').on('click', function(event) {
                    event.preventDefault(); //prevents page refresh
                    var selection = $('#dropDown').val();
                    console.log(selection);

                    //switch method for dropdown menu
                    switch (selection) {

                        case 'emptySelection':
                            console.log('No initial selection made');
                            break;

                        case 'gifRandom':
                            $('#gifGallery').empty(); //clear the way for what's to come!
                            $('#optionalBox').empty(); //remove the optional box in case it's been appended
                            $('#moreButton').empty(); //remove more button in case it was appended
                            $.ajax({ //get the JSON for a random GIF
                                url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
                            }).then(function(data) { //append the random GIF
                                $('#gifGallery').append('<img id="imgGifRandom" src="' + data.data.image_url + '"/>');
                            }).catch(function() { //if failure to get GIF
                                console.log('Error getting a random GIF');
                            });
                            break;

                        case 'stickerRandom':
                            $('#gifGallery').empty(); //clear the way for what's to come!
                            $('#optionalBox').empty(); //remove the optional box in case it's been appended
                            $('#moreButton').empty(); //remove more button in case it was appended
                            //append a random sticker
                            $.ajax({ //get the JSON for a random sticker
                                url: 'http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC',
                            }).then(function(data) { //append the random sticker
                                $('#gifGallery').append('<img id="imgStickerRandom" src="' + data.data.image_url + '"/>');
                            }).catch(function() { //if failure to get sticker
                                console.log('Error getting a random sticker');
                            });
                            break;

                        case 'gifTag':
                            $('#gifGallery').empty(); //clear the way for what's to come!
                            $('#optionalBox').empty(); //remove the optional box in case it's been previously appended, to prevent multiple text inputs
                            $('#moreButton').empty(); //remove more button in case it was appended
                            //append text input and arrowButton2 to #optionalBox div
                            $('#optionalBox').append('<input type="text" id="optionalBoxInput"/><button class="arrowButton" id="arrowButton2">⤞</button>');
                            $('#arrowButton2').on('click', function(event) {
                                event.preventDefault(); //prevent page refresh
                                $('#gifGallery').empty(); //remove GIFs/stickers already on page
                                var boxValue = $('#optionalBoxInput').val(); //get the value of #optionalBox's text input
                                boxValue = boxValue.replace(' ', '+'); //to replace spaces with + to form the query's tag parameter
                                console.log(boxValue);
                                $.ajax({ //get the JSON for a random GIF limited by a tag
                                    url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + boxValue,
                                }).then(function(data) { //append a random GIF whose randomness is limited by tag
                                    $('#gifGallery').append('<img id="imgGifTag" src="' + data.data.image_url + '"/>');
                                }).catch(function() { //if failure to get GIF
                                    console.log('Error getting a random GIF (limited by tag)');
                                });
                            });
                            break;

                        case 'stickerTag':
                            $('#gifGallery').empty(); //clear the way for what's to come!
                            $('#optionalBox').empty(); //remove the optional box in case it's been previously appended, to prevent multiple text inputs
                            $('#moreButton').empty(); //remove more button in case it was appended
                            //append text input and arrowButton2 to #optionalBox div
                            $('#optionalBox').append('<input type="text" id="optionalBoxInput"/><button class="arrowButton" id="arrowButton2">⤞</button>');
                            $('#arrowButton2').on('click', function(event) {
                                event.preventDefault(); //prevent page refresh
                                $('#gifGallery').empty(); //remove GIFs/stickers already on page
                                var boxValue = $('#optionalBoxInput').val(); //get the value of #optionalBox's text input
                                boxValue = boxValue.replace(' ', '+'); //to replace spaces with + to form the query's tag parameter
                                console.log(boxValue);
                                $.ajax({ //get the JSON for a random sticker limited by tag
                                    url: 'http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=' + boxValue,
                                }).then(function(data) { //append the random sticker (whose randomness is limited by tag)
                                    $('#gifGallery').append('<img id="imgStickerTag" src="' + data.data.image_url + '"/>');
                                }).catch(function() { //if failure to get sticker
                                    console.log('Error getting a random sticker (limited by tag)');
                                });
                            });
                            break;

                        case 'search':

                            $('#gifGallery').empty(); //clear the way for what's to come!
                            $('#optionalBox').empty(); //remove the optional box in case it's been previously appended, to prevent multiple text inputs
                            $('#moreButton').empty(); //remove more button in case it was appended

                            //append text input and arrowButton2 to #optionalBox div
                            $('#optionalBox').append('<input type="text" id="optionalBoxInput"/><button class="arrowButton" id="arrowButton2">⤞</button>');
                            $('#arrowButton2').on('click', function(event) {
                                    event.preventDefault(); //prevent page refresh
                                    $('#gifGallery').empty(); //remove GIFs/stickers already on page
                                    $('#moreButton').empty(); //remove more button in case it was appended

                                    var boxValue = $('#optionalBoxInput').val(); //get the value of #optionalBox's text input
                                    boxValue = boxValue.replace(' ', '+'); //to replace spaces with + to form the query's search parameter
                                    console.log(boxValue);

                                    $.ajax({ //to get the JSON for search results
                                        url: 'http://api.giphy.com/v1/gifs/search?q=' + boxValue + '&api_key=dc6zaTOxFJmzC',
                                    }).then(function(data) { //append the first five search results
                                        for (var i = 0; i < 5; i++) {
                                            $('#gifGallery').append('<img class="imgSearch" src="' + data.data[i].images.fixed_height.url + '"/>');
                                        }
                                    }).catch(function() { //if search fails
                                        console.log('Error performing search');
                                    });

                                    $('#moreButton').append('<button id="more">MORE</button>'); //append button for viewing more search results

                                    var toIterate = 0; //this variable will help access to all search results

                                    $('#more').on('click', function(event) { //more button click event
                                            console.log('More clicked');
                                            event.preventDefault(); //prevent page refresh
                                            toIterate += 5; //access the next five results
                                            if (toIterate < 25) { //if there are still more search results to view
                                                $.ajax({ //get the JSON for search results
                                                    url: 'http://api.giphy.com/v1/gifs/search?q=' + boxValue + '&api_key=dc6zaTOxFJmzC',
                                                }).then(function(data) { //append the next five search results
                                                    for (var i = toIterate; i < toIterate + 5; i++) {
                                                        $('#gifGallery').append('<img class="imgSearch" src="' + data.data[i].images.fixed_height.url + '"/>');
                                                    }
                                                }).catch(function() { //if search fails
                                                    console.log('Error loading more search items');
                                                });
                                            } else { //if there are no more results to view
                                                $('#moreButton').empty(); //remove the more button
                                                $('#moreButton').append('<p>No more results to show</p>'); //display "No more results" message
                                            }
                                    });
                                });

                              break;

                          case 'trendingGifs':

                                    $('#gifGallery').empty(); //clear the way for what's to come!
                                    $('#optionalBox').empty(); //remove the optional box in case it's been previously appended
                                    $('#moreButton').empty(); //remove the more button in case it's been previously appended
                                    $.ajax({ //get the JSON for trending GIFs
                                        url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
                                    }).then(function(data) { //append the top 10 trending GIFs
                                        for (var i = 0; i < 10; i++) {
                                            $('#gifGallery').append('<img class="imgTrending" src="' + data.data[i].images.fixed_height.url + '"/>');
                                        }
                                    }).catch(function() { //if trending GIFs fail to load
                                        console.log('Error getting trending GIFs');
                                    });
                                    break;

                          default:
                              console.log('HUH?');
                              break;
                            }
                    



            })

});

        //animations
