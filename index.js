
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
gsap.timeline().from('.navigation',{xPercent:100,opacity:0,duration:3,ease:'back'})
.from('.header-content',{y:200,opacity:0, scale:0, duration:1.5, ease:"circ.out"})
.from('.list',{y:160,stagger:0.1,duration:0.8, ease:'back',opacity:0});



   
gsap.from('.pih-h2',
{
scrollTrigger:
{
    trigger:'.pih-h2',
    start:'top bottom',
    toggleActions:"restart none none none",
    scrub:true,

},
opacity:0,scale:0,duration:2,x:-400 });

 gsap.from('.crp-p-animation',{
    scrollTrigger:
        {trigger:'.crp-p-animation',
        start:'top bottom',
        pin:true,
        toggleActions:"restart none none none",
       
    
    },
    y:200,opacity:0,duration:3.5});

 gsap.from('.prodcuts-info-curtain-img',{
    scrollTrigger:
        {trigger:'.prodcuts-info-curtain-img',
        start:'top bottom',
        toggleActions:"restart none none none",
  
    
    },
    opacity:0,scale:0.01, duration:1.5,});


 gsap.from('.crp-header',{
    scrollTrigger:
        {trigger:'.crp-header',
        start:'top bottom',
        toggleActions:"restart none none none",
       
        
    
    },
    opacity:1,y:-250, duration:2,});


 gsap.from('.curtains',{
    scrollTrigger:
        {trigger:'.catalog-h3',
      
        toggleActions:"restart none none none"},
    opacity:0,x:350, duration:0.5,});

 gsap.from('.blinders',{
    scrollTrigger:
        {trigger:'.catalog-h3',
   
      
       
        toggleActions:"restart none none none"},
    opacity:1,x:-350,scale:0.1, duration:0.5, });



//scroll animation
const pdfButton = document.getElementById('#scroll-pdf')







