import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReportTestComponent} from "./report-test/report-test.component";
import {HtmlTestComponent} from "./html-test/html-test.component";

const routes: Routes = [
    {
        path: "reporte",
        component: ReportTestComponent
    },
    {
        path: "reporte_HTML",
        component: HtmlTestComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }