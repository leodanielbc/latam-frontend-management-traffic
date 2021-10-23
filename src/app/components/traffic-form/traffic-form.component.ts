import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../../services/car/car.service';
import { TrafficService } from '../../services/traffic/traffic.service';

@Component({
  selector: 'app-traffic-form',
  templateUrl: './traffic-form.component.html',
  styleUrls: ['./traffic-form.component.scss']
})
export class TrafficFormComponent {
  consultForm = this.fb.group({
    placa: [null, Validators.required],
    fecha: [null, Validators.required],
  });

  checkRegister;


  constructor(
    private fb: FormBuilder,
    private trafficService: TrafficService,
    private carService: CarService
  ) { }

  onSubmit(event: Event) {
    event.preventDefault();
    const dataForm = this.consultForm.value;

    this.checkPlaca()

    if (this.consultForm.valid) {
      this.trafficService.checkCirculacion(dataForm.placa, dataForm.fecha).subscribe((data: any) => {
        const respuesta = data.respuesta;
        alert(respuesta.mensaje);
      }, err => console.warn("Error: ", err));
    }
  }

  checkPlaca() {
    const dataForm = this.consultForm.value;
    if (dataForm.placa.length > 4) {
      this.carService.checkRegister(dataForm.placa).subscribe((data: any) => {
        const respuesta = data.respuesta;

        this.checkRegister = respuesta?.datos ? false : true;
      }, err => console.warn("Error: ", err));
    }
  }
}
