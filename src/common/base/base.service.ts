import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

@Injectable()
export abstract class BaseService<T> {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly modelName: string,
  ) {}

  protected get model() {
    return this.prisma[this.modelName];
  }

  async create(data: any): Promise<T> {
    return this.model.create({ data });
  }

  async findAll(params?: PaginationParams): Promise<PaginatedResult<T>> {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.model.findMany({
        skip,
        take: limit,
      }),
      this.model.count(),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string | number): Promise<T> {
    const item = await this.model.findUnique({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException(`${this.modelName} with ID ${id} not found`);
    }

    return item;
  }

  async update(id: string | number, data: any): Promise<T> {
    await this.findOne(id);

    return this.model.update({
      where: { id },
      data,
    });
  }

  async remove(id: string | number): Promise<T> {
    await this.findOne(id);

    return this.model.delete({
      where: { id },
    });
  }

  async exists(id: string | number): Promise<boolean> {
    const count = await this.model.count({
      where: { id },
    });
    return count > 0;
  }
}
