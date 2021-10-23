import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(
        private http: HttpClient,
    ) { }



    checkRegister(placa: string) {
        return this.http.get(`${environment.url_api}cars?placa=${placa}`);
    }

    registerCar(data: Object) {
        return this.http.post(`${environment.url_api}cars`, data);
    }
}
