import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class HttpComponentUtil {
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  private url: string = "http://localhost:3000/";

  public getUrl(url: string): string {
    return this.url + url;
  }
}
