import { FormControl } from '@angular/forms';

export class CifValidator {
static checkCIF (FormControl: FormControl){
    const prChar = FormControl.value.charAt(0);
    if (!isNaN(prChar)){
        return {'checkCIF': true};
    } else {
        return null; // importante devolver null
    }
}

}