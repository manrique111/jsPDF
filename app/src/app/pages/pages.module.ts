import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportTestComponent } from './report-test/report-test.component';
import {PagesRoutingModule} from "./pages-routing.module";
import { HtmlTestComponent } from './html-test/html-test.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ReportTestComponent,
    HtmlTestComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ReactiveFormsModule
    ]
})
export class PagesModule { }
