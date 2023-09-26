import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExporterService {

  constructor() { }
  export(){
    let data = JSON.stringify({
      havaDurumu: { gunesliMi: true, sicaklik: "+25" },
    });
    let dataUri =
      "data: application/json; charset=utf-8," + encodeURIComponent(data);
    let exportFileName = "hava-durumu.json";
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileName);
    linkElement.click();
  }
}
