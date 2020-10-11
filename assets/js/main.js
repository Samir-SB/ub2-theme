var mvRight = document.querySelector('.move-to-right');
var mvLeft = document.querySelector('.move-to-left');
var ce = document.querySelector('#current-event');

var listItem = document.querySelectorAll('.list-grid li');
var fac = document.querySelector('#faculties');

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
      mvRight.classList.remove('to-right');
      mvLeft.classList.remove('to-left');
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

observerFade.observe(fac);
observer.observe(ce);
