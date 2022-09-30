import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Album } from './albums.entity';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private albumsService: AlbumsService) {}

  @Get(':id')
  get(@Param('id') id: number) {
    return this.albumsService.getAlbum(id);
  }

  @Post()
  create(@Body() album: Album) {
    return this.albumsService.createAlbum(album);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() album: Album) {
    return this.albumsService.updateAlbum(id, album);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.albumsService.deleteAlbum(id);
  }
}
