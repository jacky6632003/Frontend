var current = 'O'
var occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var over = false;
$(".grid div").click(place)
function place() {
    if (!over) {
        $(this).text(current)
        if (current == 'O') {
            // console.log($(this).class)
            if ($(this).text() != "O" || $(this).text() != 'X') {
                $(this).removeClass('gray');
                $(this).addClass('orange');
                current = 'X'
            }
        } else {
            if ($(this).text() != "O" || $(this).text() != 'X') {
                $(this).removeClass('gray');
                $(this).addClass('red');
                current = 'O'
            }
        }
    }
    var a = $('#a').text();
    var b = $('#b').text();
    var c = $('#c').text();
    var d = $('#d').text();
    var e = $('#e').text();
    var f = $('#f').text();
    var g = $('#g').text();
    var h = $('#h').text();
    var i = $('#i').text();
    check(a, b, c);
    check(d, e, f);
    check(g, h, i);

    check(a, d, g);
    check(b, e, h);
    check(c, f, i);

    check(a, e, i);
    check(c, e, g);


}

function check(a, b, c) {
    if (a == b && b == c && a !== '') {
        $('h1').text(a+' win');
        over = true;
    }
}

$('button').click(restart);

function restart() {
    $('h1').text('Tic Tac Toe');
    $('.grid div').text('');
    $('.grid div').removeClass('red');
    $('.grid div').removeClass('orange');
    $('.grid div').addClass('gray');
}