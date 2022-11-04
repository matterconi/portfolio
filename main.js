//navbar

const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');
const menuList = document.querySelector('.menu-list')

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
    navbar.classList.toggle('is-active')
});

//bio 

const shape = document.querySelector('.css-shape');

const shapes = ['border: none; width: 100px; height: 100px; border-radius: 50%; background-color: #8c38ff;',
'border: none; width: 75px; height: 75px; background-color: #8c38ff;']

shape.addEventListener('click', function() {
    this.style.cssText = shapes[Math.floor(Math.random() * 3)]
})

//skills

const elements = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot')
const numbers = document.querySelectorAll('.number')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('a', entry.isIntersecting);
    if(entry.isIntersecting) observer.unobserve(entry.target)
  })
},
{
    threshold: .2,
});

elements.forEach(card => {
    observer.observe(card)
})

dots.forEach(dot => {
    observer.observe(dot)
})

numbers.forEach(number => {
    observer.observe(number)
})

//form


const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1";
    }, 300);
  });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Let's Talk ;)";
      formHeading.style.opacity = "1";
    }, 300);
  });
});