import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from '../posts/posts.service';
import { Posts } from './Posts';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {
  }

  @Get()
  getAll(): Posts[] {
    return this.postService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Posts {
    return this.postService.getById(id);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.postService.remove(id);
  }

  @Post()
  add(@Body() post: Posts): Posts {
    // console.log(post);
    return this.postService.save(post);
  }
}
