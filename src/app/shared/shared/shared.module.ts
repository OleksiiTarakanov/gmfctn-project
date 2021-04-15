import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankYouComponent } from '../components/thank-you/thank-you.component';

@NgModule({
  declarations: [
    ThankYouComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThankYouComponent,
  ]
})


export class SharedModule { }
