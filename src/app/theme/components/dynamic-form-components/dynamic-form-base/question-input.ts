import { QuestionBase } from './question-base';

export class InputQuestion extends QuestionBase<string | number> {
    controlType = 'input';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}