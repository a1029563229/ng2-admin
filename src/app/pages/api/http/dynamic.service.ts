import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpHeaders } from "@angular/common/http";
import { HttpComponentUtil } from '../../../pages/api/http/http.service';
import { HandleService } from '../../../pages/api/http/handle.service';

@Injectable()
export class DynamicService {
  constructor(
    private http: HttpClient,
    private https: HttpComponentUtil,
    private handleService: HandleService
  ) {}

  public getList(url: string, params: {} = {}): Observable<any> {
    let api_url: string = this.https.getUrl(url);
    return this.http.get(api_url, params)
    .map((res: any) => (<any>this.handleService.handleStatus(res)).value || undefined)
    .catch(err => this.handleService.handleError(err));
  }

  /**
   *
   *
   * @param {string} url
   * @param {{}} [params={}] 请求入参的 body，参数
   * @returns {Observable<any>}  返回一个可供订阅的观察者对象
   * @memberof DynamicService
   *
   *
   */
  public saveQuery(url: string, params: {} = {}): Observable<any> {
    let api_url: string = this.https.getUrl(url); // 利用公用的 http 服务，拼接获取url
    return this.http.post(api_url, params, {
      headers: this.https.headers
    })
    .map((res: any) => (<any>this.handleService.handleStatus(res)).value || undefined) // 捕获错误码
    .catch(err => this.handleService.handleError(err)); // 捕获系统错误
  }
}
