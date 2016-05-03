var util = (function(node, view, viewModel) {
    'use strict';

    var 
        nodeHasBindings = function (node) {
            return node.getAttribute ? node.getAttribute('data-bind') : false;
        },

        getBindings = function (node) { 
            return node.dataset;
        },

        executeBindings;

}());

// Reference to our element
var element = document.getElementById("id"), attr,
        datas = {};

// Cycle over each attribute on the element
for (var i = 0; i < element.attributes.length; i++) {
    // Store reference to current attr
    attr = element.attributes[i];
    // If attribute nodeName starts with 'data-'
    if (/^data-bind-/.test(attr.nodeName)) {
        // Log its name (minus the 'data-' part), and its value
        var key = attr.nodeName.replace(/^data-bind-/, ''),
                val = attr.nodeValue;
        datas[key] = val;
    }
}
return datas;