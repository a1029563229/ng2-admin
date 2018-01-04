import { Component, Input, OnInit } from '@angular/core';

import { TableConfig } from "./table-base";
import { TableBase } from "./dynamic-table-base/tableItem-base";
import { DynamicService } from "@api/http/dynamic.service";

@Component({
  selector: "dynamic-table",
  templateUrl: "./dynamic-table.component.html",
  styleUrls: ["./dynamic-table.component.scss"]
})
export class DynamicTableComponent implements OnInit{
  @Input() config: TableConfig;
  @Input() tableControls: TableBase[];
  public tableDatas: any[];

  constructor(private service: DynamicService) {}

  private getTableDatas(): void {
    this.service.getList(this.config.url, this.config.params)
      .subscribe((res: any[]) => {
        console.log(res);
        if (res.length > 0) {
          this.tableDatas = res;
        }
      })
  }

  ngOnInit(): void {
    this.getTableDatas();
  }
}
