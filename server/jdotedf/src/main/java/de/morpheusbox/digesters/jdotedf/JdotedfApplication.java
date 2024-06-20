package de.morpheusbox.digesters.jdotedf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class JdotedfApplication {

    public static void main(String[] args) {
        SpringApplication.run(JdotedfApplication.class, args);
    }

}
