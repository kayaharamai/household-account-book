import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //email,password
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const useItem: any = { ...createUserDto };
    const user = await this.prisma.user.create({
      data: {
        ...useItem,
      },
    });
    return user;
  }

  getUser(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  }

  getUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        posts: true,
      },
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async updateUser(id: number, createUserDto: CreateUserDto): Promise<User> {
    const updateItem = { ...createUserDto };
    const update = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateItem,
      },
    });
    return update;
  }
}
