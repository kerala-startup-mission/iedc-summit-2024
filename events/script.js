const appendData = (container, data, emptyMessage, type = 'event') => {
  // console.log(data[0].posterImage)
  if (data.length) {
    data.forEach(item => {
      const card = document.createElement('div')
      card.classList.add('card')
      card.setAttribute('data-aos', 'fade-up');
      if (type == 'event') {
        card.innerHTML = `
                <div class="poster">
                    <img src="${item.imgUrl}" alt="">
                </div>
                <div class="details">
                    <div class="content">
                        <h1>${item.eventName}</h1>
                        <div class="time">
                            <span>Price: ${item.price}&nbsp;</span>
                            <span>Venue: ${item.venue}</span>
                        </div>
                    </div>
                    <div class="buttons">
                        <button 
    onclick="${item.completed ? 'void(0)' : `window.open('${item.linkToReg}', '_blank')`} " 
    ${item.completed ? 'disabled' : ''} 
    style="cursor: ${item.completed ? 'not-allowed' : 'pointer'};">
    ${item.completed ? 'Completed' : 'Register'}
</button>
                        <button>
                            <a target="_blank" href="${item.linkToGuidelines}"> View Guidelines </a>
                        </button>
                    </div>
                </div>
                `
      } else if (type == 'lecture') {
        card.innerHTML = `
                <div class="poster">
                    <img src="${item.imgUrl}" alt="">
                </div>
                <div class="details">
                    <h1>${item.eventName}</h1>
                    <p> Speaker: ${item.speakerName} </p>
<div class="time">
                            <span>Price: ${item.price}&nbsp;</span>
                            <span>Venue: ${item.venue}</span>
                        </div>                    <div class="buttons">
                        <button 
    onclick="${item.completed ? 'void(0)' : `window.open('${item.linkToReg}', '_blank')`} " 
    ${item.completed ? 'disabled' : ''} 
    style="cursor: ${item.completed ? 'not-allowed' : 'pointer'};">
    ${item.completed ? 'Completed' : 'Register'}
</button>
                    </div>
                </div>
                `
      } else {
        card.innerHTML = `
                <div class="poster">
                    <img src="${item.imgUrl}" alt="">
                </div>
                <div class="details">
                    <h1>${item.eventName}</h1>
                    <p> Conducted By: ${item.speakerName} </p>
<div class="time">
                            <span>Price: ${item.price}&nbsp;</span>
                            <span>Venue: ${item.venue}</span>
                        </div>                    <div class="buttons">
                        <button 
    onclick="${item.completed ? 'void(0)' : `window.open('${item.linkToReg}', '_blank')`} " 
    ${item.completed ? 'disabled' : ''} 
    style="cursor: ${item.completed ? 'not-allowed' : 'pointer'};">
    ${item.completed ? 'Completed' : 'Register'}
</button>
                        
                    </div>
                </div>
                `
      }

      container.appendChild(card)
    })
  } else {
    container.appendChild(
      document.createTextNode(emptyMessage || 'No data available')
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const eventCardsContainer = document.querySelector(
    '#card-container .event-cards'
  )
  const lectureCardsContainer = document.querySelector(
    '#card-container .lecture-cards'
  )
  const workshopsCardsContainer = document.querySelector(
    '#card-container .workshop-cards'
  )


  fetch('https://iedc.agonline.in/api/get-data')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // Combine events, lectures, and workshops into a single list with an added 'type' field
      events = data['events']
      lectures = data['lectures']
      workshops = data['workshops']

      // Append combined data to the eventCardsContainer
      appendData(eventCardsContainer, events, 'No events available', 'event')
      appendData(
        lectureCardsContainer,
        lectures,
        'No Lecutres available',
        'lecture'
      )
      appendData(
        workshopsCardsContainer,
        workshops,
        'No Workshops available',
        'workshop'
      )
    })
    .catch(error => console.error('Error fetching data:', error))
})

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
}, 10)

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

$('.site-menu ul li a').on('click', function () {
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

// END JQUERY
