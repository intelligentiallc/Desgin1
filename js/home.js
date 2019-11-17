// A $( document ).ready() block.
$(document).ready(function() {
  $(".nav-container-item").hover(function(event) {
    $(".nav-container-item").removeClass("active-nav-container-item")
    $(this).addClass("active-nav-container-item")

    switch ($(this).data("banner-id")) {
      case "tab1":
        $("#panner-50").css("background-image", "url(./img/1.jpg)");
        break;
      case "tab2":
        $("#panner-50").css("background-image", "url(./img/2.jpg)");
        break;
      case "tab3":
        $("#panner-50").css("background-image", "url(./img/3.jpg)");
        break;
      case "tab4":
        $("#panner-50").css("background-image", "url(./img/4.jpg)");
        break;
      default:
        $("#panner-50").css("background-image", "url(./img/1.jpg)");
    }
  });
});
