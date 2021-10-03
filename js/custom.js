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



