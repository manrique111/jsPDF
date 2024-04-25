import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportTestComponent } from './report-test/report-test.component';
import {PagesRoutingModule} from "./pages-routing.module";



@NgModule({
  declarations: [
    ReportTestComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
