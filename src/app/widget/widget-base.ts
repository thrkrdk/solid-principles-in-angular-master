import {  Directive, Input } from '@angular/core';

@Directive()
export class WidgetBase {
  @Input()
  title: string = "";
  // exporterSevice = inject(ExporterService) ;
  onExport() {
    console.log("Buraya logic yazılacak.");
  }
}
