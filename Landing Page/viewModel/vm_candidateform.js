////
//var SkillModel = function(skills) {
//    var self = this;
//    self.skills = ko.observableArray(skills);
// 
//    self.addSkill = function() {
//        self.skills.push({
//            name: "",
//            rate: "",
//            exp:""
//        });
//    };
// 
//    self.removeSkill = function(skill) {
//        self.skills.remove(skill);
//    };
//};
//var CompanyDetailModel=function(company){
//    var self=this;
//    self.company=ko.observableArray(company);
//    self.addCompanyDetail = function(){
//        self.company.push({
//            name:"",
//            role:"",
//            reason:"",
//            fromdate:"",
//            todate:""
//        });
//    };
//    
//    self.removeCompanyDetail = function(c) {
//        self.company.remove(c);
//    };
//};

var viewModel3 =function(){
	var self=this;
    self.data={
        position:ko.observable("DOTNET DEVELOPER"),
        ref_code:ko.observable("110 "),
        f_name:ko.observable("Sailesh "),
        l_name:ko.observable("Arya"),
        email:ko.observable("sailesharya@outlook.com"),
        experience:ko.observable("10"),
        contact_no:ko.observable("9439146606"),
        sex:ko.observable("male"),
        place:ko.observable("Bhubaneswar"),
        salary:ko.observable("150000/month"),
        ctc:ko.observable("500000/month"),
        notice_period:ko.observable("2months"),
        lang:ko.observable("English"),
        b_10:ko.observable("a"),
        b_12:ko.observable("demo"),
        b_grad:ko.observable("demo"),
        b_postgrad:ko.observable("demo"),
        p_10:ko.observable("demo"),
        p_12:ko.observable("demo"),
        p_grad:ko.observable("demo"),
        p_postgrad:ko.observable("demo"),
        certification:ko.observable("demo"),
        achievements:ko.observable("demo"),
        skills:ko.observableArray([
            
            {name:"demo",rate:"2",exp:"3"}
        ]),
        company:ko.observableArray([
            {name:"ABC",role:"Senior ASP.NET Developer",reason:"No",fromdate:"2011-03-01",todate:"2013-03-05"}]),
        

    }
    
    self.completedata= localStorage.getItem("completedata")? JSON.parse(localStorage.getItem("completedata")) : data;

    self.addskill= function() {
            //console.log(data.skills());
            data.skills.push({name:"",rate:"1",exp:""});
    };
    self.removeSkill = function(skill) {
        data.skills.remove(skill);
    };

    self.submit=function(){
        localStorage.setItem("completedata",JSON.stringify(ko.toJS(data)));
    }
    self.removeCompanyDetail= function(a){
        data.company.remove(a);
    }
    self.addCompanyDetail=function() {
          
            data.company.push({name:"",role:"",reason:"",fromdate:"",todate:""});
    };

    return self;
}();

//var viewModel3=ko.mapping.fromJS(completedata);
    


//var viewModel1 = new SkillModel([
//    { name: "a", rate:"1",exp:"2"},
//    { name: "b", rate:"3",exp:"4"}
//]);

//var viewModel2= new CompanyDetailModel([
//    {name:"Sailesh", role:"1", reason:"1313", fromdate:"313", todate:"1313"},
//    {name:"Sa",role:"313",reason:"313",fromdate:"313", todate:"313"}
//]);