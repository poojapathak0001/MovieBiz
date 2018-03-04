

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

/**
 * Servlet implementation class JsonRetrieve
 */
@WebServlet("/JsonRetrieve")
public class JsonRetrieve extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static JSONArray jsonArray = new JSONArray();
	static JSONObject jsonData = new JSONObject();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JsonRetrieve() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		System.out.println("hi");
		int id = Integer.parseInt(request.getParameter("id"));
		String movie = request.getParameter("moviename");
		String vote = request.getParameter("vote_average");
		String overview = request.getParameter("overview");
		
		JSONParser parse = new JSONParser();
		JSONObject json = new JSONObject();
		
		json.put("overview", overview);
		json.put("vote_average", vote);
		json.put("moviename", movie);
		json.put("id", id);
		
		jsonArray.add(json);
		jsonData.put("movie",jsonArray);
		
		try {  

            // Writing to a file  
            File file=new File("./fav.json");  
            file.createNewFile();  
            FileWriter fileWriter = new FileWriter(file);  
            System.out.println("Writing JSON object to file");  
            System.out.println("-----------------------");    

            fileWriter.write(jsonData.toString());  
            fileWriter.flush();  
            fileWriter.close();  

        } catch (IOException e) {  
            e.printStackTrace();  
        } 
		String fileName = "./fav.json";
		try {
            // FileReader reads text files in the default encoding.
			
			FileReader fileReader = 
                new FileReader(fileName);

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
            // Or we could just do this: 
            // ex.printStackTrace();
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

