import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedId = '0';

  onChange(element: HTMLSelectElement) {
    this.selectedId = element.value;
  }
}
