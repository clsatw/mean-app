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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
// import { Data } from './mock-data';
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:3000/prods/hero';
        // tslint:disable-next-line:member-ordering
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    /*
        getHeroes(): Promise<Hero[]> {
            let HEROES = Data.createRandomCatalog(5);
            return Promise.resolve(HEROES);
        }
    */
    // Each Http service method returns an Observable of HTTP Response objects.
    HeroService.prototype.getHero = function (id) {
        return this.http
            .get(this.heroesUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroes = function () {
        return this.http
            .get(this.heroesUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero._id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .map(function (res) { return res.json().data; });
    };
    HeroService.prototype.create = function (hero) {
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: this.headers })
            .map(function (res) { return res.json().data; });
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .map(function (res) { return res.json().ok; });
    };
    HeroService.prototype.extractData = function (res) {
        // The response data are in JSON string form. The app must parse that string into JavaScript objects by calling response.json().
        var body = res.json();
        // console.dir(body.data);
        return body || {};
    };
    HeroService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
/*
getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getHeroes()), 2000);
    });
}
*/
//# sourceMappingURL=hero.service.js.map