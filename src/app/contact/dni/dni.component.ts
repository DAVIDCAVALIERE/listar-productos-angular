import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  standalone: false,
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css',
})
export class DniComponent implements OnChanges {

  @Input() tipoDni: string = '';
  formularioDocumento: FormGroup;

  constructor(private _form: FormBuilder) {
    this.formularioDocumento = this._form.group({
      dni: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['tipoDni'].currentValue);
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formularioDocumento.get(controlName)?.hasError(errorType) &&
      this.formularioDocumento.get(controlName)?.touched
    );
  }
}
