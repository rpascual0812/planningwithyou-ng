import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent {
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin]
    };
}
