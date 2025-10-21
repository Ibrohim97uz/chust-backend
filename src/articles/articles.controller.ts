import { Controller } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Articles } from 'generated/prisma';

@Controller('articles')
export class ArticlesController extends createBaseController<Articles>({
  path: 'articles',
  tag: 'Articles',
  entity: CreateArticleDto,
  createDto: CreateArticleDto,
  updateDto: UpdateArticleDto,
}) {
  constructor(private readonly articlesService: ArticlesService) {
    super(articlesService);
  }
}
