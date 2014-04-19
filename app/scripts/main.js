'use strict';
var mcaz = mcaz || {};

mcaz._breakpoints = window.jRespond([
    {
        label: 'base',
        enter: 0,
        exit: 479
    },{
        label: 'xsmall',
        enter: 480,
        exit: 767
    },{
        label: 'small',
        enter: 768,
        exit: 991
    },{
        label: 'medium',
        enter: 992,
        exit: 1199
    },{
        label: 'large',
        enter: 1200,
        exit: 10000
    }
]);

mcaz.breakpoint = function () {
	return mcaz._breakpoints.getBreakpoint();
};

mcaz.config = {
	viewport: mcaz.breakpoint(),
	template: document.querySelector('body').dataset.template
};

$(window).on('load resize', function () {
    mcaz.breakpoint();
});