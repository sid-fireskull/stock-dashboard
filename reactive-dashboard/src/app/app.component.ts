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
  stockMap = new Map<string, Stock>();
  loading: boolean = true;

  constructor(stockService: StockService) {
    this.stockService = stockService;
  }

  ngOnInit(): void {
    this.getTopStocks();
  }

  getTopStocks() {
    this.stockService.getTopStocks(data => {
      this.updateStockMap(data);
    });
  }

  updateStockMap(stock: Stock)
  {
    this.stockMap.set(stock.alias, stock);
  }
}
