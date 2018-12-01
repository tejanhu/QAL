import { Component } from '@angular/core';

@Component({
  selector: 'welcome-guest',
  templateUrl: './app.component.html'
})
export class AppComponent {
  guest ={
    firstName: "Jhonny",
    surname: "Bravo"
  }

  availableRooms= 5;


}
