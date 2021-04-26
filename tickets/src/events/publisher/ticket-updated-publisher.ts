import { Publisher, Subjects, TicketUpdatedEvent } from '@gkotickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
    
}