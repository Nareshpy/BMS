function slider() {
    let slideIndex = 0;
    showSlides();
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 2000);
    }

  }
$(function () {
  slider();
  $(".poster-container").hide();
  $("#drishyam").on("click", function () {
    replace(arr[1]);
    $("#movies").hide();
    $(".poster-container").show();
  });
  $("#yashoda").on("click", function () {
   replace(arr[0]);
   $("#movies").hide();
   $(".poster-container").show();
  });
  $("#masoda").on("click", function () {
   replace(arr[2]);
   $("#movies").hide();
   $(".poster-container").show();
   $("#link").trigger("click");
  });
  $("#galodu").on("click", function () {
    replace(arr[3]);
    $("#movies").hide();
    $(".poster-container").show();
  });
  $("#lv2day").on("click", function () {
     replace(arr[4]);
     $("#movies").hide();
     $(".poster-container").show();
  });
  $("#close-btn").on("click",function(){
    $("#movies").show();
    $(".poster-container").hide();
  })
  $("#selector").on("change",function(){
    place();
  })
})
var arr = [
  { "name": "Yashoda", "rating": "8.5/10", "image": "assets/yashoda poster.jpg","vote":"24.7k votes", "bg": "assets/yashoda-bg.jpg" },
  { "name": "Drishyam", "rating": "9/10", "image": "assets/drishyam-poster.jpg", "vote":"47.5k votes","bg": "assets/drishyam-bg.jpg" },
  { "name": "Masooda", "rating": "9.2/10", "image": "assets/masoda-poster.jpg", "vote":"8.7k votes","bg": "assets/masoda-bg.jpg" },
  { "name": "Gaalodu", "rating": "8.7/10", "image": "assets/galodu poster.jpg", "vote":"20.7k votes","bg": "assets/galodu-bg.jpg" },
  { "name": "Love today", "rating": "9.6/10", "image": "assets/lv2day-poster.jpg", "vote":"59k votes","bg": "assets/lv2day-bg.jpg" }]
function replace(obj) {
  $(".movie-details h1").text(obj.name);
  $("#poster").attr("src", obj.image);
  $("#rated").text(obj.rating);
  $("#vote").text(obj.vote);
}
function place(){
  navigator.geolocation.getCurrentPosition((position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    $("#locator").text(`${latitude}`);
    },()=>
      alert("please allow")
    );
}
