import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
