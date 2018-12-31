import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user : User ;
  @Output() clickRetourne = new EventEmitter<void>();
  @Output() clickDelete = new EventEmitter<User>();
  constructor() { }
  Return(){
    this.clickRetourne.emit();
  }
  Delete(){
    this.clickDelete.emit(this.user);
  }
  ngOnInit() {
  }

}
