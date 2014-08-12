(function (window, undefined) {
    var Canvas = !!document.createElement("canvas").getContext;

    if (!Canvas) {
        var supportWarning = document.getElementsByClassName('brower-support');
        supportWarning[0].style.display = 'block';
    }
})(window);
