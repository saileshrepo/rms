  function Round(data) {
    this.title = ko.observable(data.title);
    this.isDone = ko.observable(data.isDone);
}

function RoundsViewModel() {
    // Data
    var self = this;
    self.rounds = ko.observableArray([]);
    self.newRoundText = ko.observable();
    self.incompleteRounds = ko.computed(function() {
        return ko.utils.arrayFilter(self.rounds(), function(round) { return !round.isDone() });
    });

    // Operations
    self.addRound = function() {
        self.rounds.push(new Round({ title: this.newRoundText() }));
        self.newRoundText("");
    };
    self.removeRound = function(round) { self.rounds.remove(round) };
}