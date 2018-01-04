import { TableBase } from './tableItem-base';

export class TextTable extends TableBase {
    controlType = 'text';

    constructor(options: {} = {}) {
        super(options);
    }
}
