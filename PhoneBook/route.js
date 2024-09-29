(function(){
    var app = angular.module("phonebook",[]);
    var appController=function($scope){
      
      $scope.rowLimit=3;
      $scope.currentPage = 0;
    $scope.numPerPage = 9;
   
    
       $scope.info=[
  {name:"Mohamed",phone:'05-020-2356', email:'m.hazem@yahoo.com'},
  {name:'ahmed', phone:'02-030-4986', email:'ah.basem@yahoo.com'},
  {name:'laila', phone:'01-111-2357', email:'laila@gmail.com'},
  {name:'salma', phone:'01-268-1548', email:'salma@gmail.com'},
  {name:'ahmed', phone:'02-030-4986', email:'ah.basem@yahoo.com'},
  {name:'laila', phone:'01-111-2357', email:'laila@gmail.com'},
  {name:'salma', phone:'01-268-1548', email:'salma@gmail.com'},
  {name:'ahmed', phone:'02-030-4986', email:'ah.basem@yahoo.com'},
  {name:'laila', phone:'01-111-2357', email:'laila@gmail.com'},
  {name:'salma', phone:'01-268-1548', email:'salma@gmail.com'},
  {name:'ahmed', phone:'02-030-4986', email:'ah.basem@yahoo.com'},
  {name:'laila', phone:'01-111-2357', email:'laila@gmail.com'},
  {name:'salma', phone:'01-268-1548', email:'salma@gmail.com'}]; 
   
      
      $scope.addContact = function(){		
    for(i=0;i<$scope.info.length&&$scope.info.length<10000;i++){
      
      $scope.info.push({ 'name':$scope.info.newName, 'phone': $scope.newPhone, 'email':$scope.newEmail });
      $scope.newName='';
      $scope.newPhone='';
      $scope.newEmail='';
     
      }
  };
    $scope.removeContact = function() { 
    $scope.info.splice(this.$index, 1);     
  };
      
   $scope.search= function(item){
              
      if($scope.searchContact==undefined){
                  return true;
              }
              
              else{
                 
         if($scope.searchContact.toLowerCase() && item.name.toLowerCase().indexOf($scope.searchContact.toLowerCase())   != -1||  item.phone && item.phone.indexOf($scope.searchContact)!=-1)
                      {
                          return true;
                      }
                                    }
              
              return false;    
          };
      
     
        
      
      };
  app.controller("appController",appController);
  }());