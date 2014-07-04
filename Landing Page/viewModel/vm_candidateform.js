
var SkillModel = function(skills) {
    var self = this;
    self.skills = ko.observableArray(skills);
 
    self.addSkill = function() {
        self.skills.push({
            name: "",
            rate: "",
            exp:""
        });
    };
 
    self.removeSkill = function(skill) {
        self.skills.remove(skill);
    };
};
var CompanyDetailModel=function(company){
    var self=this;
    self.company=ko.observableArray(company);
    self.addCompanyDetail = function(){
        self.company.push({
            name:"",
            role:"",
            reason:"",
            fromdate:"",
            todate:""
        });
    };
    
    self.removeCompanyDetail = function(c) {
        self.company.remove(c);
    };
};
var viewModel1 = new SkillModel([
    { name: "a", rate:"1",exp:"2"},
    { name: "b", rate:"3",exp:"4"}
]);

var viewModel2= new CompanyDetailModel([
    {name:"Sailesh", role:"1", reason:"1313", fromdate:"313", todate:"1313"},
    {name:"Sa",role:"313",reason:"313",fromdate:"313", todate:"313"}
]);