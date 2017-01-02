// Get the modal
var modal = document.getElementById('myModal');

function imageClicked(index){

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');
var img = document.getElementsByClassName('thumbnailheight')[index];
var modalImg = document.getElementById("img01");

modal.style.display = "block";
modalImg.src = img.src;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

var leftButton = document.getElementsByClassName("button")[0];
var rightButton = document.getElementsByClassName("button")[1];

leftButton.onclick = function() { 
    imageClicked(parseInt(index) - 1);
}

rightButton.onclick = function() { 
    imageClicked(parseInt(index) + 1);
}

}