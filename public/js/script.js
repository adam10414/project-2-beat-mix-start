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
                if(index){
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

/*
console.log(hiHats);
invert('hiHats');
console.log(hiHats);
*/