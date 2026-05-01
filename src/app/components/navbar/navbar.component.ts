import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faBars, faUser, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    faBars = faBars;
    faUser = faUser;
    faBell = faBell;
    faMessage = faMessage;

    @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {

    }

    logout() {
        this.authenticationService.logout();
    }
}
