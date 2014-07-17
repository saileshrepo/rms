

var viewModel3 = function () {
	var self=this;
    self.data= localStorage.getItem("completedata")? JSON.parse(localStorage.getItem("completedata")) : {
        position:ko.observable("DOTNET DEVELOPER"),
        ref_code:ko.observable("110 "),
        f_name:ko.observable("Prapti "),
        l_name:ko.observable("Sahu"),
        email:ko.observable("sailesharya@outlook.com"),
        experience:ko.observable("10"),
        contact_no:ko.observable("9439146606"),
        isMale:ko.observable("on"),
        isFemale:ko.observable("on"),
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
            
            {name:"demo",rate:ko.observable(0),exp:"3"}
        ]),
        company:ko.observableArray([
            {name:"ABC",role:"Senior ASP.NET Developer",reason:"No",fromdate:"2011-03-01",todate:"2013-03-05"}]),
        resume: ko.observable("")
        

    }
    
   // self.completedata= localStorage.getItem("completedata")? JSON.parse(localStorage.getItem("completedata")) : data;

    self.addskill= function() {
            //console.log(data.skills());
            data.skills.push({name:"",rate:ko.observable(0),exp:""});
    };
    self.removeSkill = function(skill) {
        data.skills.remove(skill);
    };
    self.starratingvm= function(a,b){
       
        that=b.target;
        
        var c=that.alt;
       // data.skills.rate=5;
//                        that.attr("src","../img/star-on.png");
//                        that.prevAll().attr("src","../img/star-on.png");
//                        that.nextAll().attr("src","../img/star-off.png");
//
//                        $(this).siblings("input").attr("value",a);
//                        var d=$(this).siblings("input").attr("value");
//                       // console.log(d);
//                        
//                        $(this).siblings("input").val(d);
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
    
    self.maxRating = ko.observable(5);
    ko.bindingHandlers.starRating = {
    init: function(element, valueAccessor,allBindings, viewModel, bindingContext) { 
        var maxStars= self.maxRating(),starhtml;
        for (var i = 0; i < maxStars; i++)
        {
            starhtml= "<i class='fa fa-star'></i>"
           $(starhtml).appendTo(element);
        }
       
        // Handle mouse events on the stars
        $("i", element).each(function(index) {
            $(this)
//           .hover(
//                function() { $(this).prevAll().css("color","#F8C00D")}, 
//                function() { $(this).css("color","#F8C00D")}, 
//                
//                function() { $(this).nextAll().css("color","#E0E7E9")} 
//            )
            .click(function() { 
                var observable = valueAccessor() ;  // Get the associated observable
                observable(index+1);               // Write the new rating to it
            });
        });            
    },
    update: function(element, valueAccessor,allBindings, viewModel, bindingContext) {
        // Give the first x stars the "chosen" class, where x <= rating
        var observable = valueAccessor();
        $("i", element).each(function(index) {
            $(this).css("color",function(i,val){ 
                return index < observable()?"#F8C00D":"#E0E7E9";
            }); 
        });
    }    
};
//ko.virtualElements.allowedBindings.starRating = true;
    return self;
}();

 