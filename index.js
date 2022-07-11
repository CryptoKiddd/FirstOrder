const list = document.querySelectorAll('.list');
console.log(list)
function addClass(){
    list.forEach((item)=>{
        item.classList.remove('active');
        this.classList.add('active')
    })
}



list.forEach((item)=>item.addEventListener('mouseover',addClass));

const config ={
  type:'carousel',
  perView:5,
 
}
new Glide('.glide',config).mount();
gsap.to()