var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

console.log ($diamond);
console.log ($box);
console.log($panel);

$btnShowHide.on('click', function () { //'click' is the action we want the user to do, then the function of rotation will occur
    $box.toggleClass('js-box-show-hide'); //adding a new class, TOGGLE: switch class on and off
    
});

$btnMove.on ('click', function () {
    $diamond.toggleClass('js-diamond-move');
});

$btnCollapseExpand.on ('click', function () {
    $panel.toggleClass('js-panel-expand');
});