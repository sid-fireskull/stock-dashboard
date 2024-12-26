package com.reactive.programming.ReactiveSpringboot.controller;


import java.time.Duration;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactive.programming.ReactiveSpringboot.CommonHelper;
import com.reactive.programming.ReactiveSpringboot.entity.Stock;

import reactor.core.publisher.Flux;

@CrossOrigin("http://localhost:4200")
@RestController
public class RealTimeController {
	
	@GetMapping(value="/get-stock-stream",produces = MediaType.APPLICATION_NDJSON_VALUE)
	public Flux<List<Stock>> getStock()
	{
		return Flux.interval(Duration.ofMillis(1500)).map(tick -> CommonHelper.generateStockData(tick)).take(60).log();
	}
}
