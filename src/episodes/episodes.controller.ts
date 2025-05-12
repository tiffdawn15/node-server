import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDTO } from './dto/create-episode-dto.dto';
import { ConfigService } from 'src/config/config.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodeService: EpisodesService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit: number,
  ) {
    console.log(sort, limit);
    return this.episodeService.findAll(sort);
  }

  findFeatured(featured) {
    console.log(featured);
    return this.episodeService.findFeatured();
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    console.log(id);
    const episode = await this.episodeService.findOne(id);
    if (!episode) {
      throw new NotFoundException('Episode not found');
    }
    return episode;
  }

  @Post()
  create(@Body() input: CreateEpisodeDTO) {
    console.log(input);
    return this.episodeService.create(input);
  }
}
