var AddJobViewModel= function() {
    var self=this;
    self.job= localStorage.getItem("jobs")? JSON.parse(localStorage.getItem("jobs")) : {
        jobId:ko.observable("TL01"),
        jobDesignation:ko.observable("Tech Lead"),
        skill1:ko.observable(),
       
        jobDescription:ko.observable(),
        skillSets: ko.observable(ko.computed(function() {
            return skillSets + "," + skill1();
    }, this)),
    }
        
        //self.jobs= localStorage.getItem("jobs")? JSON.parse(localStorage.getItem("jobs")) : job;
    self.submitJob= function() {
        localStorage.setItem("jobs", JSON.stringify(ko.toJS(job)));
    }
    }();