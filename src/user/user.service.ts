import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
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

  deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async updateUser(id: number, createUserDto: UpdateUserDto): Promise<User> {
    const updateEmail = createUserDto.email;
    const hashed = await bcrypt.hash(createUserDto.password, 12);
    const update = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: updateEmail,
        password: hashed,
      },
    });
    return update;
  }
}
