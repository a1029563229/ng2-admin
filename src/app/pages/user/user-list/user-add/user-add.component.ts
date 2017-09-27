import { Component } from '@angular/core';

import { UserAddService } from './user-add.service';
import { QuestionBase } from '../../../../theme/components/dynamic-form/dynamic-form-base/question-base';

@Component({
  selector: 'ngt-user-add',
  templateUrl: './user-add.component.html',
  providers: [UserAddService]
})

export class UserAddComponent {
  public UserAddQuestions: QuestionBase<any>[] = [];
  
  constructor(
    private service: UserAddService
  ) {
    this.UserAddQuestions = this.service.getQuestions();
  }
}