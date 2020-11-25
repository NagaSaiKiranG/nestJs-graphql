import { Controller, Get, Param } from "@nestjs/common";
import { StarwarsService } from './starwars.service';
@Controller("starwars")
export class StarwarsController {
    constructor(public readonly starwarService: StarwarsService) {}
    @Get("people/:id")
    getPeople(@Param('id') id: string) {
        return this.starwarService.getData('people',id);
    }
    @Get("planets/:id")
    getPlanet(@Param('id') id: string) {
        return this.starwarService.getData('planets',id);
    }
}