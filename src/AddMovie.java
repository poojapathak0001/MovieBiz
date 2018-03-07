

import java.io.BufferedReader;
import java.io.File;
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

import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import jdk.nashorn.internal.runtime.ParserException;

/**
 * Servlet implementation class JsonRetrieve
 */
@WebServlet("/AddMovie")
public class AddMovie extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMovie() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		String id = request.getParameter("id");
		String movie = request.getParameter("moviename");
		String vote = request.getParameter("vote_average");
		String overview = request.getParameter("overview");
		String poster_path = request.getParameter("poster_path");
		
		JSONObject json = new JSONObject();
		JSONArray jsonArray = new JSONArray();
		JSONObject jsonData = new JSONObject();
		
		json.put("id", id);
		json.put("moviename", movie);
		json.put("vote_average", vote);
		json.put("overview", overview);
		json.put("poster_path", poster_path);
	
		String fileName = "./favoriteMovie.json";
		File file=new File(fileName); 
		FileReader fileReader = null;
		JSONParser parser = new JSONParser();
		try{
			if(file.exists() && file.length()!=0) {
			fileReader = new FileReader(fileName);
			jsonData = (JSONObject) parser.parse(fileReader);
			jsonArray = (JSONArray) jsonData.get("movie");}
			if(!jsonArray.contains(json) && jsonArray.size()<10) {
					jsonArray.add(json);
					jsonData.put("movie", jsonArray);
			
			try {  
	
	            // Writing to a file  
	            file.createNewFile();
	            if(file == null)file.createNewFile();  
	            FileWriter fileWriter = new FileWriter(file);  
	            System.out.println("Writing JSON object to file");  
	            System.out.println("-----------------------");    
	
	            fileWriter.write(jsonData.toString());  
	            fileWriter.flush();  
	            fileWriter.close();  
	
	        } catch (IOException e) {  
	            e.printStackTrace();  
	        } 
			
			try {
	            // FileReader reads text files in the default encoding.
				
				 fileReader = new FileReader(fileName);
	
	            // Always wrap FileReader in BufferedReader.
	            BufferedReader bufferedReader = 
	                new BufferedReader(fileReader);
	            String line;
	            while((line = bufferedReader.readLine()) != null) {
	                System.out.println("File:"+line);
	            }   
	
	            // Always close files.
	            bufferedReader.close();         
	        }
	        catch(FileNotFoundException ex) {
	            System.out.println(
	                "Unable to open file '" + 
	                fileName + "'");                
	        }
	        catch(IOException ex) {
	            System.out.println(
	                "Error reading file '" 
	                + fileName + "'");                  
	            
	        }
			finally {
				if(fileReader != null)
					fileReader.close();
			}

		}
	}catch (ParseException e1) {
		// TODO Auto-generated catch block
		e1.printStackTrace();
	}
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(jsonData);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
