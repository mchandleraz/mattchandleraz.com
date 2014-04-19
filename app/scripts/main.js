var mcaz = mcaz || {};

mcaz["_breakpoints"] = jRespond([
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
	return mcaz["_breakpoints"].getBreakpoint();
}