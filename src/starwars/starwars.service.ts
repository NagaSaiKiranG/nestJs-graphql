import { HttpService, Injectable } from "@nestjs/common";
import { map } from 'rxjs/operators';
@Injectable()
export class StarwarsService {
    constructor(public httpService: HttpService) {}
    getData(type: string, id: string) {
        return this.httpService.get(`https://swapi.dev/api/${type}/${id}`).pipe(
            map(response => response.data)
        );
    }
    getAppointment(id: string) {
        return this.httpService.get(`http://hapi.fhir.org/baseR4/Appointment/${id}`).pipe(
            map(response => response.data)
        );
    }

    getAppointmentList() {
        return this.httpService.get('http://hapi.fhir.org/baseR4/Appointment').pipe(
            map(response => response.data)
        );
    }
}