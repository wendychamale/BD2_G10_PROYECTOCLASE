import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoRankingComponent } from './grafico-ranking.component';

describe('GraficoRankingComponent', () => {
  let component: GraficoRankingComponent;
  let fixture: ComponentFixture<GraficoRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
