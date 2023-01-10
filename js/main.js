
const Elitemss =document.querySelectorAll('.list-item')
const item =document.querySelectorAll('.work__photo-box')
const wrapperwork =document.querySelector('.work__photo-wrapper')
const icon = document.querySelector('.nav__toggle-icon')
const menum= document.querySelector('.navbar_list')
const line = document.querySelector('.nav__toggle-line')

icon.addEventListener('click' , navbaricon)


function navbaricon(){
icon.classList.toggle('open')
menum.classList.toggle('menu__open')

}


/////////////////


const navbarElem = document.querySelector('.navbar')
const navItem = document.querySelectorAll('.navbar_list-item')

    function scrollHandler (event) {

        if(document.documentElement.scrollTop >1){
            navbarElem.classList.add('second_navbar')
           
        }
        else{
            navbarElem.classList.remove('second_navbar')
        }
    }
    
    document.addEventListener('scroll', scrollHandler)


 ///////////////////////////////////////////////////////////// 

navItem.forEach(item =>{
    item.addEventListener('click' , function() {

        let sectionClass = item.getAttribute('data-section')
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo ({
            top: sectionOffsetTop - 60,
            behavior: "smooth"
        })
    })

})

const sections = document.querySelectorAll('section')
const observer = new IntersectionObserver(observerHandler,{
    threshold: 0.3
});

function observerHandler (allsections){
   allsections.map(section => {
  let sectionclassname= section.target.className
       if(section.isIntersecting){
         document.querySelector(`.navbar_list-item[data-section =${sectionclassname}]`).classList.add('list__item--active')

       }

       else{
        document.querySelector(`.navbar_list-item[data-section =${sectionclassname}]`).classList.remove('list__item--active')
       }

   })

}


sections.forEach(section => {
    observer.observe(section)
})
console.log(window.innerWidth)


if (window.innerWidth > 768) {
    let h1Elem = document.querySelector('.typewriter')

let h1ElemTypWriter = new Typewriter(h1Elem, {
    loop: true,
    cursor: '|'
})

h1ElemTypWriter.typeString('FRONT END DEVELOPER')
    .pauseFor(4500)
    .deleteAll()
    .typeString('BACK END DEVELOPER')
    .pauseFor(4500)
    // .deleteChars(7)
    .deleteAll()
    .typeString('SEO/ BOOTSTRAP/REACT')
    .pauseFor(4500)
    .start();
}
else{
    console.log('kkkk')
    photoBox.setAttribute('data-aos', 'zoom-out')

}







for(let i=0; i<Elitemss.length ; i++){
    Elitemss[i].addEventListener('click' , function(){
        for(let j=0; j<Elitemss.length; j++){
            Elitemss[j].classList.remove('active')
        }
        this.classList.add('active');
        const target= this.getAttribute('data-target')


        
        for(let k=0; k<item.length; k++){
            item[k].style.display='none';
            if(target == item[k].getAttribute('data-content')){
                item[k].style.display ='block'
            }
            if(target == "all"){
                item[k].style.display ='block'

            }
        }

    })
}



