
var items= function(){
    
    var self = this;
    self.name = ko.observableArray([
        {name:"Prapti", appliedfor:"NITRR", source:"PM1001", location:"Raipur", status:"Selected",experience:"1",achievements:"abc", skills:"asp.net",other:"ccc"},
        {name:"Sailesh", appliedfor:"CET", source:"HYD1002", location:"Bhubaneshwar", status:"Selected",experience:"2",achievements:"zxc", skills:"mssql",other:"ccc"},
        {name:"Riddhima", appliedfor:"GIET", source:"FL1003", location:"Gunupur", status:"Shortlisted",experience:"3",achievements:"asd", skills:"asp.net",other:"ccc"},
        {name:"Shweta", appliedfor:"NITRR", source:"PM1011", location:"Raipur", status:"On-Hold",experience:"4",achievements:"fgh", skills:"mssql",other:"ccc"},
        {name:"Soumya", appliedfor:"CET", source:"HYD1012", location:"Bhubaneshwar", status:"Selected",experience:"5",achievements:"hjk", skills:"mssql",other:"bbb"},
        {name:"Sneha", appliedfor:"GIET", source:"BBSR1004", location:"Gunupur", status:"On-Hold",experience:"1",achievements:"sddf", skills:"asp.net",other:"bbb"},
        {name:"Poonam", appliedfor:"CET", source:"HYD1013", location:"Bhubaneshwar", status:"On-Hold",experience:"2",achievements:"sddf", skills:"C++",other:"bbb"},
        {name:"Raghvendra", appliedfor:"NITRR", source:"FL1015", location:"Raipur", status:"Rejected",experience:"3",achievements:"sddf", skills:"mssql",other:"aaa"},
        {name:"Sameer", appliedfor:"CET", source:"BBSR1014", location:"Raipur", status:"Rejected",experience:"4",achievements:"bnm", skills:"mssql",other:"bbb"},
        {name:"Keshav", appliedfor:"GIET", source:"HYD1016", location:"Gunupur", status:"Rejected",experience:"5",achievements:"bnm", skills:"asp.net",other:"bbb"},
        {name:"Anand", appliedfor:"CET", source:"BBSR1009", location:"Bhubaneshwar", status:"Selected",experience:"6",achievements:"bnm", skills:"C++",other:"bbb"},
        {name:"Bishal", appliedfor:"NITR", source:"FL1008", location:"Bhubaneshwar", status:"Shortlisted",experience:"7",achievements:"jhjhj", skills:"asp.net",other:"aaa"},
        {name:"John", appliedfor:"UOC", source:"BBSR1007", location:"New York", status:"Rejected",experience:"1",achievements:"fgfg", skills:"jhjhj",other:"aaa"},
        {name:"Aslam",appliedfor:"CET", source:"FL1005", location:"Bhubaneshwar", status:"On-Hold",experience:"2",achievements:"fgfg", skills:"jhjhj",other:"aaa"},
        {name:"Jacky", appliedfor:"BITS", source:"HYD1006", location:"Bhubaneshwar", status:"Selected",experience:"3",achievements:"fgfg", skills:"jhjhj",other:"aaa"},
        {name:"Kabul", appliedfor:"PIT", source:"BBSR1010", location:"Bhubaneshwar", status:"Shortlisted",experience:"4",achievements:"fgfg", skills:"jhjhj",other:"aaa"}
    ]);
    
    
    self.filter = ko.observable("");
    self.filterName = ko.observable("");
    self.filterAppliedFor = ko.observable("");
    self.filterSource = ko.observable("");
    self.filterLocation = ko.observable("");
    self.filterStatus = ko.observable("");
    self.filterExperience = ko.observable("");
    self.filterAchievements = ko.observable("");
    self.filterSkills = ko.observable("");
    self.filterOther = ko.observable("");
 
    
    <!-- SORTING STARTS -->
        
 // Sort By Name   
      self.sortByNameAsc = function() {
        self.name.sort(function(a, b) {
            return a.name < b.name ? -1 : 1;
        });
    };
       self.sortByNameDesc = function() {
        self.name.sort(function(a, b) {
            return a.name > b.name ? -1 : 1;
        });
    };
    
  // Sort By Applied for   
      self.sortByAppliedForAsc = function() {
        self.name.sort(function(a, b) {
            return a.appliedfor < b.appliedfor ? -1 : 1;
        });
    };
       self.sortByAppliedForDesc = function() {
        self.name.sort(function(a, b) {
            return a.appliedfor > b.appliedfor ? -1 : 1;
        });
    };
    
  // Sort By Source.   
      self.sortBySourceAsc = function() {
        self.name.sort(function(a, b) {
            return a.source < b.source ? -1 : 1;
        });
    };
       self.sortBySourceDesc = function() {
        self.name.sort(function(a, b) {
            return a.source > b.source ? -1 : 1;
        });
    };
    
    // Sort By Location  
      self.sortByLocationAsc = function() {
        self.name.sort(function(a, b) {
            return a.location < b.location ? -1 : 1;
        });
    };
       self.sortByLocationDesc = function() {
        self.name.sort(function(a, b) {
            return a.location > b.location ? -1 : 1;
        });
    };
    
    // Sort By Status  
      self.sortByStatusAsc = function() {
        self.name.sort(function(a, b) {
            return a.status < b.status ? -1 : 1;
        });
    };
       self.sortByStatusDesc = function() {
        self.name.sort(function(a, b) {
            return a.status > b.status ? -1 : 1;
        });
    };
    
    // Sort By Experience  
      self.sortByExperienceAsc = function() {
        self.name.sort(function(a, b) {
            return a.experience < b.experience ? -1 : 1;
        });
    };
       self.sortByExperienceDesc = function() {
        self.name.sort(function(a, b) {
            return a.experience > b.experience ? -1 : 1;
        });
    };
    
    // Sort By Achievements  
      self.sortByAchievementsAsc = function() {
        self.name.sort(function(a, b) {
            return a.achievements < b.achievements ? -1 : 1;
        });
    };
       self.sortByAchievementsDesc = function() {
        self.name.sort(function(a, b) {
            return a.achievements > b.achievements ? -1 : 1;
        });
    };
    
    // Sort By Skills  
      self.sortBySkillsAsc = function() {
        self.name.sort(function(a, b) {
            return a.skills < b.skills ? -1 : 1;
        });
    };
       self.sortBySkillsDesc = function() {
        self.name.sort(function(a, b) {
            return a.skills > b.skills ? -1 : 1;
        });
    };
    
    // Sort By Other Details   
      self.sortByOtherAsc = function() {
        self.name.sort(function(a, b) {
            return a.other < b.other ? -1 : 1;
        });
    };
       self.sortByOtherDesc = function() {
        self.name.sort(function(a, b) {
            return a.other > b.other ? -1 : 1;
        });
    };
    
    
    <!-- SORTING ENDS -->
        
        
        
        
    <!-- FILTERING STARTS -->
    
  
    self.filteredItems = ko.computed(function() {
        var filter = self.filter().toLowerCase();
        var filterName = self.filterName().toLowerCase();
        var filterAppliedFor = self.filterAppliedFor().toLowerCase();
        var filterSource = self.filterSource().toLowerCase();
        var filterLocation = self.filterLocation().toLowerCase();
        var filterStatus = self.filterStatus().toLowerCase();
        var filterExperience = self.filterExperience().toLowerCase();
        var filterAchievements = self.filterAchievements().toLowerCase();
        var filterSkills = self.filterSkills().toLowerCase();
        var filterOther = self.filterOther().toLowerCase();
        
        
        
        if (!filter && !filterName && !filterAppliedFor && !filterSource && !filterLocation && !filterStatus && !filterExperience && !filterAchievements && !filterSkills && !filterOther) 
        {
            return self.name();
        }
        else if(filterName && !filterAppliedFor && !filterSource && !filterLocation && !filterStatus && !filterExperience && !filterAchievements && !filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.name.toLowerCase().indexOf(filterName) !== -1  );            
        });
        }   
        else if(!filterName && filterAppliedFor && !filterSource && !filterLocation && !filterStatus && !filterExperience && !filterAchievements && !filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.appliedfor.toLowerCase().indexOf(filterAppliedFor) !== -1  );            
        });
        }
        else if(!filterName && !filterAppliedFor && filterSource && !filterLocation && !filterStatus && !filterExperience && !filterAchievements && !filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.source.toLowerCase().indexOf(filterSource) !== -1  );            
        });
        }
        else if(!filterName && !filterAppliedFor && !filterSource && filterLocation && !filterStatus && !filterExperience && !filterAchievements && !filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.location.toLowerCase().indexOf(filterLocation) !== -1 );            
        });
        }
        else if(!filterName && !filterAppliedFor && !filterSource && !filterLocation && filterStatus && !filterExperience && !filterAchievements && !filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.status.toLowerCase().indexOf(filterStatus) !== -1  );            
        });
        } 
        else if(!filterName && !filterAppliedFor && !filterSource && !filterLocation && !filterStatus && filterExperience && !filterAchievements && !filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.experience.toString().indexOf(filterExperience) !== -1  );            
        });
        } 
        else if(!filterName && !filterAppliedFor && !filterSource && !filterLocation && !filterStatus && !filterExperience && filterAchievements && !filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.achievements.toLowerCase().indexOf(filterAchievements) !== -1  );            
        });
        } 
        else if(!filterName && !filterAppliedFor && !filterSource && !filterLocation && !filterStatus && !filterExperience && !filterAchievements && filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.skills.toLowerCase().indexOf(filterSkills) !== -1  );            
        });
        }
        else if(!filterName && !filterAppliedFor && !filterSource && !filterLocation && !filterStatus && !filterExperience && !filterAchievements && !filterSkills && filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.other.toLowerCase().indexOf(filterOther) !== -1  );            
        });
        }
        
        
        
        
        else if(filter && !filterName && !filterAppliedFor && !filterSource && !filterLocation && !filterStatus && !filterExperience && !filterAchievements && !filterSkills && !filterOther) {
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.name.toLowerCase().indexOf(filter) !== -1 || index.appliedfor.toLowerCase().indexOf(filter) !== -1 || index.source.toLowerCase().indexOf(filter) !== -1  || index.location.toLowerCase().indexOf(filter) !== -1  || index.status.toLowerCase().indexOf(filter) !== -1  || index.experience.toString().indexOf(filter) !== -1  || index.achievements.toLowerCase().indexOf(filter) !== -1  || index.skills.toLowerCase().indexOf(filter) !== -1  || index.other.toLowerCase().indexOf(filter) !== -1 );            
        });
        }   
        else{
            return ko.utils.arrayFilter(self.name(), function(index) {
                return (index.name.toLowerCase().indexOf(filterName) !== -1 && index.appliedfor.toLowerCase().indexOf(filterAppliedFor) !== -1 && index.source.toLowerCase().indexOf(filterSource) !== -1  && index.location.toLowerCase().indexOf(filterLocation) !== -1  && index.status.toLowerCase().indexOf(filterStatus) !== -1  && index.experience.toString().indexOf(filterExperience) !== -1  && index.achievements.toLowerCase().indexOf(filterAchievements) !== -1  && index.skills.toLowerCase().indexOf(filterSkills) !== -1  && index.other.toLowerCase().indexOf(filterOther) !== -1 );            
        });
        }
         
    });
    
  
    <!-- FILTERING ENDS -->
    
};

