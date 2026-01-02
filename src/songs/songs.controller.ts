import { Controller, Get, Post, Put, Delete,Body} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dtos/create-song-dto';

@Controller('songs') //get//localhost:3000/songs/
export class SongsController {
    constructor(private songsServices: SongsService){}
    @Get()
    findAll(){
        return this.songsServices.findAll();
    }
    @Post()
    create(@Body() createSongDTO: CreateSongDTO){
        return this.songsServices.create(createSongDTO);
    }
    @Get(':id')
    findOne(){
        return 'return one songs';

    }
    @Put(':id')
    update(){
        return 'update songs';
    }
    @Delete(':id')
    delete(){
        return 'delete songs';
    }
}
