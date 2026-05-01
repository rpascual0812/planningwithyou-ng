import { HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DateTime } from 'luxon';
//
// ===== File globals.ts
//
'use strict';

export const PRODUCTION: boolean = environment.production;
export const BASE_URL: string = `${environment.api}`;
export const SEP = '/';
export const VERSION: string = "1.0";
export let PAGINATION: any = {
    skip: 0,
    take: 10
}

export function numbersOnly(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
}

export const YEARS = () => {
    const years = [];
    let dateStart = DateTime.now();
    const dateEnd = DateTime.now().minus({ years: 100 });

    while (dateStart >= dateEnd) {
        years.push(dateStart.toFormat('YYYY'));
        dateStart = dateStart.minus({ years: 1 });
    }
    return years;
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const DAYS = (year: any, month: any) => {
    const days = [];
    month = month ? month : '01';
    year = year ? year : DateTime.now().toFormat('YYYY');
    console.log(year, month);
    let dateStart = DateTime.fromISO(year + '-' + month);
    const dateEnd = DateTime.fromISO(year + '-' + month).plus({ days: dateStart.daysInMonth });
    while (dateEnd.diff(dateStart, 'days').days > 0) {
        days.push(("0" + dateStart.toFormat('D')).slice(-2));
        dateStart = dateStart.plus({ days: 1 });
    }
    return days;
}

export let schedule: any = {};

export let routes: any = [
    { path: '/dashboard', title: 'SIDEBAR.DASHBOARD', icon: 'fa fa-home text-info', class: '' },
    { path: '/scholars', title: 'SIDEBAR.SCHOLARS', icon: 'fa fa-users text-info', class: '' },
    { path: '/settings', title: 'Settings', icon: 'ni ni-ui-04  text-info', class: '' },
];

export let admin_routes: any = [
    { path: '/employees', title: 'Employees', icon: 'ni ni-spaceship', class: '' },
    { path: '/timelogs', title: 'SIDEBAR.TIMELOGS', icon: 'ni ni-palette', class: '' },
    { path: '/settings', title: 'Settings', icon: 'ni ni-ui-04', class: '' }
];

export let languages: any = [
    { name: 'English (US)', code: 'en_us', icon: 'en_us.svg' },
    { name: 'English (UK)', code: 'en_gb', icon: 'en_gb.svg' },
    { name: 'Español', code: 'es', icon: 'es.svg' },
    { name: '日本語', code: 'jp', icon: 'jp.svg' },
    { name: '한국어', code: 'kr', icon: 'kr.svg' }
];

export function objectToParams(object: any): string {
    let params: any;
    for (var i in object) {
        params = new HttpParams().set(i, object[i]);
    }
    return params;
}

export function timeArray(duration: any): typeof Array {
    let time_arr: any = [];
    let time = DateTime.fromISO('1970-01-01T00:00:00');
    let end_time = DateTime.fromISO('1970-01-01T23:30:00');

    time_arr.push({
        value: DateTime.fromISO('1970-01-01T00:00:00').toFormat('HH:mm')
    });

    while (time < end_time) {
        time = time.plus({ minutes: duration });
        time_arr.push({
            value: time.toFormat('HH:mm')
        });
    }

    return time_arr;
}

export function stringify(json: Object): string {
    return JSON.stringify(json);
}
