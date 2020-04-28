//show cart
//jquery
(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

 cartInfo.addEventListener('click',function(){
   cart.classList.toggle('show-cart');   //toggle is to switch between class cart/show-cart
  
 });
 
})();
//add item to cart
(function(){
const cartBtn = document.querySelectorAll('.store-item-icon');

cartBtn.forEach(function(btn){
btn.addEventListener('click',function(event){
 //console.log(event.target);
 if(event.target.parentElement.classList.contains("store-item-icon"))
 {
   let fullPath = event.target.parentElement.previousElementSibling.src;
   let pos = fullPath.indexOf("img") + 3;
   let partPath = fullPath.slice(pos);
   //console.log(partPath);
   const item = {};
   item.img = `img-cart${partPath}`;

   let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
   //console.log(name);
   item.name = name;
   let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
   let finalPrice = price.slice(1).trim();
   item.Price =finalPrice;
   //console.log(item);

   //create cartItem
   const cartItem = document.createElement("div");
   cartItem.classList.add(
        "cart-item",
        "d-flex",
        "justify-content-between",
        "text-capitalize",
        "my-3"
   );

   cartItem.innerHTML = `
 
              <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
              <div class="item-text">
  
                <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.Price}</span>
              </div>
              <a href="#" id='cart-item-remove' class="cart-item-remove">
                <i class="fas fa-trash"></i>
              </a>
              </div>
            `;
  
            //select cart
            const cart = document.getElementById('cart');
            const total = document.querySelector(".cart-total-container");
            cart.insertBefore(cartItem,total);
            alert("item is added");
            showTotals();


 }
});
});

function showTotals(){
 const total = [];
 const items = document.querySelectorAll(".cart-item-price");
 items.forEach(function(item){
   total.push(parseFloat(item.textContent)); 
 });

 const totalMoney = total.reduce(function(total,item){
total+=item;
return total;
 },0);
 const finalTotal = totalMoney.toFixed(2);
 document.getElementById('cart-total').textContent = finalTotal;
 document.querySelector('.item-total').textContent = finalTotal;
 document.getElementById('item-count').textContent = total.length;
}
})();


function initMap() {
// The location of Uluru
var uluru = {
lat: 28.5355,
lng: 77.3910};
// The map, centered at Uluru
var map = new google.maps.Map(
document.getElementById('map'), {zoom: 13, center: uluru});
// The marker, positioned at Uluru
var marker = new google.maps.Marker({
  position: uluru, 
  map: map,
  icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
});

var infoWindow = new google.maps.InfoWindow({
  content:'<h1>Jaypee institute</h1>'
});

marker.addListener('click',function(){
  infoWindow.open(map,marker);
});

}
initMap();