import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  pageHeader: string = "Parent text in home component being provided to example-thing component.";
}
