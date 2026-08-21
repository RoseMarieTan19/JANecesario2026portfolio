/* =====================================
   Judy Ann Necesario Portfolio
   Premium JavaScript
===================================== */

// ---------- LOADER ----------

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 900);
});

// ---------- MOBILE MENU ----------

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");

    });

});

// ---------- SMOOTH SCROLL ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});

// ---------- ACTIVE NAVIGATION ----------

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

function activateNav(){

    let current = "";

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 140;
        const height = section.offsetHeight;

        if(top >= offset && top < offset + height){
            current = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activateNav);

// ---------- HEADER EFFECT ----------

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.background = "rgba(8,8,8,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.background = "rgba(0,0,0,.93)";
        header.style.boxShadow = "none";

    }

});

// ---------- SCROLL REVEAL ----------

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.15
});

revealElements.forEach(el=>revealObserver.observe(el));

// ---------- BACK TO TOP ----------

const backTop = document.getElementById("backTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backTop.style.opacity="1";
        backTop.style.pointerEvents="auto";

    }else{

        backTop.style.opacity=".6";

    }

});

// ---------- PARALLAX HERO ----------

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    heroImage.style.transform = `translateY(${y*0.08}px)`;

});

// ---------- BUTTON RIPPLE EFFECT ----------

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

// ---------- PORTFOLIO HOVER ----------

document.querySelectorAll(".portfolio-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
        perspective(800px)
        rotateX(${-(y-rect.height/2)/18}deg)
        rotateY(${(x-rect.width/2)/18}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(800px) rotateX(0) rotateY(0)";

    });

});

// ---------- SOCIAL ICON GLOW ----------

document.querySelectorAll(".socials a").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.boxShadow="0 0 22px rgba(192,138,42,.5)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.boxShadow="none";

    });

});

// ---------- HERO TYPING EFFECT ----------

const subtitle = document.querySelector(".hero-text h3");

const originalText = subtitle.textContent;

subtitle.textContent="";

let i=0;

function type(){

    if(i < originalText.length){

        subtitle.textContent += originalText.charAt(i);

        i++;

        setTimeout(type,45);

    }

}

setTimeout(type,1200);

// ---------- EXPERIENCE CARD STAGGER ----------

document.querySelectorAll(".timeline-item").forEach((item,index)=>{

    item.style.transitionDelay=`${index*120}ms`;

});

// ---------- GOLD CURSOR GLOW ----------

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.background="rgba(192,138,42,.25)";
glow.style.pointerEvents="none";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="9999";
glow.style.transition="transform .08s linear";

document.body.appendChild(glow);

window.addEventListener("mousemove",e=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});