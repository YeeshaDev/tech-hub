export const emailTemplates = {
  ticketPurchase: (data: {
    eventTitle: string;
    ticketCount: number;
    userName: string;
    totalPrice: number;
    eventDate: string;
    location: string;
  }) => ({
    subject: `Ticket Confirmation - ${data.eventTitle}`,
    html: `
      <h1>Thank you for your purchase, ${data.userName}!</h1>
      <p>Your tickets for ${data.eventTitle} have been confirmed.</p>
      <div style="margin: 20px 0; padding: 20px; background: #f9f9f9; border-radius: 5px;">
        <h2>Order Details</h2>
        <ul style="list-style: none; padding: 0;">
          <li>Event: ${data.eventTitle}</li>
          <li>Tickets: ${data.ticketCount}</li>
          <li>Total: $${data.totalPrice}</li>
          <li>Date: ${data.eventDate}</li>
          <li>Location: ${data.location}</li>
        </ul>
      </div>
      <p>We've attached your tickets to this email. You can also access them from your dashboard.</p>
    `,
  }),
  eventReminder: (data: {
    eventTitle: string;
    userName: string;
    eventDate: string;
    location: string;
  }) => ({
    subject: `Reminder: ${data.eventTitle} is Tomorrow!`,
    html: `
      <h1>Event Reminder</h1>
      <p>Hi ${data.userName},</p>
      <p>This is a reminder that ${data.eventTitle} is happening tomorrow!</p>
      <div style="margin: 20px 0; padding: 20px; background: #f9f9f9; border-radius: 5px;">
        <h2>Event Details</h2>
        <ul style="list-style: none; padding: 0;">
          <li>Date: ${data.eventDate}</li>
          <li>Location: ${data.location}</li>
        </ul>
      </div>
      <p>Don't forget to bring your ticket!</p>
    `,
  }),
};