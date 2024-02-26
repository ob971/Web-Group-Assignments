import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto'; 

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  getAllExpenses() {
    return this.expenseService.getAllExpenses();
  }

  @Get(':id')
  getExpenseById(@Param('id') id: any) {
    return this.expenseService.getExpenseById(id);
  }

  @Post()
  createExpense(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expenseService.createExpense(createExpenseDto);
  }

  @Put(':id')
  updateExpense(
    @Param('id') id: any,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ) {
    return this.expenseService.updateExpense(id, updateExpenseDto);
  }

  @Delete(':id')
  deleteExpense(@Param('id') id: any) {
    return this.expenseService.deleteExpense(id);
  }
}
