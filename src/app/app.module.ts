import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecimalCalculator } from './decimal-calculator/decimal-calculator.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FooterAuthorComponent } from './footer-author/footer-author.component';
import { BinaryCalculatorComponent } from './binary-calculator/binary-calculator.component';
import { NavCalculatorComponent } from './nav-calculator/nav-calculator.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    DecimalCalculator,
    FooterAuthorComponent,
    BinaryCalculatorComponent,
    NavCalculatorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
