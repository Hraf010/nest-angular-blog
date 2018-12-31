import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './User';
import { Observable } from 'rxjs/internal/Observable';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Get()
  getAll(): User[] {
    return this.userService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id): User {
    return this.userService.getById(id);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.userService.remove(id);
  }

  @Post()
  add(@Body() user: User): User {
    // console.log(user);
    return this.userService.save(user);
  }
}
