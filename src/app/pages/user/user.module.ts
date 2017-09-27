import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { 
    UserListComponent,
    UserAddComponent
} from './user-list';
import { routing } from './user.routing';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        UserAddComponent
    ]
})

export class UserModule {} 