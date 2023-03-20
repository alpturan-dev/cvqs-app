export default function GetPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}