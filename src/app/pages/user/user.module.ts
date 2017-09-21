import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { 
    UserListComponent,
    UserAddComponent
} from './user-list';
import { routing } from './user.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        UserAddComponent
    ]
})

export class UserModule {} 