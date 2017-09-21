import { Component } from '@angular/core';

import 'style-loader!./user.component.scss';

@Component({
    selector: 'ngt-user',
    template: `<router-outlet></router-outlet>`
})

export class UserComponent {
    constructor() {}
};