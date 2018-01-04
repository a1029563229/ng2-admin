import { Component, Input, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { FormGroup } from "@angular/forms";

import { QuestionBase } from "../dynamic-form-components/dynamic-form-base/question-base";
import { QuestionControlService } from "./question-control.service";
import { DynamicService } from "../../../pages/api/http/dynamic.service";
import "style-loader!./dynamic-fom-components.component.scss";
import { FormConfig } from './form-base';
import swal from "sweetalert2";

@Component({
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() config: FormConfig;
  form: FormGroup;
  payload = "";

  constructor(
    private qcs: QuestionControlService,
    private service: DynamicService,
    private _location: Location
  ) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.value);
    this.service.saveQuery(this.config.url, this.payload)
      .subscribe((res: Response) => {
        console.log(res);
        swal("success","","success").then(() => {
          this._location.back();
        });
      })
  }
}
