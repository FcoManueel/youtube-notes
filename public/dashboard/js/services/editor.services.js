angular.module('dashboardApp') //this service is for the EDITOR VIEW.
.factory('editorService', function ($http) {
    var root = ""; //Database

    var yt;
    var testMessages = [
    ];


    init();

    function init(){
        $http.get('/notes.json').
            success(function(data, status, headers, config){
                for(var i = 0; i < data.length; i++) {
                    testMessages.push(data[i]);
                }
            }).error(function(data, status, headers, config) {

            }
        );
    }
    return{
        getAll: function(){ //Get all notes that the user has created. (for this video)
            return testMessages;
        },
        get: function(id){ //Get a specific notes from the bloc

        },
        add: function(content){ //Add a new notes to the bloc, content includes startTime, endTime & notes content.
            note = {
                startTime: content.startTime,
                endTime: content.endTime,
                content: content.content
            };
            testMessages.push(note);

            $http.post('/notes.json', { note: note}).
                success(function(data, status, headers, config){
                    console.log("saved succesfully the data");
                }).error(function(data, status, headers, config) {
                    console.log(status);
                }
            );

        },
        edit: function(note){
            console.log(note.content);
            $http.put('/notes/'+note._id+'.json',  { note: note}).
                success(function(data, status, headers, config){
                    console.log(status);
                }).error(function(data, status, headers, config) {
                    console.log(status);
                }
            );

        },
        remove: function(note){
            //delete from memory
            var index = testMessages.indexOf(note);
            testMessages.splice(index,1);
            $http.delete('/notes/'+note._id+'.json').
                success(function(data, status, headers, config){
                    console.log(status);
                }).error(function(data, status, headers, config) {
                    console.log(status);
                }
            );
        }
    };

});