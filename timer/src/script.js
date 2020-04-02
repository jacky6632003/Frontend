setInterval(getTime, 1000);
function getTime(){
    var d = new Date();
    var arr = d.toString().split(' ');
    // console.log(arr);
    $('#time').text(arr[4]);
    $('#date').text(arr[1]+' '+arr[2]+', '+arr[3])
    if(d.getSeconds()==0){
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        var color = 'rgb('+r+','+g+','+b+')';
        console.log(color);
        $('body').css('background-color', color);
    }
    
}