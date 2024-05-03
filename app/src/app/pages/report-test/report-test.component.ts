import {Component} from '@angular/core';
import {BooksInterface, BooksItems} from "./books";
import {ImpresionService} from "../../shared/service/impresion.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-report-test',
    templateUrl: './report-test.component.html',
    styleUrls: ['./report-test.component.scss']
})
export class ReportTestComponent {
    books: BooksInterface[] = [];
    flexRadio: FormControl = new FormControl('descargarPDF');

    constructor(private impresionService: ImpresionService) {
        this.books = new BooksItems().get();
    }

    PrintEvent() {
        const header = ["Autor", "Title", "Year", "Country", "Language", "Pages"];
        let body: any[] = [];
        for (let book of this.books) {
            let bodytemp = [];
            bodytemp.push(book.author);
            bodytemp.push(book.title);
            bodytemp.push(book.year);
            bodytemp.push(book.country);
            bodytemp.push(book.language);
            bodytemp.push(book.pages);


            body.push(bodytemp);
        }
        let isSave: boolean = this.flexRadio.value == "descargarPDF";
        this.impresionService.printCustom(header, body, 'Title of book', isSave)
    }
}
