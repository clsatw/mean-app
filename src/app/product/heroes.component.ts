/* put presentation logic in the component class, and not in the template
** The component's responsibility is for the presentation and gathering of information for
** the view. It should not care how it gets the data, just that it knows who to ask for it.
** Separating the data services moves the logic on how to get it to the data service, 
** and lets the component be simpler and more focused on the view.
*/

import { Component, OnInit, OnChanges } from '@angular/core';

// import { Router, ActivatedRoute } from '@angular/router';

import { Hero } from './hero.model';
import { ProdService } from './prod.service';
import * as gg from './mock-data';

// tslint:disable-next-line:quotemark

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //options: string[];
  

  errorMessage: string;
  heroes: Array<Hero> = [];
  // selectedHero: IHero;

  constructor(
    // private router: Router,
    // private route: ActivatedRoute,
    private heroService: ProdService) {
    //this.searchInput = new FormControl('');
    // Initialize strings
    
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
  
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(
      heroes => this.heroes = heroes,
      error => this.errorMessage = <any>error);
  }
 
  add(hero: Hero): void {  
    // name = name.trim();
    if (!hero) { return; }
    this.heroService.add(hero)
      .subscribe((data: Hero) => {
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

  update(hero: Hero) {
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

  delete(hero: Hero) {
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



