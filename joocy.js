function showEditor(boxNumber) {
  var title = document.getElementById("title" + boxNumber).textContent;
  var image = document.getElementById("image" + boxNumber).style.backgroundImage.slice(5, -2);
  var url = document.getElementById("url" + boxNumber).getAttribute("href");

  document.getElementById("title").value = title;
  document.getElementById("image").value = image;
  document.getElementById("url").value = url;

  document.getElementById("popupEditor").style.display = "block";
}

function saveChanges() {
  var title = document.getElementById("title").value;
  var image = document.getElementById("image").value;
  var url = document.getElementById("url").value;

  // Update the box with the new values
  document.getElementById("title" + boxNumber).textContent = title;
  document.getElementById("url" + boxNumber).textContent = url;

  // Check if the image URL is valid and refresh the box
  var imageExtension = image.split('.').pop().toLowerCase();
  var validExtensions = ['jpg', 'jpeg', 'png'];

  if (validExtensions.includes(imageExtension)) {
    var img = new Image();
    img.src = image;
    img.onload = function() {
      document.getElementById("image" + boxNumber).style.backgroundImage = "url('" + image + "')";
    };
  }

  // Save the values to local storage
  localStorage.setItem("title" + boxNumber, title);
  localStorage.setItem("image" + boxNumber, image);
  localStorage.setItem("url" + boxNumber, url);

  // Hide the editor popup
  document.getElementById("popupEditor").style.display = "none";
}

// Retrieve the saved values from local storage on page load
window.addEventListener("load", function() {
  for (var i = 1; i <= 6; i++) {
    var savedTitle = localStorage.getItem("title" + i);
    var savedImage = localStorage.getItem("image" + i);
    var savedUrl = localStorage.getItem("url" + i);

    if (savedTitle) {
      document.getElementById("title" + i).textContent = savedTitle;
    }

    if (savedImage) {
      document.getElementById("image" + i).style.backgroundImage = "url('" + savedImage + "')";
    }

    if (savedUrl) {
      document.getElementById("url" + i).textContent = savedUrl;
    }
  }
});