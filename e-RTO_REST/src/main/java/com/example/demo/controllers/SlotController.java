package com.example.demo.controllers;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Application;
import com.example.demo.entities.Slot;
import com.example.demo.entities.SlotBook;
import com.example.demo.entities.TestSlot;
import com.example.demo.services.ApplicationService;
import com.example.demo.services.SlotService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SlotController
{
	@Autowired
	SlotService slotservice;
}
//
//	@Autowired
//	ApplicationService appservice;
//	
//	@Autowired
//	JavaMailSender sender;
//	
//	
//	@GetMapping("/getfreeslots")	
//	public List<Slot> getFreeSlot(@RequestParam String date) throws ParseException
//	{
//		try
//		{
//			//Date d=new SimpleDateFormat("yyyy-mm-dd").parse(date); 
//			//System.out.print(d);
//			return slotservice.getFreeSlots(date);
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//		}	
//		return null;
//		
//	}
//	
//	@PostMapping("/bookslot2")
//	public int bookSlot2(@RequestBody SlotBook t) throws ParseException
//	{
//		
//		int cid= t.getCid();
//		System.out.println(t.getDate());
//		System.out.println(t.getCid());
//		System.out.println(t.getSlot_id());
//		Application a= appservice.checkLearningCompleted(cid);
//		System.out.println(a);
//		int slotId= t.getSlot_id();
//		Date d=new SimpleDateFormat("yyyy-MM-dd").parse(t.getDate());
//		System.out.print(d);
//		TestSlot ts=  slotservice.bookSlot(a, slotId, d);
//		if(ts != null)
//		{
//				appservice.updateStatus(a.getApplication_id(), "completed");
//				DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
//				String mydateStr = df.format(ts.getTest_date());
//				SimpleMailMessage mail= new SimpleMailMessage();
//				mail.setFrom("erto.ms101@gmail.com");
//				mail.setTo(a.getCitizen().getUser().getEmail());
//				mail.setSubject("e-RTO appliaction");
//				mail.setText("Your Driving Test has been booked on "+mydateStr+" at "+ ts.getSlot().getStart_time());
//				sender.send(mail);
//				return 1;
//		}
//		return 0;
//	}
//}
