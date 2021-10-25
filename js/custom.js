// header & footer js

/*global $ */
$(document).ready(function () {

  "use strict";

  $('.menu > ul > li:has( > .mega-menu), .menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  //Checks if li has sub (ul) and adds class for toggle icon - just an UI


  $('.menu > ul > li > .mega-menu:not(:has(ul)), .menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

  $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

  //Adds menu-mobile class (for mobile toggle menu) before the normal menu
  //Mobile menu is hidden if width is more then 992px, but normal menu is displayed
  //Normal menu is hidden if width is below 992px, and jquery adds mobile menu
  //Done this way so it can be used with wordpress without any trouble

  $(".menu > ul > li").hover(
      function (e) {
          if ($(window).outerWidth() > 992) {
              $(this).children(".mega-menu").fadeIn(150);
              $(this).children("ul").fadeIn(150);
              e.preventDefault();
          }
      }, function (e) {
          if ($(window).outerWidth() > 992) {
              $(this).children(".mega-menu").fadeOut(150);
              $(this).children("ul").fadeOut(150);
              e.preventDefault();
          }
      }
  );
  //If width is more than 992px dropdowns are displayed on hover


  //the following hides the menu when a click is registered outside
  $(document).on('click', function(e){
      if($(e.target).parents('.menu').length === 0)
          $(".menu > ul").removeClass('show-on-mobile');
  });

  $(".menu > ul > li").click(function() {
      //no more overlapping menus
      //hides other children menus when a list item with children menus is clicked
      var thisMenu = $(this).children("ul");
      var thisMegaMenu = $(this).children(".mega-menu");
      
// Don't need this function right now
      
//         if(thisMenu) {
//             var prevState = thisMenu.css('display');
//             thisMenu.fadeOut();
//             $('.menu-dropdown-icon.clicked').removeClass('clicked');
//             if ($(window).outerWidth() < 992) {
//                 if(prevState !== 'block') { 
//                     thisMenu.fadeIn(150); 
//                     $('.mega-menu').not(thisMenu).hide();
//                     thisMenu.parent('.menu-dropdown-icon').addClass('clicked'); 
//                 } else {
//                     thisMenu.parent('.menu-dropdown-icon.clicked').removeClass('clicked');
//                 }
                 
//             }
//         }

      if (thisMegaMenu) {
          var prevState = thisMegaMenu.css('display');
          thisMegaMenu.fadeOut();
          $('.menu-dropdown-icon.clicked').removeClass('clicked');
          if ($(window).outerWidth() < 992) {
              if(prevState !== 'block') { 
                  thisMegaMenu.fadeIn(150); 
                  $('.mega-menu').not(thisMegaMenu).hide();
                  thisMegaMenu.parent('.menu-dropdown-icon').addClass('clicked'); 
              } else {
                  thisMegaMenu.parent('.menu-dropdown-icon.clicked').removeClass('clicked');
              }
          }
      }
      
      
  });
  //If width is less or equal to 992px dropdowns (BS4 Medium size)

  $(".menu-mobile").click(function (e) {
      $(".menu > ul").toggleClass('show-on-mobile');
      e.preventDefault();
  });
  //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
});














function my(){
var x=document.getElementsByClassName("toggel");
for(var i=0; i<=x.length; i++){

document.getElementsByClassName("toggel")[i].style.display="block";
document.getElementsByClassName("showa")[0].style.display="block";
  document.getElementsByClassName("logo-body")[0].style.height="2250px";
};


};
function mya(){
var x=document.getElementsByClassName("toggel");
for(var i=0; i<=x.length; i++){

document.getElementsByClassName("toggel")[i].style.display="none";
document.getElementsByClassName("showa")[0].style.display="block";
  document.getElementsByClassName("logo-body")[0].style.height="1620px";

};

};


var accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
accordionItemHeader.addEventListener("click", event => {

// Uncomment in case you only want to allow for the display of only one collapsed item at a time!

// const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
// if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//   currentlyActiveAccordionItemHeader.classList.toggle("active");
//   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
// }

accordionItemHeader.classList.toggle("active");
const accordionItemBody = accordionItemHeader.nextElementSibling;
if(accordionItemHeader.classList.contains("active")) {
  accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
}
else {
  accordionItemBody.style.maxHeight = 0;
}

});
});

function scrollup() {
  window.scrollTo(0, 0);

};

//document.getElementsByClassName("showa")[0].addEventListener("click",function(){
// document.getElementsByClassName("section-eight")[0].style.display="none";
// document.getElementsByClassName("section-nine")[0].style.display="none";
// document.getElementsByClassName("section-ten")[0].style.display="none";
// document.getElementsByClassName("section-eleven")[0].style.display="none";
// document.getElementsByClassName("showa")[0].style.display="none";


// for (var i=0;i<=65;i++){

//document.getElementsByClassName("hover")[i].style.height= "1.9%";
//  document.getElementsByClassName("hover")[i].style.marginTop= "145px";
//  document.getElementsByClassName("colb")[i].addEventListener("mouseover",function(){
//    document.getElementsByClassName("colb")[i].style.width="calc(13% + 2rem)";
//   document.getElementsByClassName("colb")[i].style.height="calc(9% + 2.5rem)";
//    });
//   };
//});


// first button min-width: 700px
//function myFunctionOpen(x){
//if(x.matches){

//document.getElementsByClassName("Logo")[0].style.height="2400px";
//document.getElementsByClassName("show")[0].style.marginRight = "52%";

  // for(var i=0;i<=65;i++){
 // document.getElementsByClassName("colb")[i].style.height= "7%";
//    }
//   }else  {
 // document.getElementsByClassName("Logo")[0].style.height="3350px";
 // for (var i=0;i<=65;i++){
 //     document.getElementsByClassName("colb")[i].style.height= "3.5%";
   //   document.getElementsByClassName("show")[0].style.marginRight = "52%";
     // document.getElementsByClassName("showa")[0].style.marginRight = "13%";
 // };
//}



//for (var i=0;i<=65;i++){

//document.getElementsByClassName("hover")[i].style.height= "1.3%";
//document.getElementsByClassName("hover")[i].style.marginTop= "155px";
//document.getElementsByClassName("colb")[i].addEventListener("mouseover",function(){
//  document.getElementsByClassName("colb")[i].style.width="calc(13% + 2rem)";
//    document.getElementsByClassName("colb")[i].style.height="calc(9% + 2.5rem)";
//  });
//    };



