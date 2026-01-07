import { Injectable } from '@nestjs/common';
import { error } from 'console';

@Injectable()
export class SongsService {
    private readonly  songs:string[]=['let her go ','normal regular guy'];

    create(song){
        this.songs.push(song);
        return this.songs;
    }
    findAll(){
        // throw new Error('Error in db')
        return this.songs;
    }
    
}
