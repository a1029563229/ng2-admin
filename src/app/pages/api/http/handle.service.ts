import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';

@Injectable()

export class HandleService {
    constructor(
        private router: Router,
        private _location: Location
    ) {

    };

    // 处理系统错误
    handleError(err: any): Observable<any> {
        let errMsg = '发生未知错误，请重试';
        if (typeof err == 'object' && err.status !== undefined) {
            if (err.status == 404) {
                errMsg = '服务器处理异常，请重试';
            } else if (err.status == 401) {
                swal('当前页面无权限查看', '', 'warning');
                this._location.back();
                return Observable.empty();
            } else if (err.status == 504) {
                errMsg = '服务器请求超时，请重试';
            } else if (err.status == 503) {
                errMsg = '相关服务正在部署发布，请稍等';
            } else {
                errMsg = err.json().message;
            }
        }
        swal(errMsg, '', 'error');
        return Observable.empty();
    }

    // 处理returnCode
    handleStatus(result: any): Observable<any> {
        switch ((result.returnCode && String(result.returnCode)) || "201") {
            case '201':
              return Observable.of(result);
            case '1000':
                return Observable.of(result);
            case '1001':
                swal('当前页面无权限查看', '', 'warning');
                this._location.back();
                return Observable.empty();
            case '1002': // 数据为空
                return Observable.of(result);
            default:
                swal('无法识别的错误码，请联系管理员', '', 'error');
                return Observable.empty();
        }
    }
}
