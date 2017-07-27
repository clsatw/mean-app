import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IHero } from './hero';
import { HeroService } from './hero.service';
import * as gg from './mock-data';

import { filter } from "rxjs/operator/filter";
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";

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
  heroes: Array<any> = [];
  selectedHero: IHero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService) {
    //this.searchInput = new FormControl('');
    // Initialize strings
    this.options = ['Book', 'car', 'clothing', 'Electronics', 'Food'];
  }

  // get price() { return this.heroForm.get('price'); }

  ngOnInit() {
    this.getHeroes();
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
    /*
      filter(val: string): string[] {
        return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
      }
    
        this.filteredOptions = this.searchInput.valueChanges
          // .startWith(null)
          .map(val => val ? this.filter(val) : this.options.slice());
    */
    this.searchInput.valueChanges
      // .filter(val => !!val)
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((searchTerm: string) => {
        // to filter array of objects
        return this.heroService.getHeroes()
          .map(prods => prods.filter((obj) => {
            if (this.options.indexOf(searchTerm) >= 0) {
              return obj.type === searchTerm;
            } else {
              return obj;
            }
          }))
      })
      .subscribe(heroes => {
        console.log('next: ', heroes);
        this.heroes = heroes
      },
      error => this.errorMessage = <any>error,
      () => console.log('Stream is over')
      );

    // this.getHeroes();
  }

  onSelect(hero: any) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(
      heroes => this.heroes = heroes,
      error => this.errorMessage = <any>error);
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes/', this.selectedHero._id]);
  }
 
  add(hero: IHero): void {  
    // name = name.trim();
    if (!hero) { return; }
    this.heroService.add(hero)
      .subscribe((data: IHero) => {
        if (data) {
          // this.selectedHero = null
          // this.router.navigateByUrl('/heroes/list');
          this.getHeroes();
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
          // this.router.navigate(['/heroes']);
          this.getHeroes();
        } else {
          this.errorMessage = 'Unable to save customer';
        }
      },
      (err) => console.log(err));
  }

  delete(hero: IHero) {
    this.heroService.delete(hero)
      .subscribe(() => {
        //if (status) {
          //console.log('del status: ', res);// this.router.navigateByUrl('/heroes/list');
          this.getHeroes();
        //} else {
        //  this.errorMessage = 'Unable to delete customer';
        //}
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



