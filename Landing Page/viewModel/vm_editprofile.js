	var obj=function(){
          var self=this;
          self.firstName=ko.observable("Deepak");
          self.lastName=ko.observable("Mahapatra");
         
        
            self.fullName= ko.computed(function(){
            return self.firstName() + '   ' + self.lastName();
        });
        
        };
        
       
  