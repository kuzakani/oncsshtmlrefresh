window.onscroll = () => {
  if ( window.scrollY > 10 ) {
    $("nav").addClass("nav-active")
  } else {
    $("nav").removeClass("nav-active")
  }
}

/* $(".plus1").click( function () {
    $(".minus1").addClass("reappear");
    $(".plus1").html('<span class="minus"> - </span>');
    $(".written__answer1").addClass("reappear");

});

$(".minus1").click( function () {
    $(".written__answer").removeClass("reappear");
    if ($(".written__answer1").css("display") === "none") {
      $(".minus1").html('<span class="plus1"> + </span>');
    } else {
      alert("ayeeh a khay");
    }
});
*/


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  })
})


$(".open-menu-btn").click( () => {
  $(".open-menu-btn").toggle("disappear");
  $(".close-menu-btn").toggle("reappear");
  $(".nav__menu").toggle("reappear");

})

$(".close-menu-btn").click( () => {
  $(".nav__menu").toggle("disappear");
  $(".open-menu-btn").toggle("reappear");
  $(".close-menu-btn").toggle("disappear");
})
