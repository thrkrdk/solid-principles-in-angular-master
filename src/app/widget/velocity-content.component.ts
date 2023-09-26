import { Component } from "@angular/core";

@Component({
  selector: "app-velocity-content",
  template: `
    <h5>Son Hız</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">assessment</mat-icon>
      <div class="value">Planlanan: <strong>25</strong></div>
      <div class="value">Ulaşılan: <strong>40</strong></div>
    </section>
  `,
    styleUrls: ['./widget-content.scss'],
})
export class VelocityContentComponent {}
