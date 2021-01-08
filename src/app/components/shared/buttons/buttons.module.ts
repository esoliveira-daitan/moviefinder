import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightGreenButtonComponent } from './light-green-button/light-green-button.component';

@NgModule({
  declarations: [
    LightGreenButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LightGreenButtonComponent
  ],
})
export class ButtonsModule { }
