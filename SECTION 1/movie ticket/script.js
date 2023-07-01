function toggleMovieDropdown() {
    var movietype = document.getElementById("movietype").value;
    var bollywoodMovies = document.getElementById("bollywoodMovies");
    var hollywoodMovies = document.getElementById("hollywoodMovies");
  
    if (movietype === "bollywood") {
      bollywoodMovies.style.display = "block";
      hollywoodMovies.style.display = "none";
    } else if (movietype === "hollywood") {
      bollywoodMovies.style.display = "none";
      hollywoodMovies.style.display = "block";
    } else {
      bollywoodMovies.style.display = "none";
      hollywoodMovies.style.display = "none";
    }
  }
  