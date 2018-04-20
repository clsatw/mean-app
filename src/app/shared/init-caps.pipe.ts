/* There are two categories of pipes: pure and impure. Pipes are pure by default.
** Every pipe you've seen so far has been pure. You make a pipe impure by setting its pure flag to false.
** You could make the FlyingHeroesPipe impure like this:
** @Pipe({
** name: 'flyingHeroesImpure',
**   pure: false
** })
*/

import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../product/hero.model';

@Pipe({ name: 'prodPriceRange' })
export class ProdPriceRangePipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    return allHeroes.filter(hero => parseInt(hero.price) > 100);
  }
}