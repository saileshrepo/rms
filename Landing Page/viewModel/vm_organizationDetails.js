var newCityModel = function () {
    var self= this;
    self.newCityText = ko.observable("");
  // self.newCountryText = ko.observable("");
    self.newCity = ko.observableArray(["Hyderabad", "Bhubaneshwar"]); 
    self.selectedCity = ko.observableArray([]);                             
    self.addLocation = function () {
        if ((self.newCityText() != "") && (self.newCity.indexOf(self.newCityText()) < 0)) 
            self.newCity.push(self.newCityText());
        self.newCityText(""); // Clear the text box
    };
 
    self.removeCity = function () {
        self.newCity.removeAll(self.selectedCity());
        self.selectedCity([]); // Clear selection
    };
 
 
};
 
/*ko.applyBindings(new newCityModel());*/