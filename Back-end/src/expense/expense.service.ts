import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entity/expense.entity'; 
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  getAllExpenses() {
    return this.expenseRepository.find();
  }

  getExpenseById(id: any) {
    return this.expenseRepository.findOne(id);
  }

  createExpense(createExpenseDto: CreateExpenseDto) {
    const expense = this.expenseRepository.create(createExpenseDto);
    return this.expenseRepository.save(expense);
  }

  async updateExpense(id: any, updateExpenseDto: UpdateExpenseDto) {
    await this.expenseRepository.update(id, updateExpenseDto);
    return this.expenseRepository.findOne(id);
  }

  deleteExpense(id: any) {
    return this.expenseRepository.delete(id);
  }
}
