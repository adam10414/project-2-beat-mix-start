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

