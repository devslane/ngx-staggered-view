import { TestBed } from '@angular/core/testing';

import { NgxStaggeredViewService } from './ngx-staggered-view.service';

describe('NgxStaggeredViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStaggeredViewService = TestBed.get(NgxStaggeredViewService);
    expect(service).toBeTruthy();
  });
});
