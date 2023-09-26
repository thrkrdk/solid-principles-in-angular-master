import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar color="primary">
      <span>Hava Durumu Uygulaması</span>
    </mat-toolbar>

    <main class="content">
      <app-widget widget="wether"></app-widget>
      <app-widget widget="velocity"></app-widget>
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
      
    `,
  ],
})
export class AppComponent {

}
