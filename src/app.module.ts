import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SongsModule,AuthModule, UserModule, BookmarkModule, PrismaModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  //  consumer.apply(LoggerMiddleware).forRoutes('songs'); option 1 
  //  consumer.apply(LoggerMiddleware).forRoutes(SongsController);  option 2
   consumer.apply(LoggerMiddleware).forRoutes({path : 'songs', method: RequestMethod.POST});
  }
}
