export interface TableConfig {
  url: string;
  params?: TableParams;
}

// 请求接口的一些参数
interface TableParams {
  pageSize?: number;
  pageNumber?: number;
}
