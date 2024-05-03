import { Injectable } from '@angular/core';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import {FormatPagesEnum, ImpresionEnum, UomEnum} from "./impresion.enum";
import {VariosService} from "./varios.service";

@Injectable({
  providedIn: 'root'
})
export class ImpresionService {
  image: string;


  constructor(private variosService: VariosService) {
    this.image = variosService.img
  }

  printCustom (header: string[], body: Array<any>, title: string, save?: boolean, nameFile: string = 'file_') {
    const doc = new jsPDF({
      orientation: ImpresionEnum.PORTRAIT,
      unit: UomEnum.PIXELS,
      format: FormatPagesEnum.LETTER,
    });

    doc.addImage(this.image, "JPEG", 10, 10, 40, 40);
    doc.text(title, 60, 30);
    doc.text("..", 100, 30)

    autoTable(doc, {
      head: [header],
      body: body,
    })

    var pageCount = doc.getNumberOfPages(); // Obtener el número de páginas
    doc.setFontSize(9);

    for(let i = 1; i <= pageCount; i++){
      doc.setPage(i); // Establecer la página actual
      const textCustom = `Página ${i} de ${pageCount}`;
      doc.text(textCustom, 385, 575);
    }

    if(save) {
      const day = new Date();
      doc.save(`${nameFile}${day.getDate()}${day.getMonth()}${day.getFullYear()}${day.getTime()}.pdf`)
    } else {
      let pdfData = doc.output('arraybuffer');
      // @ts-ignore
      doc.output('dataurlnewwindow');
    }

  }

}
