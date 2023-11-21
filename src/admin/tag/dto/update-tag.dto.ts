import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTagDto {
  @ApiProperty({
    description: 'The title of tag',
    example: 'storm',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'The slug of tag',
    example: 'storm',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  slug: string;

  @IsNotEmpty()
  @IsOptional()
  status: boolean;
}
