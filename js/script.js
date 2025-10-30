//Play video on click of the album button

// Set a variable that will be changed to store the ID of the last video plays
let lastVideoID;

// Use query Selector All to return an array of all elements that match the css class .album
// Loop over each item in the array, to assign the click handler
document.querySelectorAll('.album').forEach(image => {
    image.addEventListener('click', function () {
        // For cleanliness, all the logic for the click handler was moved outside of this click function, however, "this" is needed as a paramater since that will contain the album element clicked and corresponding data to use for video play and song title update
        playVideo(this);
    });
});

function playVideo(album) {
    // Check to see if there was a last video played by seeing if the variable is "truthy" meaning it is not null or undefined or false
    if (lastVideoID) {
        // if a previous video was played, we get that element by the video ID
        const prevVideo = document.getElementById(lastVideoID);
        // now we set that video's visibility to hidden
        prevVideo.style.visibility = 'hidden';
    }
    // now we get the current video ID from the clicked album
    const videoID = album.dataset.videoid;
    // set that ID into the last Video ID variable so we can use it later
    lastVideoID = videoID;
    // now we find the corresponding video by ID
    const video = document.getElementById(videoID);
    // here we store the song element in a variable
    const songContainer = document.querySelector('.song');
    // here we update the song element with the content from the data attribute on the album image
    songContainer.innerHTML = album.dataset.songtitle;
    // now we set the visibility of the video to play to be visible
    video.style.visibility = 'visible';
    // play it baby!
    video.play();
};

// NIKKI NOTE: If you decide to use longer videos and videos with sound, you may need to pause the previous video since visibility hidden will just hide it from view and it will still play in the background. For longer videos this could put a drain on an application if this was a production level app and for videos with sound it will probably keep playing in the background. 




// Make song name load up when mp4 starts



// Possibly add a short audio clip to each album when mp4 start

