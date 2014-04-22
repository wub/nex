/*jshint -W117*/
/*jshint -W098*/

/* Stripe loader animation */
var iterator,
    $target  = $('#stripe-loader'),
    canvas  = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    width   = 1000,
    height  = 8,
    colours = [
        '467F71', 'D3F263', '3E8C84',
        '296B73', 'E52738', 'FEE63F',
        '3BD2CC', '2BA6E8', 'B4D455'
    ];

canvas.width = width;
canvas.height = height;

function stripe() {
    applyStripe = window.setInterval(function () {
        for (iterator = 0; iterator < canvas.width; iterator += 1)
        {
            var random = Math.floor(Math.random() * 50);

            context.fillStyle = '#' + colours[Math.floor(Math.random() * colours.length)];
            context.fillRect((iterator * random), 0, (50 * random), height);
        }

        $target.css('background', 'url(' + canvas.toDataURL('image/png') + ') repeat-x');
    }, 100);

    $target.animate({ height: '8px' });
}

function stopStripe() {
    window.clearInterval(applyStripe);
    $target.animate({ height: 0 });
}
