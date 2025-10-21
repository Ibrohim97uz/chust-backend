import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Type,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';

export function createBaseController<T>({
  path,
  tag,
  entity,
  createDto,
  updateDto,
}: {
  path: string;
  tag: string;
  entity: Type<any>;
  createDto?: Type<any>;
  updateDto?: Type<any>;
}) {
  @ApiTags(tag)
  @Controller(path)
  abstract class GeneratedController extends BaseController<T> {
    constructor(service: BaseService<T>) {
      super(service);
    }

    @ApiOperation({ summary: `Create ${tag}` })
    @ApiBody({ type: createDto })
    @ApiResponse({ status: 201, type: entity })
    @Post()
    override create(@Body() dto: any) {
      return super.create(dto);
    }

    @ApiOperation({ summary: `Get all ${tag}` })
    @ApiResponse({ status: 200, type: entity, isArray: true })
    @Get()
    override findAll(@Query() query) {
      return super.findAll(query);
    }

    @ApiOperation({ summary: `Get ${tag} by ID` })
    @ApiResponse({ status: 200, type: entity })
    @Get(':id')
    override findOne(@Param('id', ParseIntPipe) id: number) {
      return super.findOne(id);
    }

    @ApiOperation({ summary: `Update ${tag} by ID` })
    @ApiBody({ type: updateDto })
    @ApiResponse({ status: 200, type: entity })
    @Patch()
    override update(@Param('id', ParseIntPipe) id: number, @Body() dto: any) {
      return super.update(id, dto);
    }
  }

  return GeneratedController;
}
