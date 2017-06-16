import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {IHero} from './hero';
import { HeroService } from './hero.service';
import * as gg from './mock-data';
import { NumberValidators } from '../shared/number.validator'

import { filter } from "rxjs/operator/filter";
import { Observable } from "rxjs/Observable";
// tslint:disable-next-line:quotemark

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  searchInput = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;

  errorMessage: string;
  titleAlert = 'This field is required';
  heroes: any[];
  // formGroup contains FormControl
  heroForm: FormGroup;
  formError: { [id: string]: string };
  private validationMessages: { [id: string]: { [id: string]: string } };
  // formError _messages: { [id: string]:}
  selectedHero: IHero;

  constructor(private _fb: FormBuilder, private router: Router, private heroService: HeroService) {
    //this.searchInput = new FormControl('');
    // Initialize strings
    this.options = ['books', 'Clothing', 'Electronics', 'Food'];   
    this.formError = {
      'id': '',
      'type': '',
      'name': '',
      'price': ''
    };
    // could be retireve from database for differnet languages
    this.validationMessages = {
      'id': {
        'required': 'id is required',
        'minlength': 'id must be at least three characters.',
        'maxlength': 'id cannot exceed 50 characters.'
      },
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
  };

  createForm() {
    this.heroForm = this._fb.group({
      id: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)])],
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

  get price() { return this.heroForm.get('price'); }

  onSubmit() {
    this.add(this.heroForm.value);
    this.heroForm.reset();
  }

  ngOnInit() {
    /* create mock data, To remove the collection: db.prods.drop
    let mockData: IHero[];
    mockData = gg.createRandomCatalog(6);
    for (const hero of mockData) {
      this.add(hero);
    }
    */

    this.filteredOptions = this.searchInput.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.options.slice());

    this.createForm();
    this.heroForm.valueChanges
      .debounceTime(500)
      .subscribe(data => this.onValueChanged(data));

    this.searchInput.valueChanges
      .debounceTime(500)
      .switchMap((val: string) => {
        return this.heroService.getHeroes(val, 0);
      })
      .subscribe(heroes => {
        console.log('next: ', heroes);
        this.heroes = heroes
      },
      error => this.errorMessage = <any>error,
      ()=>console.log('Stream is over')
      );

    // this.getHeroes();
  }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  // Start of a generic validator
  onValueChanged(data: any): void {
    for (const field in this.formError) {
      if (this.formError.hasOwnProperty(field)) {
        const hasError = this.heroForm.controls[field].dirty &&
          !this.heroForm.controls[field].valid;
        this.formError[field] = '';
        if (hasError) {
          for (const key in this.heroForm.controls[field].errors) {
            if (this.heroForm.controls[field].errors.hasOwnProperty(key)) {
              this.formError[field] += this.validationMessages[field][key] + ' ';
            }
          }
        }
      }
    }
  }
  onSelect(hero: any) {
    this.selectedHero = hero;
  }
  /*
    getHeroes() {
      this.heroService.getHeroes()
        .subscribe(
        heroes => this.heroes = heroes,
        error => this.errorMessage = <any>error);
    }
  */
  gotoDetail(): void {
    this.router.navigate(['/heroes/', this.selectedHero._id]);
  }

  add(hero: IHero): void {
    // name = name.trim();
    if (!hero) { return; }
    this.heroService.add(hero)
      .subscribe((data: IHero) => {
        if (data) {
          this.selectedHero = null
          this.router.navigateByUrl('/heroes/list');
        } else {
          this.errorMessage = 'Unable to save customer';
        }
      },
      error => this.errorMessage = <any>error);
  }

  update(hero: IHero) {
    this.heroService.update(hero)
      .subscribe((heor: any) => {
        if (hero) {
          this.router.navigate(['/heroes']);
        } else {
          this.errorMessage = 'Unable to save customer';
        }
      },
      (err) => console.log(err));
  }

  delete(hero: IHero) {
    this.heroService.delete(hero._id);
    this.router.navigateByUrl('/heroes/list');

    /*
      .subscribe((status: boolean) => {
        if (status) {
          this.router.navigateByUrl('/heroes');
        } else {
          this.errorMessage = 'Unable to delete customer';
        }
      },
      (err) => console.log(err));
    */

    /*
   .then(() => {
     this.heroes = this.heroes.filter(h => h !== hero);
     if (this.selectedHero === hero) { this.selectedHero = null; }
   });
   */
  }
}



