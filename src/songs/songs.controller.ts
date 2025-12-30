import { Controller, Get, Post, Put, Delete,} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs') //get//localhost:3000/songs/
export class SongsController {
    constructor(private songsServices: SongsService){}
    @Get()
    findAll(){
        return this.songsServices.findAll();
    }
    @Post()
    create(){
        return this.songsServices.create('Tu hya kaha');
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
