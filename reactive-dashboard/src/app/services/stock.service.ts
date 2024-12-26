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
  // private url: string = "http://localhost:8080/hello";
  loading: boolean = true;
  students: Stock[] = [];

  constructor(private http: HttpClient) { }

  getTopStocks(onSuccess: (data: Stock) => void) {
    const options: oboe.Options = {
      url: this.url,
      method: "GET",
    }

    const oboeClient = oboe(options);
    console.log("[+] Before Calling API")
    oboeClient
      .node('*', (element) => {
        // console.log("Element: "+element);
        // console.log("-----------------------------------------")
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

  getStudents() {
    console.log("[+] rxjs...");
    return this.http.get(this.url, { observe:'body', responseType:'text'}).pipe(map(response => {
      // Assuming response is a stream of JSON objects separated by newlines 
      console.log(response);
      return response;
     // return response.split('\n').map(line => line ? JSON.parse(line) : null).filter(line => line);
    }));
    
  }
}
