document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.timeline-swiper', {
    //Количество слайдов для показа
    slidesPerView: 1.3,
      
    // Отступ между слайдами
    spaceBetween: 20,

    //Скорость
    speed: 800,

    effect: 'slide',

    //Стрелки
    navigation: {
        nextEl: '.timeline-swiper-button-next',
        prevEl: '.timeline-swiper-button-prev'
    },

    scrollbar: {
      el: '.timeline-swiper-scrollbar',
      draggable: true,
    },

    //Фракция
    pagination: {
      el: '.timeline-swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '<span class="asd">/</span>' + '<span class="' + totalClass + '"></span>';
      }
    },

    breakpoints: {
      769: {
        slidesPerView: 2.7,
        spaceBetween: 40
      },
    }
});

const activitySlider = new Swiper('#activity-slider', {
  spaceBetween: 10,
  grid: {
    rows: 3,
    fill: 'row',
  },
  navigation: {
    nextEl: '.activity-media-button-next',
    prevEl: '.activity-media-button-prev',
  },

  pagination: {
    el: '.activity-media-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + '<span class="activity-asd">/ </span>' + '<span class="' + totalClass + '"></span>';
    },
  }
});

if ($('#activity-slider').length) {
  if ($(window).width() >= 769) {
    activitySlider.destroy();
  }
}

const todaySlider = new Swiper('#today-slider', {
  spaceBetween: 10,
  grid: {
    rows: 3,
    fill: 'row',
  },
  navigation: {
    nextEl: '.today-media-button-next',
    prevEl: '.today-media-button-prev',
  },

  pagination: {
    el: '.today-media-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
    },
  }
});

if ($('#today-slider').length) {
  if ($(window).width() >= 769) {
    activitySlider.destroy();
  }
}
  
  
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
  });

  $('.broadcasts-media__category-item').click(function () {
    $('.broadcasts-media__category-item').removeClass('active');
    $(this).addClass('active');
  });

  if ($('#calendar').length > 0) {
    $("#calendar").simpleCalendar();
  }

  $('.select_checked').click(function () {
    $(this).next().slideToggle();
  });

  $('.select-dropdown__option').click(function () {
    var value = $(this).attr('data-value');
    $(this).parent().parent().parent().find('.calendar-time__select').val(value);
    $(this).parent().parent().find('.select_checked').find('.select-text').text(value);
    $(this).parent().slideUp();
  });

  $('.modal-up').click(function (e) {
    e.preventDefault();
    $('body').addClass('o-hidden');
    $('#popup').addClass('active');
  });

  $('.modal-feedback').click(function (e) {
    e.preventDefault();
    $('body').addClass('o-hidden');
    $('#popup-feedback').addClass('active');
  });

  $('.popup-close').click(function (e) {
    e.preventDefault();
    $('body').removeClass('o-hidden');
    $(this).closest('.popup').removeClass('active');
  });

  const broadcastsSlider = new Swiper('#broadcasts-slider', {
    spaceBetween: 10,
    grid: {
      rows: 3,
      fill: 'row',
    },
    navigation: {
      nextEl: '.broadcasts-media-button-next',
      prevEl: '.broadcasts-media-button-prev',
    },
    pagination: {
      el: '.broadcasts-media-pagination',
      type: 'fraction',
      formatFractionCurrent: (number) => {
        if (number < 10) {
          return '0' + number;
        }
        return number
      },
      formatFractionTotal: (number) => {
        if (number < 10) {
          return '0' + number;
        }
        return number
      },
    },
  })

  if ($('#broadcasts-slider').length) {
    if ($(window).width() >= 769) {
      broadcastsSlider.destroy();
    }
  }

  if ($(window).width() <= 768) {
    $('.calendar header').click(function () {
      $(this).next().slideToggle().end().closest('.calendar').toggleClass('active');
    });
  }
});