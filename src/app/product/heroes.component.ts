import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { IHero } from './hero';
import { HeroService } from './hero.service';
import * as gg from './mock-data';
import { NumberValidators } from '../shared/number.validator'

import { filter } from "rxjs/operator/filter";
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from "rxjs/Observable";
import { FormValidationService } from "app/form-validation.service";
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
  heroes: Array<any> = [];
  // formGroup contains FormControl
  heroForm: FormGroup;
  formError: { [id: string]: string };
  private validationMessages: { [id: string]: { [id: string]: string } };

  selectedHero: IHero;

  constructor(private _fb: FormBuilder,
    private FormValidationService: FormValidationService,
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService) {
    //this.searchInput = new FormControl('');
    // Initialize strings
    this.options = ['books', 'Clothing', 'Electronics', 'Food'];
    // current validator error msg
    this.formError = {
      // 'id': '',
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

    /*
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.gotoProd(id);
      }
    )
    */

    this.filteredOptions = this.searchInput.valueChanges
      // .startWith(null)
      .map(val => val ? this.filter(val) : this.options.slice());
    
    this.createForm();
    this.heroForm.valueChanges
      // wait till we stop typing for 500ms
      .debounceTime(500)
      .subscribe(data => this.FormValidationService.onValueChanged(data,
                                           this.formError, this.heroForm, 
                                           this.validationMessages ));

    this.searchInput.valueChanges
      // .filter(val => !!val)
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((val: string) => this.heroService.getHeroes(val, 0))
      .subscribe(heroes => {
        // console.log('next: ', heroes);
        this.heroes = heroes
      },
      error => this.errorMessage = <any>error,
      () => console.log('Stream is over')
      );

    // this.getHeroes();
  }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
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
  /*
  getProd(id: string): IHero{
    this.heroService.getHero(id).subscribe(
      prod=> 
    )
  }
  */
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
    this.heroService.delete(hero)
      .subscribe((status: boolean) => {
        if (status) {
          this.router.navigateByUrl('/heroes/list');
        } else {
          this.errorMessage = 'Unable to delete customer';
        }
      },
      (err) => console.log(err));


    /*
   .then(() => {
     this.heroes = this.heroes.filter(h => h !== hero);
     if (this.selectedHero === hero) { this.selectedHero = null; }
   });
   */
  }
}



