<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- PAGE settings -->
<link rel="icon" href="https://templates.pingendo.com/assets/Pingendo_favicon.ico">
<!-- CSS dependencies -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
<link rel="stylesheet" href="neon.css" type="text/css">
<link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>
 <ul class="nav nav-tabs sticky-top">
            <li class="nav-item">
              <a href="#home" class="nav-link active"  id="home-tab">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#fav" id="fav-tab" data-toggle="modal" data-target="#exampleModal">Favorites</a>
              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </li>
  </ul>
  
  <div class="py-5 text-center section-fade-in-out" >
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-3 text-capitalize">MovieBiz</h1>
          <p class="lead text-muted">All your movies, one click away.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div id="marker1" class="container-fluid form-inline my-2 my-lg-0" >
    <input id="usertext" class="form-control ml-sm-5 mr-sm-2 col-sm-4" type="text" placeholder="Search">
    <button class="btn my-2 my-sm-0 btn-primary col-sm-1" onClick="getData()">Search</button>
    <script src="index.js" type="text/javascript"></script>
    <hr>
  </div>
  
  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Favorites</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="fav" class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</body>
</html>
