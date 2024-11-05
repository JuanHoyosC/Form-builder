import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-input-field-text',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-text.component.html',
  styleUrl: './input-field-text.component.css'
})
export class InputFieldTextComponent extends FieldType<FieldTypeConfig> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    if(this.props.pattern) {
      this.formControl.addValidators([Validators.pattern(this.props.pattern)])
    }

    if(this.props.required) {
      this.formControl.addValidators([Validators.required]);
    }

    if(this.props.disabled) {
      this.formControl.disable();
    }

    if(this.props.minLength) {
      this.formControl.addValidators([Validators.minLength(this.props.minLength)]);
    }

    if(this.props.maxLength) {
      this.formControl.addValidators([Validators.minLength(this.props.maxLength)]);
    }
  }
}