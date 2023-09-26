import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar color="primary">
      <span>Hava Durumu Uygulaması</span>
    </mat-toolbar>

    <main class="content">
      <div class="widget">
        <div class="header">
          <h1>Hava Durumu</h1>
          <button mat-stroked-button (click)="onExport()">
            Dışa Aktar
          </button>
        </div>
        <mat-divider></mat-divider>
        <h5>Sıcaklık</h5>
        <section class="wether-widget">
          <mat-icon class="widget-icon">wb_sunny</mat-icon>
          <div class="value">+25</div>
        </section>
      </div>
    </main>
  `,
  styles: [
    `
      .content {
        background-color: #fff;
        padding: 2rem;
        height: calc(100vh - 64px);
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
      .widget {
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
export class AppComponent {
  onExport() {
    let data = JSON.stringify({ havaDurumu: { gunesliMi: true, sicaklik: "+25" } });
    let dataUri =
      "data: application/json; charset=utf-8," + encodeURIComponent(data);
    let exportFileName = "hava-durumu.json";
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileName);
    linkElement.click();
  }
}
