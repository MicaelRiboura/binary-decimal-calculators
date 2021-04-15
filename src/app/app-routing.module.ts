import { HistoryComponent } from './history/history.component';
import { BinaryCalculatorComponent } from './binary-calculator/binary-calculator.component';
import { DecimalCalculator } from './decimal-calculator/decimal-calculator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'decimal-calculator', component: DecimalCalculator},
  {path: 'binary-calculator', component: BinaryCalculatorComponent},
  {path: 'history', component: HistoryComponent},
  { path: '', redirectTo: '/binary-calculator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
