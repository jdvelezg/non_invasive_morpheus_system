package de.morpheusbox.system.morpheusagent.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ConfigurationProperties(prefix = "de.morpheusbox.agent.cors")
public class CorsConfiguration {

    @Value("http://localhost:4200")
    private String allowedorigins;

    public CorsConfiguration() {
    }

    @Bean
    public WebMvcConfigurer corsConfigurer()
    {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins(allowedorigins.split(","));
            }
        };
    }

    public String getAllowedorigins() {
        return allowedorigins;
    }

    public void setAllowedorigins(String allowedorigins) {
        this.allowedorigins = allowedorigins;
    }
}
