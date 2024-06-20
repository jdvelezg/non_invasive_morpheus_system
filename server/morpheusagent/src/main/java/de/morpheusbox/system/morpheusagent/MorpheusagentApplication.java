package de.morpheusbox.system.morpheusagent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class MorpheusagentApplication {

    public static void main(String[] args) {
        SpringApplication.run(MorpheusagentApplication.class, args);
    }

}
