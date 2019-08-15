import { Component, OnInit } from '@angular/core';
import { UserService } from './shared-services/user.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})

export class AppComponent {

  constructor() {}

  ngOnInit() {
    };
}
