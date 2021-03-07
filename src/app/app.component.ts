import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kTunes';
  status;
  toggleMenuEvent(e) {
    this.status=e;
  }
  /*status: boolean = false;
  toggleMenu(e) {
    e.preventDefault();
    this.status = !this.status;
  }*/
  
  
}
