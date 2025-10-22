import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

export class PaginationMeta {
  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalPages: number;
}

export function PaginatedResponseDto<T>(itemType: Type<T>): any {
  // Give each generated DTO a unique name based on the entity name
  const name = `${itemType.name}PaginatedResponse`;

  @ApiExtraModels(itemType)
  class PaginatedResponse {
    @ApiProperty({ type: [itemType] })
    data: T[];

    @ApiProperty({ type: () => PaginationMeta })
    meta: PaginationMeta;
  }

  // Rename the class at runtime for unique schema registration
  Object.defineProperty(PaginatedResponse, 'name', { value: name });

  return PaginatedResponse;
}
