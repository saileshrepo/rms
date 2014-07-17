var draftsViewModel = function() {
        var self=this;
        self.requests= ko.observableArray(JSON.parse(localStorage.getItem(ko.toJS("allrequisitions"))));


}();