import { Component, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';

import { SelectQuestion } from "../../dynamic-form-base";

@Component({
  selector: "input-select",
  templateUrl: "./input-select.component.html",
  styleUrls: ["./input-select.component.scss"]
})
export class InputSelectComponent {
  @Input() question: SelectQuestion;
  @Input() form: FormGroup;

  constructor() {}
}
