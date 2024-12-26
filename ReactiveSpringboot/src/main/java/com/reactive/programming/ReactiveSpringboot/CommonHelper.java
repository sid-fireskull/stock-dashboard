package com.reactive.programming.ReactiveSpringboot;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

import com.reactive.programming.ReactiveSpringboot.entity.Stock;

public class CommonHelper {
	private static Random rand = new Random();

	public static List<Stock> generateStockData(long interval) {
		List<Stock> stocks = Arrays.asList(new Stock(1, "AAPL", "Apple Inc.", 175.50, 0, 125.00, 182.00),
				new Stock(2, "GOOGL", "Alphabet Inc.", 2850.00, 0, 2300.75, 2900.00),
				new Stock(3, "AMZN", "Amazon.com Inc.", 3350.00, 0, 2900.00, 3550.50),
				new Stock(4, "MSFT", "Microsoft Corporation", 298.50, 0, 250.00, 310.00),
				new Stock(5, "TSLA", "Tesla Inc.", 725.75, 0, 550.00, 780.00),
				new Stock(6, "NFLX", "Netflix Inc.", 550.00, 0, 450.00, 575.00),
				new Stock(7, "FB", "Meta Platforms Inc.", 330.50, 0, 250.75, 350.00),
				new Stock(8, "NVDA", "NVIDIA Corporation", 220.00, 0, 150.00, 230.00),
				new Stock(9, "INTC", "Intel Corporation", 52.75, 0, 45.00, 55.00),
				new Stock(10, "AMD", "Advanced Micro Devices Inc.", 145.00, 0, 110.00, 155.00),
				new Stock(11, "ORCL", "Oracle Corporation", 87.50, 0, 70.00, 90.00),
				new Stock(12, "IBM", "International Business Machines Corporation", 140.00, 0, 125.00, 145.00),
				new Stock(13, "CSCO", "Cisco Systems Inc.", 55.75, 0, 50.00, 57.00),
				new Stock(14, "ADBE", "Adobe Inc.", 560.50, 0, 450.00, 575.00),
				new Stock(15, "CRM", "Salesforce.com Inc.", 245.00, 0, 200.00, 255.00));

		stocks.stream()
				.forEach(e -> e.setCurrentMarketPrice(getRandomPrice(e.getLastDayMarketPrice())));

		return stocks;
	}

	public static double getRandomPrice(double price) {

		double limit = rand.nextDouble(-5, 5);
		// System.out.println("[+] Limit: " + limit);
		double currentPrice = price + (price * (limit / 100));
		return currentPrice;
	}

}