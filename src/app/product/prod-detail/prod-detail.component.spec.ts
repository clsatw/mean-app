import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetailComponent } from './prod-detail.component';

describe('HeroDetailComponent', () => {
  let component: ProdDetailComponent;
  let fixture: ComponentFixture<ProdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
