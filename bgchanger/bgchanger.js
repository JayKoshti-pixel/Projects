function color(z){
    var a = getComputedStyle(z).backgroundColor;
    // var b =a.backgroundColor;
    document.getElementsByTagName('BODY')[0].style.backgroundColor = a;

}