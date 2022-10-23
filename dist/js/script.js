const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close"),
  hamburgerStick = document.querySelector(".hamburger__hover"),
  btnPortfolio = document.querySelector(".promo__buttons__portfolio"),
  btnAbout = document.querySelector(".promo__buttons__aboutMe"),
  menuButton = document.querySelectorAll(".menu__link"),
  overlay = document.querySelector(".menu__overlay"),
  lvls = document.querySelectorAll(".level__item__line span"),
  precents = document.querySelectorAll(".level__item__precent"),
  sended = document.querySelector('.sended'),
  form = document.querySelector('form')


hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

precents.forEach((item, i) => {
  lvls[i].style.width = item.innerHTML;
});

// function addAnimate(animatedelement, hoverElement, animation, timeout) {
//   hoverElement.addEventListener("mouseover", () => {
//     animatedelement.classList.remove(animation);
//     animatedelement.classList.add(animation);
//   });
//   hoverElement.addEventListener("mouseout", () => {
//     setTimeout(() => {
//       animatedelement.classList.remove(animation);
//     }, timeout);
//   });
// }

// addAnimate(hamburgerStick, hamburger, "animate__hinge", 1500);
// addAnimate(btnPortfolio, btnPortfolio, "animate__swing", 2500);
// addAnimate(btnAbout, btnAbout, "animate__swing", 2500);

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

// form.addEventListener('submit', () => { 
//   setTimeout(() => {
//     sended.innerHTML = "Thank you " 
//   }, 2000);
// })

//JQUERY
$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $(this).find("textarea").val("");
      $("form").trigger("reset");
    });
    
    return false;
  });

  // Smooth scroll and pageup

  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  
  //appearance up btn
  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});


const menuTitles = document.querySelectorAll('.kitchen__menu__item')
const menuBlocks = document.querySelectorAll('.kitchen__menu__block')
const first = document.getElementById('first')
first.style.display= 'block';

menuTitles.forEach(item=>{
  
  item.addEventListener('click',()=>{
    menuTitles.forEach(res=>{
      res.classList.remove('active')
    })
    const id = item.getAttribute('data-atr')
    item.classList.add('active')

    menuBlocks.forEach(o=>o.style.display='none')
    document.getElementById(id).style.display = 'block';
  })
})



