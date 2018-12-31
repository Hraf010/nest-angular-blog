import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as faker from 'faker';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  users: User[] = [];
  singleModel = 0;
  @Output() addExit = new EventEmitter<void>();
  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
  }
  onExit(){
   this.addExit.emit();

  }

  onSubmit() {
    this.userService.add(this.userForm.value).subscribe(value => {
      this.users.unshift(value);
      this.userService.setUsers(this.users);

      this.userForm.controls['firstName'].setValue('');
      this.userForm.controls['lastName'].setValue('');
      this.userForm.controls['email'].setValue('');
    }, error1 => {
    });
  }


}
