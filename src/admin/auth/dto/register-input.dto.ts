import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class RegisterInputDto {
  @ApiProperty({
    description: 'The name of user',
    example: 'jhon doe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The username of user',
    example: 'jhon_doe',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'The email of user',
    example: 'jhon@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'The password of user',
    example: 'jhon12@',
  })
  @IsNotEmpty()
  @IsString()
  @Length(6, 100)
  password: string;
}
