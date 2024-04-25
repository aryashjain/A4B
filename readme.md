STEPS-:
npm i -: to install the node_modules and dependencies
npm start to start the server
note -: You will require a .env file with parameters
- PORT , MONGODB_URI , CORS_ORIGIN

  Routes
- `GET: api/v1/Health` : To ensure that server is running
  
- `POST: /api/v1/city/addCity`: To add a new City to the DB
- `PATCH: /api/v1/city/updateCity`: to update a city
- `DELETE: /api/v1/city/deleteCity`: to delet a city
  
- `GET: /api/v1/search/cities`: to get an array of all the stored cities
- `GET: api/v1/search/city`: to get a city based on `name`, `state`, `pincode`,`district`, sent in req.query;

There is also a front end view for searching the city  link :[ https://a4-b-front-h75iz4mr2-aryashjains-projects.vercel.app/](https://a4-b-front-end.vercel.app/)
Backend Hosted Link: https://a4b-1.onrender.com/health
