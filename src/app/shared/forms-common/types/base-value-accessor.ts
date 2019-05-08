import { AbstractControl, ControlContainer, ControlValueAccessor } from '@angular/forms';
import { OnInit } from '@angular/core';

export class BaseValueAccessor<T> implements ControlValueAccessor, OnInit {
  // the container of the custom form control
  controlContainer: ControlContainer;
  // the name of the custom form control
  formControlName: string;
  // the custom form control
  control: AbstractControl;
  // hook called when control value is changed
  onChange: any;
  // hook called when control is touched
  onTouch: any;

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      this.control = this.controlContainer.control.get(this.formControlName);
    }
  }

  /**
   * Angular calls this method when control is instantiated or when value is changed
   */
  writeValue(value: T): void {
    this.control.setValue(value);
  }

  /**
   * Angular calls this method to register a form hook when the custom control is changed
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Angular calls this method to register a form hook when the custom control is touched
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  change(newValue: T): void {
    // call hook when value is changed
    this.onChange(newValue);
  }

  touch(): void {
    // call hook when element is touched
    this.onTouch();
  }
}
