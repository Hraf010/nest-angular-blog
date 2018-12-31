import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  filteredUses : any[];
  @Output() userClicked = new EventEmitter<User>();
  UserSelected : User;
  showUsers : boolean = true;
  showDetail : boolean = false;
  showForm : boolean = false;
  numberUsers : number = 100;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  newUser(){
    this.showUsers = false;
    this.showForm = true;
  }

  private getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }
  onDeleteD(user){
      const index =this.users.findIndex(e => e.id === user.id);
       this.users.splice(index,1);
       this.numberUsers--;
    // this.usersService.deleteUser(user.id); 
     this.showUsers = true;
  }
  onDelete(i){
    this.users.splice(i,1);
  }
  OnDetailClick(user){
    this.showUsers = false;
    this.showDetail = true;
    this.UserSelected = user;
    console.log(this.showDetail)
  }
  onRetourne(){
    this.showUsers = true;
  }
  onExit(){
    this.numberUsers++;
  }
  
}
