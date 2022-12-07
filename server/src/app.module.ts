import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'pavel',
            database: 'DB',
            models: [User],
            autoLoadModels: true
        }),
        UsersModule,
        AuthModule
    ]
})
export class AppModule {}