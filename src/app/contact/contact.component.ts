import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  formularioContacto: FormGroup;
  usuarioActivo: any = {
    nombre: 'Dean',
    apellido: 'Winchester',
    dni: '173456'
  }
  tipoDni: string = 'DNI';

  constructor(private _form: FormBuilder) {
    this.formularioContacto = this._form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      dni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    // this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo);
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni,
    });
    // this.formularioContacto.get('dni')?.disable();
    // this.formularioContacto.valueChanges.subscribe(valor => {
    //   console.log(valor)
    // });
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.tipoDni = value;
      // console.log(value);
    })
  }

  ngOnDestroy(): void {
    console.log("Se destruyo el componente")
  }

  enviar() {
    console.log(this.formularioContacto);
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    );
  }
}
