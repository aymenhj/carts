var favs=Array.from(document.querySelectorAll(".fa-heart"));
var deletebtns=Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards=Array.from(document.querySelectorAll(".card"));
var Btnplus=Array.from(document.querySelectorAll(".fa-plus-circle"));
var Btnminus=Array.from(document.querySelectorAll(".fa-minus-circle"));

/*like*/
for (let fav of favs)
(
    fav.addEventListener("click",
function()  {
    if (fav.style.color=="black"){
     fav.style.color="Red"
} else {
     fav.style.color="black"
       } 
    
}    
    )
)
/*delete*/
for (let i in deleteBtns) {
deleteBtns[i].addEventlistener("click",
function (){
cards[i].remove(), 
total()
})
}

/* plus*/
for (let plusBtn of plusBtns) {
plusBtn.addEventlistener("click",
    function(){
    plusBtn.nextElementsibling.innerHTML++
    total()
  })
}

/*minus*/
for (let minusBtn of minusBtns) {
minusBtn.addEventListener("click", 
function (){
minusBtn.previousElementsibling.innerHTML > 0 ?
minusBtn.previousElementsibling.innerHTML-- :
  null,
total()
  })
}

function total(){
    let qte=Array.from(document.querySelectorAll(".qute"));
    let price=Array.from(document. querySelectorAll(".unitt-price"));
    let s=0
for (let i=0 ; i<price.length ; i++)
{ s=s+price[i].innerHTML*qte[i].innerHTML ;
}
document.getelementyId("total-price").innerHTML= s
}