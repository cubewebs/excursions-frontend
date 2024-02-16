import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, PrimengModule],
  exports: [NavComponent],
})
export class SharedModule {}
