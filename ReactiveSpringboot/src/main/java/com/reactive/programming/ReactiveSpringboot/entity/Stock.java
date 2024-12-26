package com.reactive.programming.ReactiveSpringboot.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class Stock {
	private int id;
	private String alias;
	private String name;
	private double lastDayMarketPrice;
	private double currentMarketPrice;
	private double low52Week;
	private double high52Week;

}
