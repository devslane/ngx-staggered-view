import {NgModule} from '@angular/core';
import {NgxStaggeredViewComponent} from './components/ngx-staggered-view.component';
import {NgxStaggeredViewDirective} from './directives/ngx-staggered-view.directive';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [NgxStaggeredViewComponent, NgxStaggeredViewDirective],
  imports: [CommonModule],
  exports: [NgxStaggeredViewComponent, NgxStaggeredViewDirective]
})
export class NgxStaggeredViewModule {}
