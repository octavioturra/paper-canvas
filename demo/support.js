(function (window, undefined) {
    var Canvas = window.canvas;

    if (!Canvas) {
        var supportWarning = document.getElementsByClassName('brower-support');
        supportWarning[0].style.display = 'block';
    }
})(window);
