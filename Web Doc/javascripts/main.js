$(function() {
    $("#toc").tocify({
        selectors: "h2,h3,h4,h5"
    }).data("toc-tocify");

    $(".optionName").popover({
        trigger: "hover"
    });

    $("a[href='#']").click(function(event) {
        event.preventDefault();
    });
});

hljs.initHighlightingOnLoad();
