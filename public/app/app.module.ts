import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommonComponent } from './app.component';

@NgModule({
  declarations: [
    CommonComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports:[CommonComponent],
  bootstrap: [CommonComponent]
})
export class CommonQCRIModule { 
}
