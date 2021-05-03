import { Publisher, OrderCreatedEvent, Subjects } from '@gkotickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  
}