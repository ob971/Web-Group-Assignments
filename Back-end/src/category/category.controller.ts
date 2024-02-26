import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { RolesGuard } from 'src/userRole/roles.guard'; 
import { UseGuards } from '@nestjs/common';
import { UserRole } from 'src/userRole/role.enum';
import { Roles } from 'src/userRole/roles.decorator';

@UseGuards(RolesGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategories() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  getCategoryById(@Param('id') id: any) {
    return this.categoryService.findOne(id);
  }

  @Roles(UserRole.Parent)
  @Post()
  createCategory(@Body() category: Category) {
    return this.categoryService.create(category);
  }

  @Roles(UserRole.Parent)
  @Put(':id')
  updateCategory(@Param('id') id: any, @Body() category: Category) {
    return this.categoryService.update(id, category);
  }
  
  @Roles(UserRole.Parent)
  @Delete(':id')
  deleteCategory(@Param('id') id: any) {
    return this.categoryService.remove(id);
  }
}
