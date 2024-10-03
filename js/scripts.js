;(function ($) {
  $(document).ready(function () {
    'use strict'

    // //NOTIFICATION POP UP
    let popupShown = false

    function showPopup () {
      if (!popupShown) {
        iziToast.show({
          title: 'Dates Announced!!',
          message: 'Summit set to happen on October 19th, 2024',
          position: 'bottomRight',
          timeout: 5000, // Duration in milliseconds (3 seconds)
          progressBar: true, // Enable progress bar
          progressBarColor: '#0a7ed8', // Progress bar color
          backgroundColor: '#ffffff', // Background color of the popup
          transitionIn: 'bounceInUp', // Slide in from the right
          transitionOut: 'fadeOutDown', // Slide out to the right
          closeOnClick: true,
          onClosed: function () {
            popupShown = false // Allow the popup to show again if needed
          },
          onOpening: function (instance, toast) {
            // Adding the click event listener directly to the toast element
            toast.addEventListener('click', function () {
              const a = document.createElement('a')
              a.href = '/events'
              a.click()
            })
          }
        })

        popupShown = true
      }
    }

    // let scrollCount = 0;
    // window.addEventListener("scroll", function () {
    //   if (!popupShown && scrollCount === 0) {
    //     showPopup();
    //     scrollCount++;
    //   }
    // });

    // // MASONRY
    // $('.events-grid').isotope({
    //   itemSelector: '.events-grid .grid-item',
    //   percentPosition: true,
    //   masonry: {
    //     columnWidth: '.grid-item'
    //   }
    // });

    // PRELOADER
    var counting = setInterval(function () {
      var loader = document.getElementById('percentage')
      var currval = parseInt(loader.innerHTML)
      var Width = 99 - currval
      var loadscreen = document.getElementById('loader-progress')
      loader.innerHTML = ++currval
      if (currval === 100) {
        clearInterval(counting)
        $('body').toggleClass('page-loaded')
      }
      loadscreen.style.transition = '0.1s'
      loadscreen.style.width = Width + '%'
    },50)

    // SEARCH BOX
    $('.search-button, .search-box .close-btn').on('click', function (e) {
      if ($('.search-box').hasClass('active')) {
        $('.search-box').css('transition', '')
        $('.search-box').css('transition-delay', '0.4s')
        $('.search-box .form').css('transition-delay', '0s')

        window.setTimeout(function () {
          $('.search-box').css('left', '-100%')
          $('.search-box').css('transition', 'none')
        }, 1400)

        $('.search-box.active').css('left', '100%')
      } else {
        $('.search-box').css('transition', '')
        $('.search-box').css('transition-delay', '0s')
        $('.search-box .form').css('transition-delay', '0.8s')
        $('.search-box').css('left', '0')
      }
      $('.search-box').toggleClass('active')
    })

    /* HAMBURGER MENU */
    $('.hamburger-menu').on('click', function () {
      $('.menu .line').toggleClass('opened')
      $('.mobile-menu').toggleClass('active')
    })

    $('.mobile-menu .site-menu ul li a').on('click', function () {
      $('.menu .line').toggleClass('opened')
      $('.mobile-menu').toggleClass('active')
    })

    /* SIDE WIDGET */
    $('.more-button').on('click', function () {
      $('.side-widget').toggleClass('active')
    })

    // PAGE TRANSITION
    $('body a').on('click', function (e) {
      var target = $(this).attr('target')
      var fancybox = $(this).data('fancybox')
      var url = this.getAttribute('href')
      if (
        target != '_blank' &&
        typeof fancybox == 'undefined' &&
        url.indexOf('#') < 0
      ) {
        e.preventDefault()
        var url = this.getAttribute('href')
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'))

          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass('active')
          }
        } else {
          $('.page-transition').toggleClass('active')
          setTimeout(function () {
            window.location = url
          }, 1100)
        }
      }
    })
  })
  // END JQUERY

  // TESTIMONIALS SLIDER
  var swiper = new Swiper('.testimonials-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1020: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      764: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  })

  // CAROUSEL SLIDER
  var swiper = new Swiper('.carousel-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
      1020: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      764: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  })

  // SLIDER
  var events_slider_images = new Swiper('.events-slider-images', {
    spaceBetween: 0,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false
    },
    loop: true,
    effect: 'fade',
    loopedSlides: 3,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    thumbs: {
      swiper: event_slider_content
    }
  })

  // SLIDER CONTENT
  var event_slider_content = new Swiper('.events-slider-content', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    }
  })

  if ($('.events-slider-images')[0]) {
    events_slider_images.controller.control = event_slider_content
    event_slider_content.controller.control = events_slider_images
  } else {
  }

  // DATA BACKGROUND IMAGE
  var pageSection = $('*')
  pageSection.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css('background', 'url(' + $(this).data('background') + ')')
    }
  })

  // DATA BACKGROUND COLOR
  var pageSection = $('*')
  pageSection.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css('background', $(this).data('background'))
    }
  })

  // LOCOMOTIVE
  let options = {
    el: document.querySelector('.smooth-scroll'),
    smooth: false,
    class: 'is-inview',
    getSpeed: true,
    getDirection: true,
    reloadOnContextChange: true
  }

  const header = document.getElementById('navbar')
  let hidden = false,
    static = true

  const scroll = new LocomotiveScroll(options)

  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.addEventListener('refresh', () => scroll.update())
  ScrollTrigger.refresh()

  scroll.on('scroll', instance => {
    // let headerHeight = header.getBoundingClientRect().height;
    // if (instance.direction === 'down' && static) {
    if (instance.scroll.y > 200) {
      header.classList.add('pinned')
      if (header.classList.contains('navbar')) {
        header.classList.remove('light')
        header.classList.add('dark')
      }
    } else {
      header.classList.remove('pinned')
      if (header.classList.contains('navbar')) {
        header.classList.remove('dark')
        header.classList.add('light')
      }
    }
  })

  // COUNTDOWN
  if ($('#js-countdown').hasClass('countdown')) {
    const countdown = new Date('September 7, 2024')

    function getRemainingTime (endtime) {
      const milliseconds = Date.parse(endtime) - Date.parse(new Date())
      const seconds = Math.floor((milliseconds / 1000) % 60)
      const minutes = Math.floor((milliseconds / 1000 / 60) % 60)
      const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)
      const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24))

      return {
        total: milliseconds,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
      }
    }

    function initClock (id, endtime) {
      const counter = document.getElementById(id)
      const daysItem = counter.querySelector('.js-countdown-days')
      const hoursItem = counter.querySelector('.js-countdown-hours')
      const minutesItem = counter.querySelector('.js-countdown-minutes')
      const secondsItem = counter.querySelector('.js-countdown-seconds')

      function updateClock () {
        const time = getRemainingTime(endtime)

        daysItem.innerHTML = time.days
        hoursItem.innerHTML = ('0' + time.hours).slice(-2)
        minutesItem.innerHTML = ('0' + time.minutes).slice(-2)
        secondsItem.innerHTML = ('0' + time.seconds).slice(-2)

        if (time.total <= 0) {
          clearInterval(timeinterval)
        }
      }

      updateClock()
      const timeinterval = setInterval(updateClock, 1000)
    }

    initClock('js-countdown', countdown)
  }
})(jQuery)

document.addEventListener('DOMContentLoaded', () => {
  const eventCardsContainer = document.querySelector(
    '#card-container .event-cards'
  )
  const speakerCardsContainer = document.querySelector('#speaker-card-grid')

  fetch('https://iedc.agonline.in/api/get-data')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // Combine events, lectures, and workshops into a single list with an added 'type' field
      const allData = [
        ...data.events.map(item => ({ ...item, type: 'event' })),
        ...data.lectures.map(item => ({ ...item, type: 'lecture' })),
        ...data.workshops.map(item => ({ ...item, type: 'workshop' }))
      ]
      
      allData.sort((a,b)=> a.priority - b.priority)

      const speakerData = data['speakers']      
      const sponsorsData = data['partners']
      const FAQ = data['faqs']
      const news = data['news']
      speakerData.sort((a,b)=> b.priority - a.priority)
      sponsorsData.sort((a,b)=> a.priority - b.priority)
      FAQ.sort((a,b)=> a.priority - b.priority)
      news.sort((a,b)=> a.priority - b.priority)


      // Append combined data to the eventCardsContainer
      // appendData(eventCardsContainer, allData)

      displayFilteredData(eventCardsContainer ,data['events'])

      // Setup event listeners for the buttons
      document.getElementById('show-events').addEventListener('click', () => {
        displayFilteredData(eventCardsContainer ,data['events'])
        setActiveButton('show-events')
      })

      document.getElementById('show-lectures').addEventListener('click', () => {
        displayFilteredData(eventCardsContainer ,data['lectures'])
        setActiveButton('show-lectures')
      })

      document.getElementById('show-workshops').addEventListener('click', () => {
        displayFilteredData(eventCardsContainer ,data['workshops'])
        setActiveButton('show-workshops')
      })

      displaySpeakers(speakerData)
      displaySponsors(sponsorsData)
      displayFAQS(FAQ)
      displayNews(news)
    })
    .catch(error => console.error('Error fetching data:', error))
})

function displayFilteredData(eventCardsContainer, data ) {
  appendData(eventCardsContainer, data)
}

// Function to mark the active button
function setActiveButton(activeButtonId) {
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.classList.remove('active')
  })
  document.getElementById(activeButtonId).classList.add('active')
}

// Update the appendData function to handle the new structure
const appendData = (container, data) => {
  // if (!data.length) return // Exit if no data

  if (window.innerWidth<468){
     cardWidth = 360// Define the card width 
  }else{
   cardWidth = 370// Define the card width 
    }

  const gap = 20
  // Clear the container before appending new data
  container.innerHTML = ''

  data.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-aos', 'fade-up');
    // card.onclick = () => window.location.href = "/events/";

    // Dynamically create the card HTML based on the 'type'
    card.innerHTML = `
      <div class="poster">
        <img src="${item.imgUrl}" alt="">
      </div>
      <div class="details">
        <h1>${item.eventName}</h1>
        ${item.type === 'lecture' ? `<p>Speaker: ${item.speakerName}</p>` : ''}
        ${
          item.type === 'workshop'
            ? `<p>Conducted By: ${item.speakerName}</p>`
            : ''
        }
        <div class="time">
          <span>Price: ${item.price}&nbsp;</span>
          <span>Venue: ${item.venue}</span>
        </div>
        <div class="buttons">
          <button 
    onclick="${
      item.completed ? 'void(0)' : `window.open('${item.linkToReg}', '_blank')`
    } " 
    ${item.completed ? 'disabled' : ''} 
    style="cursor: ${item.completed ? 'not-allowed' : 'pointer'};">
    ${item.completed ? 'Completed' : 'Register'}
</button>
          ${
            item.linkToGuidelines
              ? `
            <button>
              <a target="_blank" href="${item.linkToGuidelines}">View Guidelines</a>
            </button>`
              : ''
          }
        </div>
      </div>
    `

    container.appendChild(card)
    const totalWidth = (cardWidth + gap) * data.length - gap // (card width + gap) * number of items - last gap
    console.log(cardWidth)
    container.style.width = totalWidth + 'px'
  })
}

function displaySpeakers (data) {
  const dataDisplay = document.getElementById('dataDisplay')
  dataDisplay.innerHTML = '' // Clear "Loading" message

  data.forEach(item => {
    // Limiting to 10 items for display
    const card = document.createElement('div')
    card.className = 'speakers-card'
    card.setAttribute('data-aos', 'fade-up'); 

    card.innerHTML = `
        <img src="${item.imgUrl}" alt="${item.Name}">
        <h3>${item.Name}</h3>
        <div class="speakers-overlay">
            <div class="company">${item.Company}</div>
            <div class="designation">${item.Designation}</div>
                        <a href="${item.LinkedIn}" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" class="linkedin-logo">
            </a>
        </div>
    `

    dataDisplay.appendChild(card)
  })
}

function displayNews(data){
  const dataDisplay = document.getElementById('breaker')
  dataDisplay.innerHTML = '' // Clear "Loading" message
  let title = ""

  data.forEach(item => {
    // Limiting to 10 items for display
    title+=" " + item.Title + " "
  })

  const card = document.createElement('div')
    card.className = "breaker"
    card.innerHTML = `
              <marquee scrollamount="12"> <strong>${title}</strong>
          </marquee>
    `

    dataDisplay.appendChild(card)
}

function displayFAQS (data) {
  const dataDisplay = document.getElementById('faqsdataDisplay')
  dataDisplay.innerHTML = '' // Clear "Loading" message

  data.forEach(item => {
    // Limiting to 10 items for display
    const card = document.createElement('div')
    card.className = 'faq-item'

    card.innerHTML = `
              <button class="faq-question">
                ${item.Title}
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>${item.Description}</p>
              </div>
    `

    dataDisplay.appendChild(card)
  })

  attachFAQToggleListeners();

}

function displaySponsors (data) {
  const dataDisplay = document.getElementById('sponsorsdataDisplay')
  dataDisplay.innerHTML = '' // Clear "Loading" message

  data.forEach(item => {
    // Limiting to 10 items for display
    const card = document.createElement('div')
    card.className = 'sponsors-logo'
    card.setAttribute('data-aos', 'fade-up');
    card.innerHTML = `
                <img src="${item.imgUrl}" alt="${item.Name}" class="sponsors-logo-img">         
    `

    dataDisplay.appendChild(card)
  })
}

{/* <p class="sponsors-logo-name">${item.Name}</p> */}


/* COUNTERS */
// Function to animate each counter
function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const duration = 5000; // 2 seconds
  const increment = target / (duration / 16); // Increment based on 60 FPS
  
  let currentValue = 0;

  function updateCounter() {
      currentValue += increment;

      if (currentValue < target) {
          counter.textContent = Math.ceil(currentValue);
          requestAnimationFrame(updateCounter);
      } else {
          counter.textContent = target;
      }
  }

  updateCounter();
}

// Function to detect if the entire section is in the viewport
function isSectionInView(section) {
  const rect = section.getBoundingClientRect();
  return (
      rect.top >= 0 && 
      rect.bottom <= window.innerHeight
  );
}

// Function to animate counters when the section is in view
function triggerCounters() {
  const countersSection = document.querySelector('.start_counters');
  const counters = document.querySelectorAll('.count');

  if (isSectionInView(countersSection)) {
      counters.forEach(counter => {
          const alreadyAnimated = counter.getAttribute('data-animated');
          if (!alreadyAnimated) {  // Only animate if not already done
              animateCounter(counter);
              counter.setAttribute('data-animated', 'true');  // Mark as animated
          }
      });
      // Remove the scroll event listener once the section is animated
      window.removeEventListener('scroll', triggerCounters);
  }
}

// Scroll event to trigger counting when the section is fully in view
window.addEventListener('scroll', triggerCounters);

// Optional: Trigger immediately in case counters are already in view on load
window.addEventListener('load', triggerCounters);


/*FAQ */
// Function to attach event listeners to FAQ questions
function attachFAQToggleListeners() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const answer = faqItem.querySelector('.faq-answer');
      
      faqItem.classList.toggle('active');

      if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand the answer
      } else {
        answer.style.maxHeight = 0; // Collapse the answer
      }
    });
  });
}
