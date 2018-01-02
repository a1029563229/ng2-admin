import { Injectable } from "@angular/core";

import {
  QuestionBase,
  InputQuestion,
  SelectQuestion
} from "../../../../theme/components/dynamic-form-components/dynamic-form-base";

import { regExp } from './../../../api/universal/regExp';

@Injectable()
export class UserAddService {
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new InputQuestion({
        key: "firstName",
        label: "First name",
        value: "Bombasto",
        required: true,
        order: 1
      }),

      new InputQuestion({
        key: "emailAddress",
        label: "Email",
        type: "email",
        required: true,
        reg: regExp.email,
        prompt: "邮箱格式不正确",
        order: 2
      }),

      new SelectQuestion({
        key: "brave",
        label: "Bravery Rating",
        value: "",
        options: [
          { key: "请选择", value: "" },
          { key: "Solid", value: "solid" },
          { key: "Great", value: "great" },
          { key: "Good", value: "good" },
          { key: "Unproven", value: "unproven" }
        ],
        required: true,
        order: 3
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
