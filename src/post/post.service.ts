import { Injectable } from '@nestjs/common';
import { Posts } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(createPostDto: CreatePostDto): Promise<Posts> {
    const postItem = { ...createPostDto };
    const post = await this.prisma.post.create({
      data: {
        ...postItem,
      },
    });
    return post;
  }

  getPost(): Promise<Posts[]> {
    return this.prisma.post.findMany();
  }

  getPostById(authorId: number): Promise<Posts[]> {
    return this.prisma.post.findMany({
      where: {
        authorId,
      },
      include: {
        category: true,
      },
    });
  }

  getCategoryPost(categoryId: number): Promise<Posts[]> {
    return this.prisma.post.findMany({
      where: {
        categoryId,
      },
      include: {
        category: true,
      },
    });
  }

  async updatePost(id: number, createPostDto: CreatePostDto): Promise<Posts> {
    const updateItem = { ...createPostDto };
    const update = await this.prisma.post.update({
      where: {
        id,
      },
      data: {
        ...updateItem,
      },
    });
    return update;
  }

  deletePost(id: number): Promise<Posts> {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
