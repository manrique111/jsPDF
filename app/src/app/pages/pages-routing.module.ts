import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReportTestComponent} from "./report-test/report-test.component";

const routes: Routes = [
    {
        path: "reporte",
        component: ReportTestComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }