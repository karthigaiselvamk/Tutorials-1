/// <reference path="script.js" />

app.factory('stringService', () => {
    return {
        processString: function(input) {
          if(!input) {
            return input;
          }
      
        var output = "";

        for(i = 0; i < input.length; i++) {
          if(i > 0 && input[i] == input[i].toUpperCase())
            output = output + " ";

          output += input[i];
        }

        return output;
      }
    };

});

