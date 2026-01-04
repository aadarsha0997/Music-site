import { Controller, Get, Post, Put, Delete,Body, HttpException, HttpStatus, Param, ParseIntPipe} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dtos/create-song-dto';

@Controller('songs') //get//localhost:3000/songs/
export class SongsController {
    constructor(private songsServices: SongsService){}
    @Get()
    findAll(){
        try{

            return this.songsServices.findAll();
        }
        catch(e){
            throw new HttpException("server error",HttpStatus.INTERNAL_SERVER_ERROR,{
                cause :e,
            })
        }
    }
    @Post()
    create(@Body() createSongDTO: CreateSongDTO){
        return this.songsServices.create(createSongDTO);
    }
    @Get(':id')
    findOne
    (
        /// just pasrintpipt work other are for proper error msg
        @Param('id',new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
        id:number
    )
        {

            return `return one songs by id : ${typeof id}`;
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
