window.onload = function(){ 

  document.getElementById("hamburger").onclick = function () {
    this.classList.toggle("is-active");
  };
  
  const button = document.querySelector("#hamburger");
  
  button.addEventListener("click", (e) => {
    document.querySelector(".show-nav").classList.toggle("header__nav");
  });
  
      
  }
  
  
  
  
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
  
  
  
  
  
  
  
  
  
  
  
  