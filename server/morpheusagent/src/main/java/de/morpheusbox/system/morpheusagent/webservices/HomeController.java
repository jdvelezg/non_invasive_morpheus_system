package de.morpheusbox.system.morpheusagent.webservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(path = "/")
public class HomeController {

    @GetMapping(path="")
    public ModelAndView toUserHome(){
        return new ModelAndView("/morpheusbox_admin/index.html");
    }
}
