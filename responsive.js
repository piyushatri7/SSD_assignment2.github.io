
//for accordians in page2 page3
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) 
{
	acc[i].addEventListener("click", function() {
		
    this.classList.toggle("active");
    var slider = this.nextElementSibling;
    if (slider.style.maxHeight) 
	{
      slider.style.maxHeight = null;
    } else 
	{
      slider.style.maxHeight = slider.scrollHeight + "px";
    }
  });
}

/*
$(document).ready(function(){
  $(".accordion").click(function(){
    $(".content").slideToggle("slow");
  });
});
*/

//for main page buttons
function showSection(tabName) {
  var i, x;
  x = document.getElementsByClassName("sectiondiv");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

