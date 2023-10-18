const t1=gsap.timeline({default:{ease:`power2.out`}});
t1.to(`.slid`,{y:"-100%",duration:1.2})
t1.to(`.intro .hero`,{y:"0%",duration:1.2},"-=1")
t1.fromTo(`.nav`,{opacity:0},{opacity:1,duration:1})