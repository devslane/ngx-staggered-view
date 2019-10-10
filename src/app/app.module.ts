import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxStaggeredViewModule} from '../../projects/ngx-staggered-view/src/lib/ngx-staggered-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStaggeredViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
