import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from "@angular/forms";

import { IHero } from "app/product/hero";
import { HeroService } from "app/product/hero.service";
import { filter } from "rxjs/operator/filter";
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  @Input() heroes;
  @Output() deleteProdEvent = new EventEmitter();
  errorMessage: string;
  options: Array<string> = ['Book', 'car', 'clothing', 'Electronics', 'Food'];
  selectedHero: IHero;
  filteredOptions: Observable<string[]>;
  searchInput = new FormControl();
  constructor(private heroService: HeroService, private router: Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
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
  }
  delete(hero: IHero): void {
    // pass hero to parent componemt - i.e., heroes.component
    this.deleteProdEvent.emit(hero);
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes/', this.selectedHero._id]);
  }

  onSelect(hero: any) {
    this.selectedHero = hero;
  }
}
