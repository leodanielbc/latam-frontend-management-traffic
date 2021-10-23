import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent {
  consultForm = this.fb.group({
    placa: [null, Validators.required],
    modelo: [null, Validators.required],
    color: [null, Validators.required],
    chasis: [null, Validators.required],
    dni: [null, Validators.required],
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
  });

  hasUnitNumber = false;


  constructor(
    private fb: FormBuilder,
    private carService: CarService
  ) { }

  onSubmit(event: Event) {
    event.preventDefault();
    const dataForm = this.consultForm.value;

    if (this.consultForm.valid) {
      const dataCar = {
        placa: dataForm.placa,
        modelo: dataForm.modelo,
        color: dataForm.color,
        chasis: dataForm.chasis,
        user: {
          dni: dataForm.dni,
          nombre: dataForm.nombre,
          apellido: dataForm.apellido,
        }
      }
      this.resetForm();
      this.carService.registerCar(dataCar).subscribe((data: any) => {
        const respuesta = data.respuesta;
        console.log(respuesta);
        alert(respuesta.mensaje)
      }, err => console.warn("Error: ", err));
    }
  }

  resetForm() {
    this.consultForm.reset();
    this.consultForm.controls.placa.setErrors(null);
    this.consultForm.controls.modelo.setErrors(null);
    this.consultForm.controls.color.setErrors(null);
    this.consultForm.controls.chasis.setErrors(null);
    this.consultForm.controls.dni.setErrors(null);
    this.consultForm.controls.nombre.setErrors(null);
    this.consultForm.controls.apellido.setErrors(null);
  }
}
