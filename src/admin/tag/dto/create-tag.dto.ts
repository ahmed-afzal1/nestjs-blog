import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    description: 'The title of tag',
    example: 'storm',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The slug of tag',
    example: 'storm',
  })
  @IsNotEmpty()
  @IsString()
  slug: string;
}
