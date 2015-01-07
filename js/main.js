function addHeaderFooter() {
    console.log('Loading header...');
    $('#header').load("header.html");
    console.log('Loading footer...');
    $('#footer').load("footer.html");
}

function loadDialogPanel() {
    $('body').append('<div id="dialogPanel" style="display: none"></div>');
    $('#dialogPanel').load('dialog_panel.html');
}

function displayDialogPanel(s) {
    var t = document.querySelector('#dialogPanelTemplate');
    t.content.querySelector('#dialog').textContent = s;
    var clone = document.importNode(t.content, true);
    document.body.appendChild(clone);
}
$(document).ready(function() {
    addHeaderFooter();
    loadDialogPanel();
});