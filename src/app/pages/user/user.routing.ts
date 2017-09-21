import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { 
    UserListComponent,
    UserAddComponent
} from './user-list';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'list',
                component: UserListComponent
            },
            { 
                path: 'list/add',
                component: UserAddComponent
            }
        ]
    }
]

export const routing = RouterModule.forChild(routes);