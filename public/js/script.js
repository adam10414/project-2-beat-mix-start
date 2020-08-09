//const { response } = require("express");

// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

//toggleDrum() takes a string, and index number. It will then toggle the value at the specified index for that array. 
function toggleDrum(drum, index){
    //error checking
    if(drum === '' || index === ''){
        return;
    }

    if(index < 0 || index > 15){
        return;
    }


    //find drum
    switch(drum){
        case 'kicks':
            //Toggle value. 
            if(kicks[index]){
                kicks[index] = false;
                break;
            }
            else kicks[index] = true;
                break;

        case 'snares':
            //Toggle value. 
            if(snares[index]){
                snares[index] = false;
                break;
            }
            else snares[index] = true;
                break;

        case 'hiHats':
            //Toggle value. 
            if(hiHats[index]){
                hiHats[index] = false;
                break;
            }
            else hiHats[index] = true;
                break;

        case 'rideCymbals':
            //Toggle value. 
            if(rideCymbals[index]){
                rideCymbals[index] = false;
                break;
            }
            else rideCymbals[index] =  true;
                break;

        default: 
            break;

        
    }//close switch

}//close toggleDrum

//resets the selected drum to defaults.
function clear(drum){
    
    switch(drum){
        case 'kicks':
            kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
            break;

        case 'snares':
            snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
            break;

        case 'hiHats':
            hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
            break;

        case 'rideCymbals':
            rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

        default: break;
    }
}//close clear()

//inverts the selected drum to the opposite of what it was set to before. 
function invert(drum){

    switch(drum){
        case 'kicks':
            kicks = kicks.map(index => {
                if(index){ //index should be a boolean value. 
                    return false;
                }
                else return true;
            });
            break;

        case 'snares':
            snares = snares.map(index => {
                if(index){
                    return false;
                }
                else return true;
            });
            break;

        case 'hiHats':
            hiHats = hiHats.map(index => {
                if(index){
                    return false;
                }
                else return true;
            });
            break;

        case 'rideCymbals':
            rideCymbals = rideCymbals.map(index => {
                if(index){
                    return false;
                }
                else return true;
            });
            break;

        default: break;
    }//close switch
}//close invert

//This accepts coordinates on a grid, and return sthe neighboring cooridnates above, below, and side to side. Diagnals are not counted. 
//Grid is zero indexed at bottom left corner. 
//Grid is a [size] x [size] square. 
//Returns in [xValue, yValue] format per neighbor.
function getNeighborPads(x, y, size){
    let response = [];

    //Checks for out of bounds selections. 
    //x and y inputs should be >= 0, and should not exceed the size specified.
    //size -1 because x and y are index coordinates, and size is total rows / columns in the square. 
    if(x < 0 || y < 0 || x > size - 1 || y > size - 1){
        return response;
    }

    if(x !== 0 && y !== 0 && x !== size - 1 && y !== size - 1){ //If x,y are not edge cases.
        response.unshift([x+1, y]);
        response.unshift([x-1, y]);
        response.unshift([x, y+1]);
        response.unshift([x, y-1]);
        return response;
    }

    else if(x === 0 && y !== size -1 && y !== 0){ //Left edge cases
        response.unshift([x+1, y]);
        response.unshift([x, y+1]);
        response.unshift([x, y-1]);
        return response;
    }

    else if(x === 0 && y === size -1){ //Top left corner edge case
        response.unshift([x + 1, y]);
        response.unshift([x, y-1]);
        return response;
    }

    else if(x === 0 && y === 0){ //Bottom left corder edge case
        response.unshift([x+1, y]);
        response.unshift([x, y+1]);
        return response;
    }

    else if(x === size - 1 && y !== size -1 && y !== 0){ //Right edge cases
        response.unshift([x - 1, y]);
        response.unshift([x, y+1]);
        response.unshift([x, y-1]);
        return response;
    }

    else if(x === size -1 && y === size - 1){ //Top right corner edge case
        response.unshift([x-1, y]);
        response.unshift([x, y-1]);
        return response;
    }

    else if(x === size -1 && y === 0){ //Bottom right corner edge case.
        response.unshift([x-1, y]);
        response.unshift([x, y+1]);
        return response;
    }


    //It should be noted I'm being very loose with my conditionals here because if/else statements are evaluated in order and there is no other possibilities left over in this selection process. 
    else if(y === size -1){ //Top edge cases. 
        response.unshift([x+1, y]);
        response.unshift([x-1, y]);
        response.unshift([x, y-1]);
        return response;
    }

    else if(y === 0){ //Bottom edge cases
        response.unshift([x+1, y]);
        response.unshift([x-1, y]);
        response.unshift([x, y+1]);
        return response;
    }
    
}//closing getNeighborPads

//console.log(getNeighborPads(4,4,5));