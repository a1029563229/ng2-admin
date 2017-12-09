import { QuestionBase } from './question-base';

export class SelectQuestion extends QuestionBase<string | number> {
    controlType = 'select';
    options: any[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}