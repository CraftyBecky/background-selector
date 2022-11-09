//Play video on click of the album button


// var hideVid = document.getElementsByClassName('hideVideo')[0];
//     hideVid.style.display = 'none';



//reply_click not defined in code ** Need to fix! ** - Use a for...of 
function reply_click(clicked_id) {
    var hideVid = document.getElementsByClassName('hideVideo');
    var vidNohighlight = document.getElementById('vidNohighlight');
    
    for ( var i = 0; i < hideVid.length - 1; i++ ) {
        if (hideVid[i].id == 'video' + clicked_id) {
            var isVisible = hideVid[i].style.display;
            hideVid[i].style.display = isVisible === 'none' ? 'block' : 'none';
            vidNohighlight.style.display = isVisible === 'none' ? 'visible' : 'none';
        } else {
            hideVid[i].style.display = 'none'; 
        }
    }
}

var vid = document.querySelector('video');
var btn = document.querySelector('.button');


    btn.addEventListener('click', function() {
        vid.play();
    });




    


//Hide all other videos until play on click



// Make song name load up when mp4 starts



// Possibly add a short audio clip to each album when mp4 start

