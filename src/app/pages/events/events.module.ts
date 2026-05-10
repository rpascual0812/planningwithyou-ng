import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
    declarations: [
        EventsComponent
    ],
    imports: [
        CommonModule,
        FullCalendarModule
    ],
})
export class EventsModule { }
