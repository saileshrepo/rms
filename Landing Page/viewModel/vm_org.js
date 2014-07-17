  function Location(data) {
    this.city = ko.observableArray([data.city]);
    this.country = ko.observable(data.country);
    this.isDone = ko.observable(data.isDone);
}

function LocationsViewModel() {
    // Data
    var self = this;
    self.locations = ko.observableArray([]);
    self.newCityText = ko.observableArray([]);
    self.newCountryText = ko.observableArray([]);
    self.incompleteLocations = ko.computed(function() {
        return ko.utils.arrayFilter(self.locations(), function(location) { return !location.isDone() });
    });

    // Operations
    self.addLocation = function() {
        self.locations.push(new Location({ city: this.newCityText(), country: this.newCountryText() }));
        self.newCityText("");
        self.newCountryText("");
    };
    self.removeLocation = function(location) { self.locations.remove(location) };
}