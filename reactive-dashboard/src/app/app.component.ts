import { Component, OnInit } from '@angular/core';
import { StockService } from './services/stock.service';
import { Stock } from './entity/stock';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'reactive-dashboard';
  stockService: StockService;
  stocks: Stock[] = [];
  stockMap = new Map<string, Stock>();
  loading: boolean = true;

  constructor(stockService: StockService) {
    this.stockService = stockService;
  }

  ngOnInit(): void {
    this.getTopShares();
  }

  getTopShares() {
    this.stockService.getTopStocks(data => {
      console.log(data.name);
      this.loading=false;
      this.stocks.push(data);
      this.updateStockMap(data);
    });
  }

  updateStockMap(stock: Stock)
  {
    this.stockMap.set(stock.alias, stock);
  }


}
