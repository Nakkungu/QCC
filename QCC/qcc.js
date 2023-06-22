// This code will display the current date and time in the footer of the website.

function showDate() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
    var footer = document.getElementById("footer");
    footer.innerHTML = "Copyright &copy; 2023 Post-Construction Cleaning<br>" + date + "/" + month + "/" + year + " " + time;
  }
  
  // This code will run the showDate() function when the page loads.
  
  window.onload = showDate;
  