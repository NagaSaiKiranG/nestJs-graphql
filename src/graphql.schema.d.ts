
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Message {
    id: number;
    description: string;
}

export abstract class IQuery {
    abstract messages(): Message[] | Promise<Message[]>;
    abstract getAppointment(id?: string): Appointment | Promise<Appointment>;
    abstract getAppointmentList(): Appointments | Promise<Appointments>;
}

export abstract class IMutation {
    abstract createMessage(description: string): Message | Promise<Message>;
}

export class Appointment {
    id?: string;
    resourceType: string;
    status: string;
    description?: string;
    start?: string;
    end?: string;
    minutesDuration?: number;
    participant?: AppointmentParticipant[];
}

export class AppointmentParticipant {
    actor?: AppointmentParticipantActor;
    status?: string;
}

export class AppointmentParticipantActor {
    display?: string;
    reference?: string;
}

export class Appointments {
    id?: string;
    resourceType: string;
    type?: string;
    entry?: AppointmentResource[];
}

export class AppointmentResource {
    fullUrl?: string;
    resource?: Appointment;
}
