import { Component, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';

import { InputQuestion } from "../../dynamic-form-base/question-input";

@Component({
  selector: "input-textbox",
  templateUrl: "./input-textbox.component.html",
  styleUrls: ["./input-textbox.component.scss"]
})
export class InputTextboxComponent {
  @Input() question: InputQuestion;
  @Input() form: FormGroup;

  constructor() {}
}
