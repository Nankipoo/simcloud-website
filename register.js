//NAVIGATION BAR

var defaultColour = $(".nav-link").css("color", "whitesmoke");

var hoverColour = $(".nav-link").hover(
  function () {
    $(this).css("color", "white");
  },
  function () {
    $(this).css("color", "whitesmoke");
  }
);

var clickedColour = $(".nav-link").click(function () {
  $(this).css("color", "gold");
});

//MAIN IMAGE

//SMALL IMAGES

var defaultColour2 = $(".click-here").css("color", "whitesmoke");

var hoverColour2 = $(".click-here").hover(
  function () {
    $(this).css("color", "white");
  },
  function () {
    $(this).css("color", "whitesmoke");
  }
);

var clickedColour2 = $(".click-here").click(function () {
  $(this).css("color", "gold");
});

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 4;

  boxes.forEach((box) => {
    console.log(box);
    const top = box.getBoundingClientRect().top;

    if (trigger > top) {
      box.classList.add("show-content");
    } else {
      box.classList.remove("show-content");
    }
  });
}


