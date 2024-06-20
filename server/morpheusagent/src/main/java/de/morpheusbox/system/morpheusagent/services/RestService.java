package de.morpheusbox.system.morpheusagent.services;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.io.Serializable;

public class RestService<T> {

    private final RestTemplate restTemplate;

    private class Post implements Serializable {
        public int userId;
        public int id;
        public String title;
        public String body;
    };

    public RestService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public String getPostsPlainJSON(String url) {
        return this.restTemplate.getForObject(url, String.class);
    }

    public Post[] getPostsAsObject(String url) {
        //String url = "https://jsonplaceholder.typicode.com/posts/{id}";
        //this.restTemplate.getForObject(url, Post.class, 1);
        return this.restTemplate.getForObject(url, Post[].class);
    }

    public T responseHandling(ResponseEntity<T> response){
        if(response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            return null;
        }
    }

}
