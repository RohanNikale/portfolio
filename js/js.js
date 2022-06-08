function nav(){
    let a =document.getElementById("nav");
    if (a.classList.contains('animated')){
        a.classList.remove('animated');
    }
    else{

        a.classList.add("animated");
        console.log(a.classList.contains('animated'));
    }
}



window.onscroll= function(){scrollp()}


function scrollp(){
    let page=document.getElementsByClassName('scrollr')[0]
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    page.style.width=scrolled+'%'
    if (document.documentElement.scrollTop > 700) {
        document.getElementById('navbar').classList.add('scroll')
    }
    else{
        document.getElementById('navbar').classList.remove('scroll')
    }

    if (document.documentElement.scrollTop > 0) {
        document.getElementById('title').innerHTML="Home"
    }
    
    if (document.documentElement.scrollTop > 700) {

        document.getElementById('title').innerHTML="About"
    }
    if (document.documentElement.scrollTop > 1093) {

        document.getElementById('title').innerHTML="Skills"
    }
    if (document.documentElement.scrollTop > 1600) {

        document.getElementById('title').innerHTML="Services"
    }
    if (document.documentElement.scrollTop > 2009) {

        document.getElementById('title').innerHTML="Contact us"
    }

}
