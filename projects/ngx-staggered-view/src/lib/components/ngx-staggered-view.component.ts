import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {NgxStaggeredViewDirective} from '../directives/ngx-staggered-view.directive';

@Component({
  selector: 'ngx-staggered-view',
  templateUrl: 'ngx-staggered-view.component.html',
  styles: []
})
export class NgxStaggeredViewComponent implements OnInit {
  @ContentChild(NgxStaggeredViewDirective, {static: false, read: TemplateRef}) content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
