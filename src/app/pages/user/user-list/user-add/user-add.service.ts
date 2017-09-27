import { Injectable } from '@angular/core';

import {
  QuestionBase,
  InputQuestion,
  SelectQuestion
} from '../../../../theme/components/dynamic-form/dynamic-form-base';

@Injectable()
export class UserAddService {
  getQuestions() {
    let questions: QuestionBase<any>[] = [

      new SelectQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        value: 'solid',
        options: [
          { key: 'Solid', value: 'solid' },
          { key: 'Great', value: 'great' },
          { key: 'Good', value: 'good' },
          { key: 'Unproven', value: 'unproven' }
        ],
        order: 3
      }),

      new InputQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new InputQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}