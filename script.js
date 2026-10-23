/* =========================================
   AGENT CASIO
   Website JavaScript
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   PROPERTY FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const landCards = document.querySelectorAll(".land-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active state */

        button.classList.add("active");

        const selectedRegion = button.dataset.filter;

        landCards.forEach(card => {

            const cardRegion = card.dataset.region;

            if (
                selectedRegion === "all" ||
                cardRegion === selectedRegion
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 10);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(10px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 250);

            }

        });

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ANIMATED STAT NUMBER
========================================= */

const statNumber = document.querySelector(".stat-number[data-target]");

let statsAnimated = false;

function animateStats() {

    if (statsAnimated || !statNumber) {
        return;
    }

    const rect = statNumber.getBoundingClientRect();

    if (rect.top < window.innerHeight) {

        statsAnimated = true;

        const target = Number(statNumber.dataset.target);

        let current = 0;

        const duration = 1000;

        const startTime = performance.now();

        function updateNumber(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            current = Math.floor(progress * target);

            statNumber.textContent = current;

            if (progress < 1) {

                requestAnimationFrame(updateNumber);

            } else {

                statNumber.textContent = target + "+";

            }

        }

        requestAnimationFrame(updateNumber);

    }

}


window.addEventListener("scroll", animateStats);

animateStats();


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   SMOOTH BUTTON FEEDBACK
========================================= */

const actionButtons = document.querySelectorAll(".btn");

actionButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = "0.3s ease";

    });

});


/* =========================================
   SAFETY CHECK FOR WHATSAPP
========================================= */

const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"]'
);

whatsappLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Opening Agent Casio WhatsApp contact..."
        );

    });

});


/* =========================================
   PAGE LOADED
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "Agent Casio website loaded successfully."
    );

});