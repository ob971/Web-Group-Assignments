import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  title: string;

  @IsNumber()
  amount: number;

  @IsDate()
  date: Date;

  @IsNumber()
  childId: number;

  @IsNumber()
  categoryId: number;
}

export class UpdateExpenseDto {
  @IsString()
  title: string;

  @IsNumber()
  amount: number;

  @IsDate()
  date: Date;

  @IsNumber()
  childId: number;

  @IsNumber()
  categoryId: number;
}
