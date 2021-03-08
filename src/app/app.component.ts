import { Component, QueryList, ViewChildren } from '@angular/core';
import { ScrollCards } from './utilities/scrollCards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kTunes';
  status;  views=[1,2,3]
  toggleMenuEvent(e) {
    this.status=e;
  }
  @ViewChildren('cmp') components:QueryList<ScrollCards>;

ngAfterViewInit(){
    // print array of CustomComponent objects
    console.log(this.components.toArray());
}
  
  
}
