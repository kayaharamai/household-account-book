import { Contains, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Contains('@')
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 10)
  password: string;
}
