import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { FormValidationService } from "app/form-validation.service";
import { NumberValidators } from "app/shared/number.validator";
import { HeroService } from "app/product/hero.service";
import { IHero } from "app/product/hero";

@Component({
  selector: 'app-prod-new',
  templateUrl: './prod-new.component.html',
  styleUrls: ['./prod-new.component.css']
})
export class ProdNewComponent implements OnInit {
  errorMessage: string;
  // formGroup contains FormControl
  heroForm: FormGroup;
  formError: { [id: string]: string };
  private validationMessages: { [id: string]: { [id: string]: string } };
  @Output() createNewProdEvent = new EventEmitter();
  
  constructor(private _fb: FormBuilder, private FormValidationService: FormValidationService, private heroService: HeroService) { };
  ngOnInit() {
    // current validator error msg
    this.formError = {
      'type': '',
      'name': '',
      'price': ''
    };
    // could be retireve from database for differnet languages
    this.validationMessages = {
      'type': {
        'required': 'type is required',
        'minlength': 'type must be at least 5 characters.',
        'maxlength': 'type cannot exceed 50 characters.'
      },
      'name': {
        'required': 'name is required',
        'minlength': 'name must be at least 5 characters.',
        'maxlength': 'name cannot exceed 50 characters.'
      },
      'price': {
        'range': 'price muse be btw 1 (lowest) and 999 (highest).'
      }
    };

    this.createForm();
    this.heroForm.valueChanges
      // wait till we stop typing for 500ms
      .debounceTime(500)
      .subscribe(data => this.FormValidationService.onValueChanged(data,
        this.formError, this.heroForm,
        this.validationMessages));
  };

  createForm() {
    this.heroForm = this._fb.group({
      type: [null, Validators.required],
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ])],
      price: ['', NumberValidators.range(1, 999)],
      imgUrl: ''
    }),
      // to set all value use setvalue method.
      this.heroForm.patchValue({
        imgUrl: 'http://lorempixel.com/400/200',
      })
  }

  add(hero: IHero): void {
    this.createNewProdEvent.emit(hero);
    // name = name.trim();
    if (!hero) { return; }
    this.heroService.add(hero)
      .subscribe((data: IHero) => {
        if (data) {
          // this.selectedHero = null
          // this.router.navigateByUrl('/heroes/list');
        } else {
          this.errorMessage = 'Unable to save customer';
        }
      },
      error => this.errorMessage = <any>error);
  }
  onSubmit() {
    this.add(this.heroForm.value);
    this.heroForm.reset();
  }


}
