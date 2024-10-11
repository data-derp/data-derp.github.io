window.addEventListener("load", function (event) {

    // Disable naviagation container, when page is called from gather.town
    // add query parameter nav=false to embedded links
    const displayNavigation = getQueryParameterByName('nav');
    if (displayNavigation !== 'false') {
        return
    }

    const asides = document.getElementsByTagName('aside');
    const mains = document.getElementsByTagName('main');
    console.log("++", asides, mains)
    if (asides.length > 0 && mains.length > 0) {
        asides[0].style.display = 'none'
        mains[0].style.maxWidth = 'none'
    }
});

function getQueryParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
