import {Tab} from "../model/tab";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class TabService {
  url = './json/';
  constructor( private httpClientService: HttpClient) { }

  getAllUsers() {
    return this.httpClientService.get<Tab[]>(this.url + 'tabs.json');
  }
}
