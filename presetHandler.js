// Use this presets array inside your presetHandler
//Array format: [0][0][0]
//First Index = Which group of Arrays. Groups of arrays come in 4's. There are 4 groups. (Index 0-3)
//Second Index = Which sub-array.
//Third index = Which sub-element you want to choose. 
const presets = require('./presets');
const { response } = require('express');

// Complete this function:
//This function will return an array based on the type of request. 
//GET: 200, Returns the top array element to the client.  
//PUT: 200, Modifies the top array element specified by the client. 
//404: Is returned when a request is made out of bounds. 
//400: Bad request is returned when the request did not come in the form of GET or PUT. 
const presetHandler = (reqType, index, newPresetArray) => {
    let response = [];
    
    //404
    if (index < 0 || index > 3){
     response[0] = 404;
     return response;
    }
    
    
    switch(reqType){
        case 'GET':
            response[0] = 200;
            response[1] = presets[index];
            return response;
            
        case 'PUT':
            response[0] = 200;
            response[1] = newPresetArray;
            presets[index] = newPresetArray;
            return response;

        default: response[0] = 400; return response;

    }//closing switch

};//closing presetHandler

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;

//console.log(presetHandler('GET', 0));