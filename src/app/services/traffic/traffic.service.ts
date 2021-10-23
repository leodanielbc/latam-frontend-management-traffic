import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class TrafficService {

    constructor(
        private http: HttpClient,
    ) { }



    checkCirculacion(placa: string, fecha: string) {
        return this.http.get(`${environment.url_api}traffic?placa=${placa}&fecha=${fecha}`);
    }
}
