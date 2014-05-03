'use strict';

/* Stripe loader animation */
var iterator,
    applyStripe = {},
    target  = document.getElementById('stripe-loader'),
    canvas  = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    width   = 333,
    height  = 5,
    time    = 6,
    colours = ['467F71', 'D3F263', '3E8C84','296B73', 'E52738', 'FEE63F','3BD2CC', '2BA6E8', 'B4D455'],
    colours_length = colours.length,
    canvas_width = canvas.width = width,
    canvas_height = canvas.height = height;

function stripe() {
  applyStripe = window.setInterval(function () {
      var cursor = 0,
          max = (canvas_width / 10),
          min = 1;

      while (cursor < canvas_width) {
        var width = (Math.floor(Math.random() * max) + min);

        context.fillStyle = '#' + colours[Math.floor(Math.random() * colours_length)];
        context.fillRect(cursor, 0, width, height);

        cursor += width;
      }

      target.style.background = 'url(' + canvas.toDataURL('image/png') + ') repeat-x';
  }, time);

  target.style.height = '5px';
}

function stopStripe() {
    window.clearInterval(applyStripe);
    target.style.height = 0;
}
