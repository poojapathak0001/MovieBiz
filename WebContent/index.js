
	function getData(){
      var xmlHttp = new XMLHttpRequest();
      var movie= document.getElementById("moviename").value;

      //Movie search api from tmdb
      var url = "https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query=" + movie;

      xmlHttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
              var myArr= JSON.parse(this.responseText);
              var dataObj= myArr;
             
              //searched result item 1 
              document.getElementById('titlemovie1').innerHTML = "Title = " +
             				dataObj.results[0].title ;
             document.getElementById('movie1').innerHTML = "<br> Ratings =" + dataObj.results[0].vote_average + 
             				"<br> Release Date =" + dataObj.results[0].release_date + "<br> Overviews =" + 
             				dataObj.results[0].overview ;
             //searched result item 2
             document.getElementById('titlemovie2').innerHTML = "Title = " + 
             				dataObj.results[1].title ;
             document.getElementById('movie2').innerHTML = "<br> Ratings =" + dataObj.results[1].vote_average + 
             				"<br> Release Date =" + dataObj.results[1].release_date + "<br> Overviews =" + 
             				dataObj.results[1].overview;
             //searched result item 3
             document.getElementById('titlemovie3').innerHTML = "Title = " +
							dataObj.results[2].title;
             document.getElementById('movie3').innerHTML = "<br> Ratings =" + dataObj.results[2].vote_average + 
							"<br> Release Date =" + dataObj.results[2].release_date + "<br> Overviews =" + 
							dataObj.results[2].overview ;
			//searched result item 4
			document.getElementById('titlemovie4').innerHTML = "Title = " + 
							dataObj.results[3].title;
			document.getElementById('movie4').innerHTML = "<br> Ratings =" + dataObj.results[3].vote_average + 
							"<br> Release Date =" + dataObj.results[3].release_date + "<br> Overviews =" + 
							dataObj.results[3].overview;
			//searched result item 5
			document.getElementById('titlemovie5').innerHTML = "Title = " + 
							dataObj.results[4].title;
			document.getElementById('movie5').innerHTML = "<br> Ratings =" + dataObj.results[4].vote_average + 
							"<br> Release Date =" + dataObj.results[4].release_date + "<br> Overviews =" + 
							dataObj.results[4].overview;
				
	}   
      };

      xmlHttp.open("GET",url,true);
      xmlHttp.send();

    }

