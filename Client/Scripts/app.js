var App =  (function () {
    function App (){
        this.ws;
        this.termHandler = new TermHandler(this.ws);
        this.toTrackElem = document.getElementById('trackTerm');
        this.listElem = document.getElementById('termWrapper');
        this.listElem.style.display = 'block';
    }

    App.prototype.start = function(){
        this.ws = new WebSocket('ws://localhost:1337');
        this.ws.onmessage = this.termHandler.response.bind(this);

        document.getElementById('addTerm').addEventListener('click', this.submit.bind(this), false);
        document.getElementById('removeTerm').addEventListener('click', this.remove.bind(this), false);
    };

    App.prototype.submit = function(e){
        e.preventDefault();
        var val = this.toTrackElem.value;
        if(val !== ''){
            if(this.termHandler.addTerm(val.split(/[ ,]+/)) === true){
                var option = document.createElement('option');
                option.value = val;
                option.innerHTML = val;
                this.listElem.appendChild(option);
                this.toggleVisibility(this.termHandler.list.length > 0);
            }
        }
    };

    App.prototype.remove = function(e){
        e.preventDefault();
        this.listElem.selectedIndex;
        //remove term;
        if(this.termHandler.removeTerm() === true){
            this.toggleVisibility(this.termHandler.list.length === 0);
        }

    };

    App..prototype.toggleVisibility = function(bool){
        if(bool === true){
            translateElem(this.listElem, 0,0);
        }
        else {
            translateElem(this.listElem, 100,0);
        }
    };

    return App;
})();


var TermHandler =  (function () {
    function TermHandler (ws){
        this.ws = ws;
        this.list = [];
    }


    TermHandler.prototype.addTerm = function(newTerms){
        //Check if term exists in array.
        //Add term to list
        //Send term to server
        //return if added or not
    };

    TermHandler.prototype.removeTerm = function(){
        //Check if term exists
        //Remove term from list
        //Send signal to server to stop tracking
    };

    TermHandler.prototype.response = function(obj){
        var data = JSON.parse(obj);
        //Sort
        //Update List - Array Splice?
    };

    return TermHandler;
})();


