import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedId = '0';

  onChange(event: Event) {
    this.selectedId = (<HTMLSelectElement>event.target).value;
  }
}
