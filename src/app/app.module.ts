import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrimengModule } from './primeng/primeng.module';
import { ExcursionListComponent } from './pages/excursion-list/excursion-list.component';
import { CustomerService } from './pages/excursion-list/customer.service';
import { AddEditExcursionComponent } from './pages/add-edit-excursion/add-edit-excursion.component';

@NgModule({
  declarations: [AppComponent, ExcursionListComponent, AddEditExcursionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
