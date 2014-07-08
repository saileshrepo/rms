//<!--Server  
//        var data1= function(){
//            name= ko.observable('Sailesh');
//        gender=ko.observable('0');
//            desc=ko.observable('Good boy')
//        }
        var data1= {
            "name": ko.observable('Sailesh111'),
            "gender":ko.observable('0'),
            "desc":ko.observable('good Boy')
        }
        var submit =function(){
            localStorage.setItem("data",JSON.stringify(ko.toJS(data1)));
        }
        var data= localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : data1 ;
//var data1= ko.observableArray( JSON.parse( localStorage.getItem("data")));
     //   var viewModel = ko.mapping.fromJS(localStorage.getItem("data2"));
       var viewModel=ko.mapping.fromJS(data);

//-->
//<!--
    
    //Function- if we will not provide new . dummy data.
//so new is required

//var viewModel= function(){
//this.name=ko.observable("Sailesh");
//};
  //  -->
//<!--
//Object- it will work for ko.applyBindings(viewModel)
//new will not work

//var viewModel={
//    name: ko.observable('Sailesh')
//}
    //-->

//var viewModel=(function(){
//    var self=this;
//    self.data=ko.observableArray(JSON.parse(localStorage.getItem("data")));
//    console.log(data);
//    return self; 
//})()