//

var getTime = window.setInterval(function() {
    var today = new Date();
    var hours =today.getHours();
    var minutes =today.getMinutes();
    var seconds =today.getSeconds();

    hours = hours <= 9 ? '0' + hours : hours ;
    minutes = minutes <= 9 ? '0' + minutes : minutes ;
    seconds = seconds <= 9 ? '0' + seconds : seconds ;

    document.getElementById('currentTime').innerHTML = hours + ':' + minutes + ':' + seconds;

});




