var btnmoins = document.getElementsByClassName('btn-moins');

console.log('btnmoins',btnmoins)


for (let i=0;i<btnmoins.length;i++){

btnmoins[i].addEventListener('click',function(){
if(btnmoins[i].nextElementSibling.innerText > 0)
{btnmoins[i].nextElementSibling.innerText --
}
//update apres click de moins et une verification si le span est a 0 ou nn 
totalPrice()
}
)
}

var btnplus = document.getElementsByClassName('btn-plus');
console.log('btnplus',btnplus)


for (let j=0;j<btnplus.length ; j++){
btnplus[j].addEventListener('click',function(){
    btnplus[j].previousElementSibling.innerText ++
    //update apres   click de plus 
    totalPrice()
})

}

//partie coeur 

var heartbtn = document.getElementsByClassName('fa-heart')

console.log('hearts',heartbtn)

for ( let btn of heartbtn){
    btn.addEventListener('click',function(){
        if(btn.style.color === "gray"){
            btn.style.color = "red"
        }else{
            btn.style.color = "gray"
        }
    })
}




//partie croix 

var deletbtn = document.querySelectorAll('.btn-delete')
console.log('delet',deletbtn)

for (let k=0;k<deletbtn.length;k++){

deletbtn[k].addEventListener('click',()=>{
deletbtn[k].parentElement.parentElement.remove()

//update de la totalite de mon pannier 

totalPrice()
})


}

//total price 

function totalPrice(){

//get element price 
var productPrice = document.getElementsByClassName('prx')

console.log('prx',productPrice)
var productQuatity = document.getElementsByClassName('quantity')
console.log('quantity',productQuatity)

let sum = 0

for (let i=0 ; i<productPrice.length ; i++){

sum += productPrice[i].innerText * productQuatity[i].innerText

}
document.getElementById('prix-total').innerText = sum

}