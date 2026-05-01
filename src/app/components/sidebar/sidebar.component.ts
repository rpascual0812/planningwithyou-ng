import { Component } from '@angular/core';
import { faChartColumn, faCalendarDays, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    faChartColumn = faChartColumn;
    faCalendarDays = faCalendarDays;
    faUsers = faUsers;
    faGear = faGear;

}
