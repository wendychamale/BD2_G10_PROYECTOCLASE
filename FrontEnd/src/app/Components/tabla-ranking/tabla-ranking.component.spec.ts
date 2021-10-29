import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRankingComponent } from './tabla-ranking.component';
import { Component, OnInit } from '@angular/core';


describe('TablaRankingComponent', () => {
  let component: TablaRankingComponent;
  let fixture: ComponentFixture<TablaRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
