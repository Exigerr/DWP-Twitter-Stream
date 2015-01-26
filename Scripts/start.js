var header = document.getElementById('headerBar');
var cvs = new Canvas(document.getElementById('dataCanvas'));
cvs.height = window.innerHeight - header.offsetHeight;
cvs.init();
var app = new App();

if(cvs.ctx !== null){
    app.start();
}