"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var hero_service_1 = require("../hero.service");
var passwordWatcher = function (c) {
    return c.get('type').value !== c.get('name').value ? null : { 'nomatch': true };
};
var HeroesComponent = (function () {
    function HeroesComponent(_fb, router, heroService) {
        this._fb = _fb;
        this.router = router;
        this.heroService = heroService;
        this.createForm();
    }
    ;
    HeroesComponent.prototype.createForm = function () {
        this.heroForm = this._fb.group({
            id: '',
            type: ['', forms_1.Validators.required],
            name: '',
            price: ['', forms_1.Validators.required],
            imgUrl: ''
        }, { validator: passwordWatcher });
        // to set all value use setvalue method.
        this.heroForm.patchValue({
            imgUrl: 'http://lorempixel.com/400/200',
        });
    };
    Object.defineProperty(HeroesComponent.prototype, "price", {
        get: function () { return this.heroForm.get('price'); },
        enumerable: true,
        configurable: true
    });
    HeroesComponent.prototype.onSubmit = function () {
        this.add(this.heroForm.value);
        this.heroForm.reset();
    };
    HeroesComponent.prototype.ngOnInit = function () {
        /* create mock data, To remove the collection: db.prods.drop
        let mockData: Hero.W[];
        mockData = gg.createRandomCatalog(6);
        for (const hero of mockData) {
          this.add(hero);
        }
        */
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero._id]);
    };
    HeroesComponent.prototype.add = function (hero) {
        var _this = this;
        // name = name.trim();
        if (!hero) {
            return;
        }
        this.heroService.create(hero)
            .subscribe(function (res) { return _this.selectedHero = null; }, function (error) { return _this.errorMessage = error; });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.id)
            .subscribe(
        // res => this.heroes = heroes,
        function (error) { return _this.errorMessage = error; });
        /*
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
        */
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'app-hero',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map