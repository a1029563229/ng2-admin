import { Component, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';

import { InputQuestion } from "../../dynamic-form-base/question-input";
import { QuestionControlService } from './../../../dynamic-form/question-control.service';

@Component({
  selector: "input-textbox",
  templateUrl: "./input-textbox.component.html",
  styleUrls: ["./input-textbox.component.scss"]
})
export class InputTextboxComponent {
  @Input() question: InputQuestion;
  @Input() form: FormGroup;

  constructor(private qcs: QuestionControlService) {
    qcs.getControlProperty.call(this, null);
  }
}
