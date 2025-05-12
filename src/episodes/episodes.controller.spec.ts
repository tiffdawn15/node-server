import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesController } from './episodes.controller';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesService } from './episodes.service';

describe('EpisodesController', () => {
  let controller: EpisodesController;
  const mockFindOne = jest.fn();

  const mockEpisodeService = {
    findAll: jest.fn(),
    findOne: mockFindOne,
    create: jest.fn(),
    findFeatured: jest.fn(),
  };

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [EpisodesController],
      providers: [
        { provide: EpisodesService, useValue: { mockEpisodeService } },
      ],
    }).compile();

    controller = module.get<EpisodesController>(EpisodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    describe('when findOne is called', () => {
      const episodeId = 'id';
      const mockResult = { id: episodeId, name: 'my epsiode' };
      beforeEach(() => {
        mockFindOne.mockResolvedValue(mockResult);
      });
      it('should call findOne with correct params', async () => {
        await controller.findOne(episodeId);
        expect(mockFindOne).toHaveBeenCalledWith(episodeId);
      });

      it('should return correct response', async () => {
        const result = await controller.findOne(episodeId);
        expect(result).toEqual({ id: 'id' });
      });
    });

    describe('when epsidoe is not found', () => {
      const episodeId = 'id';
      beforeEach(() => {
        mockFindOne.mockResolvedValue(null);
      });
      it('should throw an error', async () => {
        await expect(controller.findOne(episodeId)).rejects.toThrowError(
          'Episode not found',
        );
      });
    });
  });
});
