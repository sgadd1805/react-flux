import DemoDispatcher from '../dispatcher/demodispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var _value = 0;

function _increase(){
    _value++;
}

function _decrease(){
    _value--;
}

var DemoStore = assign({}, EventEmitter.prototype,
{
    getValue: function() {
        return _value;
    },

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener : function(callBack){
        this.on(CHANGE_EVENT, callBack);
    },

    removeChangeListener: function(callback){
        this.removeChangeListener(CHANGE_EVENT, callback);
    }
});

DemoDispatcher.register(function(action){
    switch(action.actionType){
        case "Increase":
            _increase();
            DemoStore.emitChange();
            break;
        case "Descrease":
            _decrease();
            DemoStore.emitChange();
            break;
        default:
    }
});

export default DemoStore;