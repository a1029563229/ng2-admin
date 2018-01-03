import { Component } from '@angular/core';

import { UserAddService } from './user-add.service';
import { QuestionBase } from '../../../../theme/components/dynamic-form-components/dynamic-form-base';
import { FormConfig } from '../../../../theme/components/dynamic-form/form-base';

@Component({
  selector: 'ngt-user-add',
  templateUrl: './user-add.component.html',
  providers: [UserAddService]
})

export class UserAddComponent {
  public UserAddConfig: FormConfig = {
    url: "user"
  }
  public UserAddQuestions: QuestionBase<any>[] = [];

  constructor(
    private service: UserAddService
  ) {
    this.UserAddQuestions = this.service.getQuestions();
  }
}
