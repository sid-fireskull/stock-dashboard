import { Injectable } from '@angular/core';
import oboe from 'oboe';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Stock } from '../entity/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private url: string = "http://localhost:8080/get-stock-stream";

  constructor(private http: HttpClient) { }

  getTopStocks(onSuccess: (data: Stock) => void) {
    const options: oboe.Options = {
      url: this.url,
      method: "GET",
    }

    const oboeClient = oboe(options);
    oboeClient
      .node('*', (element) => {
        onSuccess(new Stock(element.id, 
                            element.alias, 
                            element.name, 
                            element.lastDayMarketPrice, 
                            element.currentMarketPrice, 
                            element.low52Week, 
                            element.high52Week));
    }).fail((error) => {
      console.log("[+] Error : ")
      console.log(error.thrown);
    })
  }

}
