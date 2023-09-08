//const toggleButton = document.querySelector('.toggle-button');
const toggleButton1 = document.getElementById('toggle-icon1');
const toggleButton2 = document.getElementById('toggle-icon2');
const toggleButton3 = document.getElementById('toggle-icon3');
const toggleButton4 = document.getElementById('toggle-icon4');
const toggleButton5 = document.getElementById('toggle-icon5');
const toggleButton6 = document.getElementById('toggle-icon6');
const toggleButton7 = document.getElementById('toggle-icon7');
const infoContent = document.querySelector('.info-content');
const experienceContent = document.querySelector('.experienceClass');
const educationContent = document.querySelector('.educationClass');
const educationCCContent = document.querySelector('.educationCCClass');
const educationSCContent = document.querySelector('.educationSCClass');
const educationCerContent = document.querySelector('.educationCertificacionClass');
const projectsContent = document.querySelector('.projectsClass');

toggleButton1.addEventListener('click', function () {
    infoContent.classList.toggle('show');
    toggleButton1.innerHTML = '&#9660;';
    if (infoContent.classList.contains('show')) {
        toggleButton1.innerHTML = '&#9658;';
    }
});

toggleButton2.addEventListener('click', function () {
    experienceContent.classList.toggle('show');
    toggleButton2.innerHTML = '&#9660;';
    if (experienceContent.classList.contains('show')) {
        toggleButton2.innerHTML = '&#9658;';
    }
});

toggleButton3.addEventListener('click', function () {
    educationContent.classList.toggle('show');
    toggleButton3.innerHTML = '&#9660;';
    if (educationContent.classList.contains('show')) {
        toggleButton3.innerHTML = '&#9658;';
    }
});

toggleButton4.addEventListener('click', function () {
    educationCCContent.classList.toggle('show');
    toggleButton4.innerHTML = '&#9660;';
    if (educationCCContent.classList.contains('show')) {
        toggleButton4.innerHTML = '&#9658;';
    }
});

toggleButton5.addEventListener('click', function () {
    educationSCContent.classList.toggle('show');
    toggleButton5.innerHTML = '&#9660;';
    if (educationSCContent.classList.contains('show')) {
        toggleButton5.innerHTML = '&#9658;';
    }
});

toggleButton6.addEventListener('click', function () {
    projectsContent.classList.toggle('show');
    toggleButton6.innerHTML = '&#9660;';
    if (projectsContent.classList.contains('show')) {
        toggleButton6.innerHTML = '&#9658;';
    }
});

toggleButton7.addEventListener('click', function () {
    educationCerContent.classList.toggle('show');
    toggleButton7.innerHTML = '&#9660;';
    if (educationCerContent.classList.contains('show')) {
        toggleButton7.innerHTML = '&#9658;';
    }
});