

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;


@WebServlet("/RemoveMovie")
public class RemoveMovie extends HttpServlet {
	private static final long serialVersionUID = 1L;
  
    public RemoveMovie() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		JSONObject movie = new JSONObject();
		
		//setting response type
		response.setContentType("application/json");
		int id = Integer.parseInt(request.getParameter("id"));
		PrintWriter out = response.getWriter(); 
		//shows the city added
		String fileName = "./fav.json";
		JSONParser parser = new JSONParser();
		try{
			json =(JSONObject) parser.parse(new FileReader(fileName));
			array = (JSONArray) json.get("movie");
			
			// if id exists, do not add and return error
			for(int i = 0; i < array.size() ; i++) {
				movie = (JSONObject) array.get(i);
				if(Integer.parseInt(String.valueOf(movie.get("id"))) == id) {
					array.remove(i);
					json.put("movie", array);
					FileWriter jsonFile=null;
					try {
						jsonFile =  new FileWriter("./fav.json");
						jsonFile.write(json.toString());
						}catch(Exception e){
							System.out.println("Please enter a valid path where you want to store your json");
						}finally {
							jsonFile.flush();
						}
					break;
				}
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
		response.setContentType("application/json");
		out.print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

