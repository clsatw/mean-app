import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms/forms";

@Injectable()
export class FormValidationService {

  constructor() { }
  // Start of a generic validator. we can move this to a service for any reactiveForm we use
  onValueChanged(data: any, formError: { [id: string]: string }, gForm:FormGroup,
      validationMsg: { [id: string]: { [id: string]: string } }): void {
    for (const field in formError) {
      if (formError.hasOwnProperty(field)) {
        const hasError = gForm.controls[field].dirty &&
          !gForm.controls[field].valid;
        formError[field] = '';
        if (hasError) {
          for (const key in gForm.controls[field].errors) {
            if (gForm.controls[field].errors.hasOwnProperty(key)) {
              // if error occurs, setting the correct validation msg into that field.
              formError[field] += validationMsg[field][key] + ' ';
            }
          }
        }
      }
    }
  }

}
