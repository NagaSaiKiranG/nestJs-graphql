import { Param } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { StarwarsService } from './starwars.service';

@Resolver()
export class StarwarsResolver {
    constructor(public readonly starwarService: StarwarsService) {}

  @Query('getAppointment')
  getAppointment(@Args('id') id: string) {
    return this.starwarService.getAppointment(id);
  }

  @Query('getAppointmentList')
  getAppointmentList() {
    const data = this.starwarService.getAppointmentList();
    // console.log(data);
    return data;
  }
}