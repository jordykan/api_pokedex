/* eslint-disable prettier/prettier */
import { IsOptional, IsPositive, Min } from 'class-validator';
export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Min(1)
  limit?: number;
  @IsPositive()
  @IsOptional()
  offset?: number;
}
