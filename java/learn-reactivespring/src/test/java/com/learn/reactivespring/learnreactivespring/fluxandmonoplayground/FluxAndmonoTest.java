package com.learn.reactivespring.learnreactivespring.fluxandmonoplayground;


import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

public class FluxAndmonoTest {

    @Test
    public void fluxTest() {
        Flux<String> stringFlux = Flux.just("Spring", "Springboot", "Reactive Spring")
//                .concatWith(Flux.error(new RuntimeException("Errors Happen")))
                .concatWith(Flux.just("After Error"))
                .log();
        stringFlux
                .map((data) -> data.concat(" Flux"))
                .subscribe(System.out::println,
                        (e) -> System.err.println(e));
    }

    @Test
    public void fluxTestElement_WithoutError() {
        Flux<String> stringFlux = Flux.just("Spring", "Springboot", "Reactive Spring")
                .log();
        StepVerifier.create(stringFlux)
                .expectNext("Spring")
                .expectNext("Springboot")
                .expectNext("Reactive Spring")
        .verifyComplete();
    }

    @Test
    public void fluxTestElement_WithError() {
        Flux<String> stringFlux = Flux.just("Spring", "Springboot", "Reactive Spring")
                .concatWith(Flux.error(new RuntimeException("Errors Happen")))
                .log();
        StepVerifier.create(stringFlux)
                .expectNext("Spring")
                .expectNext("Springboot")
                .expectNext("Reactive Spring")
                .verifyError(RuntimeException.class);
    }

    @Test
    public void fluxTestElementCount_WithError() {
        Flux<String> stringFlux = Flux.just("Spring", "Springboot", "Reactive Spring")
                .concatWith(Flux.error(new RuntimeException("Errors Happen")))
                .log();
        StepVerifier.create(stringFlux)
                .expectNextCount(3)
                .verifyError(RuntimeException.class);
    }

    @Test
    public void fluxTestElement_WithError1() {
        Flux<String> stringFlux = Flux.just("Spring", "Springboot", "Reactive Spring")
                .concatWith(Flux.error(new RuntimeException("Errors Happen")))
                .log();
        StepVerifier.create(stringFlux)
                .expectNext("Spring", "Springboot", "Reactive Spring")
                .verifyError(RuntimeException.class);
    }

    @Test
    public void monoTest() {
        Mono<String> stringMono = Mono.just("Spring").log();
        StepVerifier.create(stringMono)
                .expectNext("Spring")
                .verifyComplete();
    }

    @Test
    public void monoTest_Error() {
        StepVerifier.create(Mono.error(new RuntimeException("Mono Exception")).log())
                .expectError(RuntimeException.class)
                .verify();
    }
}
