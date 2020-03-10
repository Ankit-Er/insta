package com.insta;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	//home page handler
	@RequestMapping("/home")
	public String home() {
		return "home";
	}
}
