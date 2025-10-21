import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { BaseService, PaginationParams } from './base.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export abstract class BaseController<T> {
  constructor(public readonly service: BaseService<T>) {}

  @Post()
  @ApiOperation({ summary: 'Create a new entity' })
  @ApiResponse({ status: 201, description: 'Entity created successfully.' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all entities (paginated)' })
  @ApiResponse({ status: 200, description: 'List of entities.' })
  findAll(@Query() query: PaginationParams) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get entity by ID' })
  @ApiResponse({ status: 200, description: 'Entity found.' })
  @ApiResponse({ status: 404, description: 'Entity not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update entity by ID' })
  @ApiResponse({ status: 200, description: 'Entity updated successfully.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete entity by ID' })
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
