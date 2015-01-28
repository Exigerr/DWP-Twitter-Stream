function translateElem(elem, x, y){
    elem.style.webkitTransform = 'translate('+x+'%, '+y+'%)';
    elem.style.transform = 'translate('+x+'%, '+y+'%)';
}


var SimpleVector = (function SimpleVector(x,y){
    this.x = x;
    this.y = y;
});

var Canvas =  (function () {
    function Canvas (canvas, width, height){
        this.elem = canvas;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.centre = new SimpleVector(this.width / 2, this.height / 2);
        this.ctx = null;
        this.init();
    }

    Canvas.prototype.init = function(){
        this.elem.width = this.width;
        this.elem.height = this.height;
        if (this.elem.getContext){
            this.ctx = this.elem.getContext('2d');
        } else {
            this.ctx = null;
        }
    };

    Canvas.prototype.clear = function(){
        this.ctx.clearRect(0,0,this.width, this.height);
    };

    return Canvas;
})();

