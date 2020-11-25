import { HttpModule, Module } from "@nestjs/common";
import { StarwarsController } from "./starwars.controller";
import { StarwarsService } from "./starwars.service";
import { StarwarsResolver } from  './starwars.resolver';

@Module({
    imports:[
        HttpModule
    ],
    controllers:[StarwarsController],
    providers:[StarwarsService, StarwarsResolver],
    exports: [StarwarsResolver]
})
export class StartwarsModule {}