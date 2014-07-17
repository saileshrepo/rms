

var requisitionViewModel= function() {
var self=this;
self.requisition = localStorage.getItem("allrequisitions") ? ko.observableArray(JSON.parse(localStorage.getItem(ko.toJS("allrequisitions")))): ko.observableArray([]);

    self.dept=ko.observable("");
    self.jobs=ko.observable("");
    self.curJob=ko.observable("");
    self.noOfPos=ko.observable("");
    self.dateClose=ko.observable("");
    self.pos=ko.observable("");
    self.pos=ko.observable("");
    self.nameOfPerson=ko.observable("");
    self.manager=ko.observable("");
     self.experience=ko.observable("");
     self.jobDescription=ko.observable("");
     self.roles=ko.observable("");
     self.shortProjects=ko.observable("");
     self.longProjects=ko.observable("");
    self.justification=ko.observable("");
    
    
    
    
    
    self.saveAsDraft = function() {
        var newrequest= { department:self.dept(),
                         jobTitles:self.jobs(),
                         currentJob:self.curJob(),
                         numberOfPositions:self.noOfPos(),
                         dateOfClosing:self.dateClose(),
                         typeOfPos:self.pos(),
                         
                        }
        self.requisition.splice(0,0,newrequest);
        localStorage.setItem("allrequisitions" ,JSON.stringify(self.requisition()));
    } 
    
return self;

}();



//var requisitionViewModel= function() {
//var self=this;
//self.requisition = localStorage.getItem("allrequisitions") ? ko.observableArray(JSON.parse(localStorage.getItem(ko.toJS("allrequisitions")))):ko.observableArray([]); 
//
//var form={
//
//    dept:ko.observable(""),
//    jobs:ko.observable(""),
//    curJob:ko.observable(""),
//    noOfPos:ko.observable(""),
//    dateClose:ko.observable(""),
//    pos:ko.observable(""),
//    nameOfPerson:ko.observable(""),
//    manager:ko.observable(""),
//     experience:ko.observable(""),
//     jobDescription:ko.observable(""),
//    roles:ko.observable(""),
//     shortProjects:ko.observable(""),
//     longProjects:ko.observable(""),
//    justification:ko.observable(""),
//};
//    
//    
//    
//    
//    self.saveAsDraft = function() {
//        
//        self.requisition.splice(0,0,form);
//        localStorage.setItem("allrequisitions" ,JSON.stringify(self.requisition()));
//    } 
//    
//return self;
//
//}();