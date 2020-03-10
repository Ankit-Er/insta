package com.login;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	//these are handlers..
	
	@RequestMapping("/login")
	public String login() {
		return "login";
	}
	
	@RequestMapping("/registration")
	public String register() {
		return "registration";
	}
	
	@RequestMapping("/btnRegisterClick")
	public String registerButton(HttpServletRequest req, Model model) {
		
		 if(req.getParameter("user_name") != "" && req.getParameter("user_email") != "" 
				 && req.getParameter("user_password") != "")
		 {
			model.addAttribute("username", req.getParameter("user_name"));
			model.addAttribute("useremail", req.getParameter("user_email"));
			model.addAttribute("userpassword", req.getParameter("user_password"));
			//save the data inside mysql database...
			model.addAttribute("msg", "your registration successfully!!");
			return "login";
		 }
		 else {
			 return "registration";
		 }
		
	}
	
}

