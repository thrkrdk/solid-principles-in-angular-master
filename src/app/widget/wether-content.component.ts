import { Component } from "@angular/core";
import { Reloadable, WidgetContent } from "./widget-content";

@Component({
  selector: "app-wether-content",
  template: `
    <h5>Güncel</h5>
    <section class="wether-widget">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>
  `,
  styleUrls: ["./widget-content.scss"],
})
export class WetherContentComponent implements WidgetContent , Reloadable {
  id: string = "";
  loading: boolean = false;
  reload(): void {
    console.log("...Bekle...");
  }
}
