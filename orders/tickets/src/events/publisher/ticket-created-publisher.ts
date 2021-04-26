import { Publisher, Subjects, TicketCreatedEvent } from '@gkotickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    
}