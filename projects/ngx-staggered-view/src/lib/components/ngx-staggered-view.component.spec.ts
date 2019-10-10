import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStaggeredViewComponent } from './ngx-staggered-view.component';

describe('NgxStaggeredViewComponent', () => {
  let component: NgxStaggeredViewComponent;
  let fixture: ComponentFixture<NgxStaggeredViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStaggeredViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStaggeredViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
