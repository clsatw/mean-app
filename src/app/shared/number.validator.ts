import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class NumberValidators {

    static rangeHardCoded(c: AbstractControl): { [key: string]: boolean } | null {
        if (c.value && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
            return { 'range': true };
        }
        // valid
        return null;
    }

    static range(min: number, max: number): ValidatorFn {
        // return a key vale pair or null ; the key is a string and the vlaue is a boolean
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }

    passwordWatcher(ctrl: AbstractControl): ValidationErrors | null {
        return ctrl.get('type').value !== ctrl.get('name').value
            ? null
            : { 'nomatch': { expected: 'certain value', acutal: ctrl.get('type').value } };
    }
}

