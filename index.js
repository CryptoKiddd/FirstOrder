
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
// gsap.registerPlugin(ScrollTrigger)



//navigation and header animation
gsap.timeline().from('.navigation',{xPercent:100,opacity:0,duration:3,ease:'bounce'})
.from('.header-content',{opacity:0, scale:0, duration:1, ease:"circ.out"})
.from('.list',{y:160,stagger:0.1,duration:0.8, ease:'back',opacity:0});



gsap.from('.pih-h2',
{
scrollTrigger:
{
    trigger:'.pih-h2',
    toggleActions:"restart none none none"

},
opacity:0,scale:0,duration:2,x:-400});

 gsap.from('.crp-p-animation',{
    scrollTrigger:
        {trigger:'.products-info-header',
        toggleActions:"restart none none none"
    
    },
    y:400,opacity:0,duration:3});

 gsap.from('.prodcuts-info-curtain-img',{
    scrollTrigger:
        {trigger:'.products-info-header',
        toggleActions:"restart none none none"
    
    },
    opacity:0,x:200, duration:2,ease:'none',});
 gsap.from('.crp-header',{
    scrollTrigger:
        {trigger:'.products-info-header',
        toggleActions:"restart none none none"
    
    },
    opacity:0,y:-250, duration:3,});



//scroll animation
const pdfButton = document.getElementById('#scroll-pdf')







