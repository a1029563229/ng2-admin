export class TableBase {
  controlType: string; // 类型
  title: string; // 值，类型可选
  key: string; // 字段名
  order: number; // 排序
  constructor(
    options: {
      controlType?: string;
      title?: string;
      key?: string;
      order?: number;
    } = {}
  ) {
    // 设置各个值的默认值
    this.controlType = options.controlType || "";
    this.title = options.title || "";
    this.key = options.key || "";
    this.order = options.order || 0;
  }
}
