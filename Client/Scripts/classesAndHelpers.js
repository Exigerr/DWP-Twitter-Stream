function translateElem(elem, x, y){
    elem.style.webkitTransform = 'translate('+x+'%, '+y+'%)';
    elem.style.transform = 'translate('+x+'%, '+y+'%)';
}

//Simple Vector
//---------------------------------------------------------------
var SimpleVector = (function SimpleVector(x,y){
    this.x = x;
    this.y = y;
});


//Uber fast version of Math.atan2
//---------------------------------------------------------------
function atan2(x,y){
    if (x === 0) {
        if (y > 0) return Math.PI / 2;
        if (y === 0) return 0;
        return -Math.PI / 2;
    }
    var radian, z = y / x;
    if (z < -1 || z > 1) {
        radian = Math.PI / 2 - z / (z * z + 0.28);
        if (this.y < 0) return radian - Math.PI;
    }
    else {
        radian = z / (1 + 0.28 * z * z);
        if (x < 0) {
            if (y < 0) return radian - Math.PI;
            return radian + Math.PI;
        }
    }
    return radian;
}

//Vector Object
//---------------------------------------------------------------
var Vector = (function(){
    function Vector(x,y){
        this.x = 0;
        this.y = 0;
        this.angle = 0.00; //Radian
    }

    Vector.prototype.normalise = function(){
        var length = Math.sqrt(this.x * this.x + this.y * this.y);
        if(length !== 0){
            this.x /= length;
            this.y /= length;
        }
    };

    Vector.prototype.add = function(pos){
        this.x += pos.x;
        this.y += pos.y;

        return this;
    };

    Vector.prototype.scale = function(n, n2) {
        this.x *= n;
        this.y *= n2 || n;

        return this;
    };

    Vector.prototype.traject = function(speed) {
        this.x += speed * Math.cos(this.angle);
        this.y += speed * Math.sin(this.angle);
    };

    Vector.prototype.copy = function(pos){
        this.x = pos.x;
        this.y = pos.y;

        return this;
    };

    Vector.prototype.subtract = function(pos){
        this.x -= pos.x;
        this.y -= pos.y;
    };

    Vector.prototype.dot = function(pos){
        return (this.x * pos.x) + (this.y *pos.y);
    };

    Vector.prototype.cross = function(pos){
        return (this.x * pos.x) - (this.y * pos.y);
    };

    Vector.prototype.perpendicular = function() {
        var temp = this.x;
        this.x = this.y;
        this.y = 0-temp;
    };

    Vector.prototype.normal = function(){
        this.perpendicular();
        this.normalise();
    };

    return Vector;
})();

//Canvas Handler
//---------------------------------------------------------------
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

