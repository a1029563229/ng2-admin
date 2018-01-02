import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../dynamic-form-components/dynamic-form-base/question-base';
import { QuestionControlService } from './question-control.service';
import "style-loader!./dynamic-fom-components.component.scss";

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService]
})

export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payload = '';

  constructor(
    private qcs: QuestionControlService
  ) { }

  ngOnInit() {
    console.log(this.questions);
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.form);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.value);
  }
}
