import { Injectable } from "@angular/core";

import {
  TableBase,
  TextTable
} from "@components/dynamic-table/dynamic-table-base";

@Injectable()
export class UserListService {
  getTableControls() {
    let tableControls: TableBase[] = [
      new TextTable({
        key: "id",
        title: "ID",
        order: 0
      }),

      new TextTable({
        key: "firstName",
        title: "名称",
        order: 1
      }),

      new TextTable({
        key: "emailAddress",
        title: "Email",
        order: 2
      }),

      new TextTable({
        key: "brave",
        title: "Brave",
        order: 3
      })
    ];

    return tableControls.sort((a, b) => a.order - b.order);
  }
}
