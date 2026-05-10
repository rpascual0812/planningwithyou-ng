import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutRoutes } from './main-layout.routing';
import { EventsModule } from 'src/app/pages/events/events.module';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(MainLayoutRoutes),
        EventsModule
    ]
})
export class MainLayoutModule { }
