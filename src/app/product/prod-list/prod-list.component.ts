import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from "app/product/hero.model";

import { filter } from "rxjs/operator/filter";
import { Observable } from "rxjs/Observable";
import { ProdService } from "app/product/prod.service";
// import { ProdButtonComponent} from '../shared/prod-button/prod-button.component';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  @Input() heroes;
  @Output() deleteProdEvent = new EventEmitter();

  pageTitle: string = 'Product List';
  errorMessage: string;
  options: Array<string> = ['Book', 'car', 'clothing', 'Electronics', 'Food'];
  selectedHero: Hero;
  filteredOptions: Observable<string[]>;
  searchInput = new FormControl();
  constructor(private prodService: ProdService, private router: Router,
    private route: ActivatedRoute, ) { }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  ngOnInit() {
    this.filteredOptions = this.searchInput.valueChanges
      // .startWith(null)
      .map(val => val ? this.filter(val) : this.options.slice());

    this.searchInput.valueChanges
      // .filter(val => !!val)
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((searchTerm: string) => {
        // to filter array of objects
        return this.prodService.getHeroes()
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
  onDelete(hero: Hero): void {
    // fire deleteProdEvent and pass hero to parent componemt - i.e., heroes.component
    this.deleteProdEvent.emit(hero);
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes/', this.selectedHero._id]);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  onSelect(hero: any) {
    this.selectedHero = hero;
  }
}
