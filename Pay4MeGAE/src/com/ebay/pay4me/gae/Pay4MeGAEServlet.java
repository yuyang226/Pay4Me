package com.ebay.pay4me.gae;
import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class Pay4MeGAEServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
	}
}
