$(function () {
    const lazyLoadOptions = {
        scrollDirection: "vertical",
        effect: "fadeIn",
        effectTime: 300,
        placeholder: "",
        onError: function (element) {
            console.log("[lazyload] Error loading " + element.data("src"));
        },
        afterLoad: function (element) {
            element.css("background-image", "none");
            element.css("min-height", "0");
        }
    };

    $("img.lazy, div.lazy:not(.always-load)").Lazy({
        visibleOnly: true,
        ...lazyLoadOptions
    });
    $("div.lazy.always-load").Lazy({
        visibleOnly: false,
        ...lazyLoadOptions
    });
    $("[data-toggle='tooltip']").tooltip();
});
