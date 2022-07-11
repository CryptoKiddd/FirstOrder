
const list = document.querySelectorAll('.list');

console.log(list)
function addClass(){
    list.forEach((item)=>{
        item.classList.remove('active');
        this.classList.add('active')
    })
}



list.forEach((item)=>item.addEventListener('mouseover',addClass));



// //////////////////animations/////////////

gsap.timeline().from('.navigation',{xPercent:100,opacity:0,duration:2})
.from('.header-content',{opacity:0, scale:0, duration:1, ease:"circ.out"})
.from('.list',{y:160,stagger:0.1,duration:0.8, ease:'back',opacity:0});
gsap.timeline.from('.pih-h2',{opacity:0,scale:0})