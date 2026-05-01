import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    declarations: [
        NavbarComponent,
        SidebarComponent,
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
    ],
    providers: [

    ]
})
export class ComponentsModule { }
