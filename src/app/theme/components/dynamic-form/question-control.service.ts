import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './dynamic-form-base';

@Injectable()
export class QuestionControlService {
    constructor() { }

    // 转化为控件
    toFormGroup(questions: QuestionBase<any>[]) {
        let group: any = {};

        questions.forEach(question => {
            if (question.required) {    // 选项为必填时
                if (question.reg) {       // 有正则的情况
                    group[question.key] = new FormControl(question.value || '', Validators.compose([Validators.required, Validators.pattern(question.reg)]));
                } else {
                    group[question.key] = new FormControl(question.value || '', Validators.compose([Validators.required]));
                }
            } else if (!question.required && question.reg) {     // 选项为非必填但是需要正则匹配的情况
                group[question.key] = new FormControl(question.value || '', Validators.compose([Validators.pattern(question.reg)]));
            } else {
                group[question.key] = new FormControl(question.value || '');
            }
        });
        return new FormGroup(group);
    }
}