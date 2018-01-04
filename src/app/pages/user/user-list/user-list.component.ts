import { Component } from '@angular/core';

import { UserListService } from './user-list.service';
import { TableBase } from '@components/dynamic-table/dynamic-table-base';
import { TableConfig } from '@components/dynamic-table/table-base';

@Component({
    selector: 'ngt-user-list',
    templateUrl: './user-list.component.html',
    providers: [ UserListService ]
})

export class UserListComponent {
  public userTableControls: TableBase[];
  public userTableConfig: TableConfig = {
    url: "user"
  };

  constructor(private service: UserListService) {
    this.userTableControls = this.service.getTableControls();
  }
}
