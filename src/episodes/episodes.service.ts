/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { Episodes } from './entity/episode.entity';
import { CreateEpisodeDTO } from './dto/create-episode-dto.dto';

@Injectable()
export class EpisodesService {
  private episodes: Episodes[] = [];

  constructor(private episodesService: EpisodesService) {}

  // async because real memory demo
  async findAll(sort: 'asc' | 'desc' = 'desc') {
    const sortAsc = (a: Episodes, b: Episodes) => (a.name > b.name ? 1 : -1);
    const sortDesc = (a: Episodes, b: Episodes) => (a.name < b.name ? 1 : -1);

    return sort === 'asc'
      ? this.episodes.sort(sortAsc)
      : this.episodes.sort(sortDesc);
  }

  async findFeatured() {
    return this.episodes.filter((episode) => episode.featured);
  }

  async findOne(id: string) {
    return this.episodes.find((episode) => episode.id === id);
  }

  async create(createEpisodeDto: CreateEpisodeDTO) {
    const newEpisode = {
      id: Date.now().toString(),
      ...createEpisodeDto,
    };

    this.episodes.push(newEpisode);
    return newEpisode;
  }
}
