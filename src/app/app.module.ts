import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TokenInterceptor } from './services/token.interceptor';
import { ComponentsModule } from './components/components.module';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';

@NgModule({
    declarations: [
        AppComponent,

        AuthLayoutComponent,
        MainLayoutComponent,
        PublicLayoutComponent,
        ErrorLayoutComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        NgbModule,
        FontAwesomeModule,
        ComponentsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
