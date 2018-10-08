import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponentComponent } from './book-list-component/book-list-component.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CartItemComponentComponent } from './cart-item-component/cart-item-component.component';
import { ProcessOrderFormComponentComponent } from './process-order-form-component/process-order-form-component.component';
import { OneMoreComponentComponent } from './test/one-more-component/one-more-component.component';
import { ExtItDirective } from './directives/ext-it.directive';
import { ExtOnDirective } from './directives/ext-on.directive';
import { GoToItNowPipe } from './pipes/go-to-it-now.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponentComponent,
    BookComponentComponent,
    CartComponentComponent,
    CartItemComponentComponent,
    ProcessOrderFormComponentComponent,
    OneMoreComponentComponent,
    ExtItDirective,
    ExtOnDirective,
    GoToItNowPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
