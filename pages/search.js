const movies = [
    { label: "Arrival", value: "Arrival", url: "/movie-info/arrival.html" },
    { label: "Gardians of the galaxy", value: "Gardians of the galaxy", url: "/movie-info/Gardians-Of-The-Galaxy.html" },
    { label: "Interstellar", value: "Interstellar", url: "/movie-info/Interstellar.html" }
];

jQuery("#movies-search").autocomplete({
    source: movies,
    select: function (event, ui) {
        location.href = ui.item.url;
    }
});