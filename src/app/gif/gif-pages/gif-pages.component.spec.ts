import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifPagesComponent } from './gif-pages.component';

describe('GifPagesComponent', () => {
  let component: GifPagesComponent;
  let fixture: ComponentFixture<GifPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
