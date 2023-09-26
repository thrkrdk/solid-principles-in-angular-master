import { Component } from "@angular/core";
import { ExporterService } from "../exporter.service";

@Component({
  selector: "app-widget",
  template: `
    <div class="header">
      <h1>Hava Durumu</h1>
      <button mat-stroked-button (click)="onExport()">Dışa Aktar</button>
    </div>
    <mat-divider></mat-divider>
    <h5>Sıcaklık</h5>
    <section class="wether-widget">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        border: #f0ebeb solid 1px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fafafa;
        width: 400px;
        margin-left: 20px;
      }
      .wether-widget {
        display: block;
        text-align: center;
        position: relative;
        min-width: 190px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .widget-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
        color: orange;
      }
      .value {
        font-size: 24px;
        opacity: 0.7;
      }
    `,
  ],
})
export class WidgetComponent {
  // exporterSevice = inject(ExporterService) ;
  constructor(private exporterSevice: ExporterService) {}
  onExport() {
    this.exporterSevice.export();
  }
}
