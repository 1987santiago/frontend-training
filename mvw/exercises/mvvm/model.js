var someModel = {
    
    name: '',
    age: '',

    set: function(prop, value) {
        this[prop] = value;
    },
    get: function(prop) {
        return this[prop];
    }
};