const finder_target = document.getElementById("finder-widget");
const finder_url = finder_target.dataset.finder_partner;
const finder_utm_source = finder_target.dataset.finder_source;
const finder_utm_medium = finder_target.dataset.finder_medium;
const finder_utm_content = location.host + location.pathname;

let finder_widget = "<iframe id='finder-widget-iframe' src=\"https://www.finder.com/widget-" + finder_url + "?utm_source=" + finder_utm_source + "&utm_medium=" + finder_utm_medium + "&utm_content=" + finder_utm_content + "\" scrolling=\"no\" style=\"height:250px;width:100%;border:none;overflow:hidden;\"></iframe>";

finder_target.innerHTML += finder_widget;

window.addEventListener("message", function(e){
    const finder_w = document.getElementById("finder-widget-iframe");
    if (finder_w.contentWindow === e.source) {
        finder_w.height = e.data.height + 10 + "px";
        finder_w.style.height = e.data.height + 10 + "px";
    }
})