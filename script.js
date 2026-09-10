/* =========================================
   GIRLFRIEND SURPRISE WEBSITE
========================================= */


/* =========================================
   CUSTOM DETAILS
========================================= */

// Change this to her name
const girlfriendName = "My Love Tanveer";

// Change this date to the date your story started
const relationshipDate = new Date("2025-01-01");


/* =========================================
   ELEMENTS
========================================= */

const landing = document.getElementById("landing");
const mainWebsite = document.getElementById("mainWebsite");

const openButton = document.getElementById("openButton");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const playSongButton = document.getElementById("playSongButton");

const particles = document.getElementById("particles");

const finalButton = document.getElementById("finalButton");
const finalAnswer = document.getElementById("finalAnswer");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const navLinks =
    document.querySelector(".nav-links");


/* =========================================
   NAME
========================================= */

document.getElementById("girlfriendName").textContent =
    girlfriendName;


/* =========================================
   CREATE PARTICLES
========================================= */

function createParticle() {

    const particle = document.createElement("div");

    particle.className = "particle";

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨",
        "🌸"
    ];

    particle.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (12 + Math.random() * 20) + "px";

    const duration =
        6 + Math.random() * 8;

    particle.style.animationDuration =
        duration + "s";

    particles.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, duration * 1000);

}

setInterval(createParticle, 500);


/* =========================================
   OPEN WEBSITE
========================================= */

openButton.addEventListener(
    "click",
    async () => {

        landing.style.opacity = "0";

        landing.style.transition =
            "opacity 1s ease";


        setTimeout(() => {

            landing.classList.add("hidden");

            mainWebsite.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 1000);


        // Try to start music
        try {

            await music.play();

            updateMusicUI(true);

        } catch (error) {

            showToast(
                "Tap the 🎵 button to start the music ❤️"
            );

        }

    }
);


/* =========================================
   MUSIC
========================================= */

async function toggleMusic() {

    if (music.paused) {

        try {

            await music.play();

            updateMusicUI(true);

        } catch (error) {

            showToast(
                "nisha.mp3"
            );

        }

    } else {

        music.pause();

        updateMusicUI(false);

    }

}


musicButton.addEventListener(
    "click",
    toggleMusic
);


playSongButton.addEventListener(
    "click",
    toggleMusic
);


function updateMusicUI(isPlaying) {

    if (isPlaying) {

        musicButton.textContent = "⏸️";

        playSongButton.textContent =
            "⏸ Pause Our Song";

        document
            .querySelector(".vinyl")
            .classList.add("playing");

    } else {

        musicButton.textContent = "🎵";

        playSongButton.textContent =
            "▶ Play Our Song";

        document
            .querySelector(".vinyl")
            .classList.remove("playing");

    }

}


/* =========================================
   LOVE COUNTER
========================================= */

function updateCounter() {

    const now = new Date();

    const difference =
        now - relationshipDate;

    if (difference < 0) {

        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;

        return;
    }

    const seconds =
        Math.floor(difference / 1000);

    const days =
        Math.floor(
            seconds / 86400
        );

    const hours =
        Math.floor(
            (seconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (seconds % 3600) / 60
        );

    const remainingSeconds =
        seconds % 60;


    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;

    document.getElementById("seconds").textContent =
        remainingSeconds;

}

setInterval(
    updateCounter,
    1000
);

updateCounter();


/* =========================================
   SCROLL
========================================= */

function scrollToSection(id) {

    const element =
        document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   MOBILE MENU
========================================= */

mobileMenuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-open"
        );

    }
);


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "mobile-open"
                );

            }
        );

    });


/* =========================================
   MEMORY MODAL
========================================= */

function openMemory(title, description) {

    document.getElementById(
        "modalTitle"
    ).textContent = title;

    document.getElementById(
        "modalDescription"
    ).textContent = description;

    document
        .getElementById("memoryModal")
        .classList.remove("hidden");

}

function closeMemory() {

    document
        .getElementById("memoryModal")
        .classList.add("hidden");

}


document
    .getElementById("memoryModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeMemory();

            }

        }
    );


/* =========================================
   RANDOM LOVE MESSAGE
========================================= */

const loveMessages = [

    "You're my favorite notification. ❤️",

    "If happiness had a face, I'd probably see yours. 💕",

    "You make ordinary moments feel special. ✨",

    "My favorite place is wherever I am with you. 💗",

    "I could choose you a thousand times. ❤️",

    "You are one of the best things that ever happened to me. 🌸",

    "Your smile deserves its own universe. ✨",

    "Life feels a little more beautiful because you're in it. 💖",

    "I don't need a perfect day. I just need you. ❤️",

    "Somehow, you became my favorite person. 💕"

];


function randomLoveMessage() {

    const randomIndex =
        Math.floor(
            Math.random() *
            loveMessages.length
        );

    const message =
        loveMessages[randomIndex];

    const messageElement =
        document.getElementById(
            "randomMessage"
        );

    messageElement.style.opacity = "0";

    setTimeout(() => {

        messageElement.textContent =
            message;

        messageElement.style.opacity = "1";

    }, 200);

}


/* =========================================
   GIFT BOX
========================================= */

let giftOpened = false;


function openGift() {

    const gift =
        document.getElementById(
            "giftBox"
        );

    const message =
        document.getElementById(
            "giftMessage"
        );


    if (!giftOpened) {

        giftOpened = true;

        gift.classList.add(
            "opened"
        );


        message.textContent =
            "My gift isn't inside this box... it's the promise that I'll keep creating beautiful memories with you. ❤️";


        createConfetti();

        showToast(
            "Surprise! ❤️"
        );

    } else {

        gift.classList.remove(
            "opened"
        );

        message.textContent = "";

        giftOpened = false;

    }

}


/* =========================================
   FINAL SURPRISE
========================================= */

finalButton.addEventListener(
    "click",
    () => {

        finalAnswer.classList.remove(
            "hidden"
        );

        finalButton.style.display =
            "none";

        createConfetti();

        scrollToElement(
            finalAnswer
        );

    }
);


function scrollToElement(element) {

    setTimeout(() => {

        element.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "❤️",
        "💕",
        "✨",
        "💖",
        "🌸"
    ];


    for (
        let i = 0;
        i < 40;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );

        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex =
            "3000";

        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const duration =
            2000 +
            Math.random() * 2500;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh)
                         rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],

            {
                duration: duration,
                easing: "ease-out"
            }

        );


        setTimeout(
            () => confetti.remove(),
            duration
        );

    }

}


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 3000);

}


/* =========================================
   KEYBOARD ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeMemory();

        }

    }
);


/* =========================================
   PAGE LOAD
========================================= */

console.log(
    "❤️ Girlfriend Surprise Website Loaded"
);