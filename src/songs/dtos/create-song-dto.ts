import { IsArray, IsMilitaryTime, IsNotEmpty, IsString ,IsDateString} from "class-validator";

export class CreateSongDTO{
    @IsString()
    @IsNotEmpty()
    readonly title:String;
    
    @IsString({each: true})
    @IsNotEmpty()
    @IsArray()
    readonly artist:string[];

    @IsDateString()
    @IsNotEmpty()
    readonly releaseDate:Date;


    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration:Date;
}