var mvRight = document.querySelector('.move-to-right');
var mvLeft = document.querySelector('.move-to-left');
var ce = document.querySelector('#current-event');

var listItem = document.querySelectorAll('.list-grid li');
var fac = document.querySelector('#faculties');

const counterSection = document.querySelector('#counter');
const numbers = document.querySelectorAll('.number');
const speed = 2500;
const counterOptions = {};

var options = {
  threshold: 0.5,
};

observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      mvRight.classList.add('to-right');
      mvLeft.classList.add('to-left');
    } else {
      // mvRight.classList.remove('to-right');
      // mvLeft.classList.remove('to-left');
    }
  });
}, options);

observerFade = new IntersectionObserver(function (entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    listItem.forEach((li) => {
      if (entry.isIntersecting) {
        li.classList.add('fade');
      } else {
        //li.classList.remove('fade');
      }
    });
  });
}, options);

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      numbers.forEach((number) => {
        const updateCount = () => {
          const target = +number.getAttribute('data-number');
          const count = +number.innerText;

          var inc = (target / speed) * 41.2321;
          if (count < target) {
            number.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 50);
          } else {
            number.innerText = target;
          }
        };

        updateCount();
      });
    } else {
      // Comment on the following lines if you only want to
      // animate numbers the first time they appear on the screen.
      numbers.forEach((number) => {
        number.innerText = 0;
      });
    }
  });
}, counterOptions);

observerFade.observe(fac);
observer.observe(ce);
counterObserver.observe(counterSection);
