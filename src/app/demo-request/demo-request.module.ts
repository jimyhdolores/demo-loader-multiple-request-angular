import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoRequestComponent } from './demo-request.component';

@NgModule({
  declarations: [DemoRequestComponent],
  imports: [CommonModule],
  exports: [DemoRequestComponent],
})
export class DemoRequestModule {}
