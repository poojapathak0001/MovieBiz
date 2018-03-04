var data_arr = new Array();
var count=0;

	function getData(){
      
	  //declaring variable to make an AJAX call
	  var xmlHttp = new XMLHttpRequest();
      //getting entered movie name by user
	  var movie = document.getElementById("usertext").value; 
	  //URL of the movie search API
      var url = "https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query=" + movie;

      //checking the status of the AJAX call
      xmlHttp.onreadystatechange = function() {
    	  
    	  if(this.status == 404) {
    		  //ERROR message
    		  document.getElementById('titlemovie1').innerHTML = "404<br><h1>Movie Not Found</h1>";
    	  }
    	  
          if(this.readyState == 4 && this.status == 200){
              //storing the JSONObject returned as response
        	  var data= JSON.parse(this.responseText);
              
              var htmlText = '<div class="py-4">'
					         +'<div class="container">'
					  	     +'<div class="row">'
					  	     +'<div class="col-12">'
					  	     +'<h2>Search Results</h2>'
					  	     +'<hr>';
              //looping through the response data
              for ( var i = 0; i < data.results.length; i++ ) {
            	  //storing response for later use (to save and remove favorites)
            	  data_arr.push(data.results[i]);
            	  if (i%3 == 0) {
            		  htmlText	+= '<div class="row text-center">';
            	  }
            	  htmlText += '<div class="col-md-4 p-3">'
    	              + '<div class="bg-primary card">'
    	              + '<img class="img-fluid rounded-circle w-75 mx-auto mt-3" src="http://image.tmdb.org/t/p/w500' + data.results[i].poster_path + '" alt="movie">'
    	              + '<div class="card-body">'
    	              + '<h4 class="card-title" id="i">'+ data.results[i].title + '</h4>'
    	              + '<div class="card-text">'
    	              + '<p class="p-rate"> Rating: ' + data.results[i].vote_average + '</p>'
    	              + '<p class="p-created"> Released on: ' + data.results[i].release_date + '</p>'
    	              + '<p class="p-desc"> Description: ' + data.results[i].overview + '</p>'
    	              + '</div>'
    	              + '<div class="card-footer">'
    	              + '<input type="submit" id="addFavi'+i+'" class="btn btn-outline-dark m-2" value="Add to Favorite" onclick="addFav(this)" articleElement-obj="'+data.results[i].title+ '">'
    	              + '<div id=check></div><br><input type="button" id="removeFavi'+i+'" class="btn disabled btn-outline-dark m-2" value="Remove Favorite" onclick="removeFav(this)" articleElement-obj="'+data.results[i].title+'">'
    	              + '</div>'
    	              + '</div>'
    	              + '</div>'
    	              + '</div>';
    	          if(i%3 == 2) {
    	        	htmlText += '</div>';
                   	htmlText += '<hr>';
    	          }
              }
              htmlText += '</div></div></div></div>';
              
             //making new elements with movie info after 'titlemovie1' tag
             document.getElementById('marker1').insertAdjacentHTML('afterend',htmlText);     
          }
      };//end of onreadystatuschange function

      //making AJAX call
      xmlHttp.open("GET",url,true);
      xmlHttp.send();

    }//end of getData function
	
	
	//function to add favorite movies
	function addFav(input) {
		//getting the title of selected movie
		 var element= input.getAttribute('articleElement-obj');
		 
		 //looping through the stored data to check get all info of selected movie
		 for(var i=0;i<data_arr.length; i++) {
			 
			 if(data_arr[i].title == element)
			 { 
				 var ele =data_arr[i].title+"<br>"+data_arr[i].vote_average+"<br>"+data_arr[i].overview+"<br>"+data_arr[i].release_date;
				 var idname = "removeFavi" + i;
				 document.getElementById(idname).classList.remove("disabled");
				 idname = "addFavi" + i;
	    		 document.getElementById(idname).classList.add("disabled");
				 //checking if favList is filled upto 10 entries
				 if (count<10) { 
					 //declaring variable to make AJAX call
				     var xmlhttp = new XMLHttpRequest();
				     
				     //checking the response of AJAX call
				     xmlhttp.onreadystatechange = function() {
				    			    	 
				    	 //getting response of AJAX call and adding it to tag 'mydiv' in 'index.js'
				    	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				    		 
				    		 document.getElementById("mydiv").innerHTML = xmlhttp.responseText;
				    		 count++;
				    	 }
				    	 
				     };//end of onreadystatuschange function
				     //setting key-value pairs to be sent over AJAX call
				     var params = "id="+data_arr[i].id+"&moviename=" +data_arr[i].title+ "&vote_average=" +data_arr[i].vote_average+ "&overview=" +data_arr[i].overview;
				     var url ="http://localhost:8081/moviez/JsonRetrieve?" + params;
				     
				     //making the AJAX call
				     xmlhttp.open('GET', url, true);
				     xmlhttp.send();
				 }
			 }
		}//end of for loop
		    
	}//end of addFav function
	
	
	function removeFav(input) {
		 //getting the title of selected movie
		 var element= input.getAttribute('articleElement-obj');
		 //looping through the stored data to check get all info of selected movie
		 for(var i=0;i<data_arr.length; i++) {
		
			 if(data_arr[i].title == element)
			 { 		     
				 var idname = "addFavi" + i;
				 document.getElementById(idname).classList.remove("disabled");
				 idname = "removeFavi" + i;
	    		 document.getElementById(idname).classList.add("disabled");
				 //declaring variable to make AJAX call
			     var xmlhttp = new XMLHttpRequest();
			     alert(i);
			     xmlhttp.onreadystatechange = function(){
			      if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			       document.getElementById("mydiv").innerHTML = xmlhttp.responseText;
			      }
			     };
			     var params = "id=" +data_arr[i].id;
			     xmlhttp.open('GET',"http://localhost:8081/moviez/RemoveMovie?"+params,true);
			     xmlhttp.send();
			 
			 }
		   // document.getElementById("check").innerHTML=element;
		}
	}