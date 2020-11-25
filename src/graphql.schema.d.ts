
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum ApplicableLevel {
    final = "final",
    items = "items",
    types = "types"
}

export enum DiscountOn {
    types = "types",
    quantity = "quantity",
    finalPrice = "finalPrice",
    category = "category",
    loyalty = "loyalty",
    items = "items"
}

export enum DiscountType {
    addOn = "addOn",
    singleton = "singleton"
}

export class Message {
    id: number;
    description: string;
}

export abstract class IQuery {
    abstract messages(): Message[] | Promise<Message[]>;
    abstract getAppointment(id?: string): Appointment | Promise<Appointment>;
    abstract getAppointmentList(): Appointments | Promise<Appointments>;
    abstract getProductList(): Items | Promise<Items>;
    abstract getDiscountList(): Discount[] | Promise<Discount[]>;
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

export class Item {
    id?: number;
    type?: string;
    name?: string;
    price?: number;
    taxCategory?: string;
}

export class Items {
    data?: Item[];
    total?: number;
    date?: string;
}

export class Discount {
    discountId?: number;
    discountAmount?: number;
    expiryDate?: string;
    applicableLevel?: ApplicableLevel;
    discountType?: DiscountType;
    description?: string;
    discountOn?: DiscountOn;
    criteria?: Criteria[];
}

export class CriteriaValueInt {
    discountOn?: DiscountOn;
    value?: number;
}

export class CriteriaValueString {
    discountOn?: DiscountOn;
    value?: string;
}

export type Criteria = CriteriaValueInt | CriteriaValueString;
