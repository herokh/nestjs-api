import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './albums.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album) private albumsRepository: Repository<Album>,
  ) {}

  async getAlbums(): Promise<Album[]> {
    return await this.albumsRepository.find();
  }

  async getAlbum(id: number): Promise<Album> {
    return await this.albumsRepository.findOneByOrFail({ id: id });
  }

  async createAlbum(album: Album) {
    await this.albumsRepository.insert(album);
  }

  async updateAlbum(id: number, album: Album) {
    await this.albumsRepository.update({ id: id }, album);
  }

  async deleteAlbum(id: number) {
    await this.albumsRepository.delete({ id: id });
  }
}
