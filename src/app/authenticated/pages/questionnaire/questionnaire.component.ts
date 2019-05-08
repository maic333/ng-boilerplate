import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthDataService } from '../../../core/services/data/auth.data.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelperService } from '../../../core/services/helper/form-helper.service';
import { NotificationService } from '../../../shared/notification/services/notification.service';

@Component({
  selector: 'app-questionnaire',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  form: FormGroup;

  questionnaireMock = {
    firstName: null,
    lastName: null,
    age: null,

  };

  constructor(
    private authDataService: AuthDataService,
    private formBuilder: FormBuilder,
    private formHelper: FormHelperService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  addNewQuestion() {
    const newQuestion = this.formBuilder.group({
      title: [
        null
      ],
      category: [
        null
      ],
      index: [
        null
      ],
      required: [
        null
      ]
    });

    (this.form.get('questions') as FormArray).push(newQuestion);
  }

  save(form: FormGroup) {
    if (!this.formHelper.validateForm(form)) {
      return;
    }

    const dirtyFields: any = this.formHelper.getDirtyFields(form);

    this.notificationService.showSuccess({
      message: 'Changes saved!'
    });
  }

  private initForm() {
    this.form = this.formBuilder.group(
      {
        firstName: [
          null
        ],
        lastName: [
          null
        ],
        age: [
          null
        ],
        dateOfBirth: [
          null
        ],
        sex: [
          null
        ],
        drivingLicence: [
          null
        ],
        questions: this.formBuilder.array([])
      }
    );
  }
}
