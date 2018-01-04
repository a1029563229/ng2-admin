import { HttpComponentUtil } from './http/http.service';
import { HandleService } from './http/handle.service';
import { DynamicService } from './http/dynamic.service';

export const API_SERVICE = [
  HttpComponentUtil,
  HandleService,
  DynamicService
];
