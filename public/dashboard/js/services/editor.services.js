angular.module('dashboardApp') //this service is for the EDITOR VIEW.
  .factory('editorService', function ($http) {
    var root = ""; //Database
    var testMessages = [

    ];
  
    return{
      getAll: function(){ //Get all notes that the user has created. (for this video)
        return testMessages;
      },
      get: function(id){ //Get a specific note from the bloc 
      
      },
      add: function(content){ //Add a new note to the bloc, content incluides startTime, endTime & note content.
        testMessages.push(content);
      },
      remove: function(id){
        
      }
    };

  });