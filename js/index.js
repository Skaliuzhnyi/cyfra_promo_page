// google analitics

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

//фиксація header

$(document).on('scroll', function () {
  if ($(document).scrollTop() > 0) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});

// chat btn

window.addEventListener('DOMContentLoaded', (_) => {
  const text = document.querySelector('.js-text');
  const fab = document.querySelector('.js-fab');
  const button = document.querySelector('.js-toggle');

  button.addEventListener('click', (_) => {
    fab.classList.toggle('is-expanded');
    button.classList.toggle('is-expanded');
  });
});

// анімація заголовків

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('showAnim');
    }
  });
}
let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);

let sectionTitle = Array.from(
  document.querySelectorAll('.repair-about__title')
);

for (let item of sectionTitle) {
  item.classList.add('animation-prepare');
}

let elements = document.querySelectorAll('.animation-prepare');

for (let elm of elements) {
  observer.observe(elm);
}

$(document).ready(function () {
  //E-mail Ajax Send
  $('.request__form').submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize(),
    }).done(function () {
      alert('Thank you!');
      setTimeout(function () {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});