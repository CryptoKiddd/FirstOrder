const menuBtn = document.getElementById('menu')
const menuContent = document.getElementById('menu-content')

menuBtn.addEventListener('click',()=>{
   menuContent.classList.toggle('activelinks')
        

})



// //////////////////animations/////////////
// gsap.registerPlugin(ScrollTrigger)



//navigation and header animation

 let tl = gsap.timeline()
tl.from('.navigation',{xPercent:100, delay:0.5,opacity:0,duration:2,ease:'back'})
.from('.header-content',{y:200,opacity:0, scale:0, duration:1, ease:"circ.out"})
.from('.list',{y:160,stagger:0.1,duration:0.8, ease:'back',opacity:0});


//////product-info//////
   
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
        {trigger:'.crp-header',
        start:'top bottom',
    
        toggleActions:"restart none none none",
 
    },
    y:200,opacity:0,duration:2.5});
 gsap.from('.crp-right-blinds',{
    scrollTrigger:
        {trigger:'.crp-right-blinds',
        start:'top bottom',
        scrub:true,  
        toggleActions:"restart none none none",   
    },
    y:10,opacity:0,duration:0.5});

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
    opacity:0, scale:0.2,y:-250, duration:2,});

tl.from('.blind-types',{  opacity:0,scale:0.1, duration:2, toggleActions:"restart none none none"})
.from('.blind-types-list',{toggleActions:"restart none none none",  x:60,stagger:0.2,duration:0.8, ease:'back',opacity:.2});

   



    //pppppppppppdddddddddddffffffffffffff/////


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



    //////////services
    gsap.from('.card',{x:0,y:0, duration:2,stagger:0.1})

   



//scroll animation
const pdfButton = document.getElementById('#scroll-pdf')







