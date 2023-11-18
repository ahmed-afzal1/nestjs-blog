import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'The title of category',
    example: 'Transactions',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'The slug of category',
    example: 'transactions',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  slug: string;

  @ApiProperty({
    description: 'The status of category',
    example: 1,
  })
  @IsNotEmpty()
  @IsOptional()
  status: boolean;
}
