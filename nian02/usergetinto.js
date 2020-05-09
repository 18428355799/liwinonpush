window.addEventListener('load', function() {
    var wl = document.body.clientWidth || document.documentElement.clientWidth;
    wleft(wl);
    var a = document.body.clientHeight || document.documentElement.clientHeight;
    document.getElementById("zhuandi").style.height = a + "px";
    document.getElementById("zhuandia").style.height = a + "px";
    document.getElementById("zi").style.top = wl * 0.74 + "px";
    var real = document.getElementById("ditu").height || document.getElementById("ditu").style.height || document.getElementById(
        "ditu").offsetHeight;
    var h = parseInt(real);
    document.getElementById("ditu").style.top = a - h + "px";
    window.addEventListener('resize', function() {
        var wl = document.body.clientWidth || document.documentElement.clientWidth;
        wleft(wl);
        var a = document.body.clientHeight || document.documentElement.clientHeight;
        document.getElementById("zhuandi").style.height = a + "px";
        document.getElementById("zhuandia").style.height = a + "px";
        document.getElementById("zi").style.top = wl * 0.74 + "px";
        var real = document.getElementById("ditu").height || document.getElementById("ditu").style.height || document.getElementById(
            "ditu").offsetHeight;
        var h = parseInt(real);
        document.getElementById("ditu").style.top = a - h + "px";
    })
})

function wleft(wl) {
    //alert(wl);
    document.getElementById("quan").style.width = "46%";
    document.getElementById("quan").style.left = "27%";
    document.getElementById("quan").style.top = "11%";
    document.getElementById("zhuandi").style.width = "110.133%";
}