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
    this.options = ['books', 'Clothing', 'Electronics', 'Food'];
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
      .switchMap((val: string) => // this.heroService.getHeroes(val, 0).filter(x => x.type === type && x.price > 0))        
      {
        // to filter array of objects
        return this.heroService.getHeroes()
          .map(prods => prods.filter((obj) => obj.type === val))
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
  /*
  getProd(id: string): IHero{
    this.heroService.getHero(id).subscribe(
      prod=> 
    )
  }
  */

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



