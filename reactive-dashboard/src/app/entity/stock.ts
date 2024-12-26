export class Stock { 
    id: number; 
    alias: string; 
    name: string; 
    lastDayMarketPrice: number; 
    currentMarketPrice: number; 
    low52Week: number; 
    high52Week: number; 
    
    
    constructor(id: number, alias: string, name: string, lastDayMarketPrice: number, 
        currentMarketPrice: number, low52Week: number, high52Week: number) 
    { 
        this.id = id; 
        this.alias = alias; 
        this.name = name; 
        this.lastDayMarketPrice = lastDayMarketPrice; 
        this.currentMarketPrice = currentMarketPrice; 
        this.low52Week = low52Week; 
        this.high52Week = high52Week; 
    } 
}