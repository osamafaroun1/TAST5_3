/************************** NAVBAR******************************/
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

/************************* Fetch api for country & flags ****************************/
let dropdownMenuButton1 = document.getElementById("dropdownMenuButton1");
let osama = document.getElementById("osama");
let url = "https://restcountries.com/v3.1/all";

function getUsers(callback) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}
getUsers(drawiData);

function drawiData(d) {
  let output = "";
  d.forEach((element) => {
    output +=
      `
     <li>${element.cca2} <img id="fla"  src="${element.flags.png}"  alt=""></li> 
     `
  });
  osama.innerHTML = output;
  /**************button value just onclick li***************/
  let arr = Array.from(osama.children);
  arr.forEach(el => {
    el.addEventListener('click', () => {
      dropdownMenuButton1.innerHTML = el.innerHTML;
    });
  });
};
/****************************** fetch api for cards *********************************/
let splide__list = document.querySelector(".splide__list")
function cards(backCall) {
  fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => backCall(data.products))
    .catch((err) => console.log(err));
}
cards(Show);
function Show(el) {
   let result='';
    el.forEach(item => {
      if(item.id<6){
        result+=`  
        <div class="col-sm-4 splide__slide m-2">
        <div class="card-group">
          <div class="card">
            <img  src="${item.images[0]}" height="300px;" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <p class="card-text">${item.price}$</p>
            </div>
          </div>
        </div>
      </div>
           `
      }else{
        console.log('false');
      }
    });
    splide__list.innerHTML=result;
    console.log(splide__list);
   /**********************create splide cards********************** */
    var splide = new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      rewind: true,
      breakpoints: {
  /********** breakpoints for responsive cards in small screen*********************/
          640: {
              perPage: 2,
              gap: '.7rem',
          },
          480: {
              perPage: 1,
              gap: '.7rem',
          },
      },
  });
  splide.mount();
}
/*************************accordion************************** */
var acc = document.getElementsByClassName("accordion");
var i
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/********************* scroll to top************************* */
let scrolling=document.getElementById("scrolling");

scrolling.addEventListener('click',()=>{
  scroll({
    top:0,
    behavior:"smooth"
  })

});
