import { Component, Input, ViewEncapsulation, Output, EventEmitter, Optional, Host, SkipSelf, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessor } from '../../types/base-value-accessor';

@Component({
  selector: 'app-form-input',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormInputComponent,
    multi: true,
  }]
})
export class FormInputComponent extends BaseValueAccessor<string|number> implements OnInit {
  @Input() formControlName: string;
  @Input() type: string = 'text';
  @Input() placeholder: string;
  @Input() autocompleteMode: string = 'off';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;

  @Output() changed = new EventEmitter<any>();

  constructor(
    @Optional() @Host() @SkipSelf() public controlContainer: ControlContainer
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    this.formatValue();
  }

  /**
   * Function triggered when the input value is changed
   */
  change() {
    this.formatValue();

    super.change(this.control.value);

    // emit the current value
    return this.changed.emit(this.control.value);
  }

  /**
   * Convert value to Number if input is of type number
   */
  private formatValue() {
    if (
      this.type === 'number' &&
      typeof this.control.value === 'string' &&
      this.control.value.length > 0
    ) {
      // convert string value to number
      this.control.setValue(
        Number(this.control.value)
      );
    }
  }
}
