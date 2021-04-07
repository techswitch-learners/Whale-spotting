# Whale-spotting

## Running the app
To run the app run `dotnet run` in the root of the repository.
To run the UI tests navigate ClientApp directory and run `npm test`.

If you get an error along the lines of `'rimraf' is not recognized`, navigate to the `ClientApp` folder and run an `npm install`.

## Preparing the database
Create a `.env` file in the root directory, containing
```
DATABASE_URL=Server=localhost;port=5432;Database=WhaleSpottingDb;user id=username;password=secret;
```
where the user id and password are your own PSQL credentials (note: the default username is postgres, if you're not sure!). 

Running a `dotnet run` will create the database (if it does not already exist) and apply all existing migrations.

If you need to create a new migration to create a new column, for example, (i.e. run a `dotnet ef migrations add [migration name]`), you will need to comment out the following line in the `WhaleSpottingContext.cs` file and in `Startup.cs`:
```
optionsBuilder.UseNpgsql(Environment.GetEnvironmentVariable("DATABASE_URL"));
```

and instead, write
```
optionsBuilder.UseNpgsql("Server=localhost;port=5432;Database=WhaleSpottingDb;user id=username;password=secret;")
```

where the argument is your correct connection string. Now, do your `dotnet ef migrations add [migration name]`. After this, you can delete the new line and uncomment the initial one, and proceed to run the app with `dotnet run`. You will need to repeat these steps for whenever you want to create new migrations.

To pull in all the data from the Whale Hotline API, send a blank POST request to https://localhost:5001/getapidata. You will need to do this in Postman until there is a frontend for this endpoint.

## Deployments

This app is hosted on heroku and can be found at: https://whale-spotting-stg.herokuapp.com/ for the staging environment and https://whale-spotting-prod.herokuapp.com/ for the production environment. The staging environment will automatically update with pushes to main, to promote staging to production please contact one of the admins of the repo.

## Weather widget

From https://home.openweathermap.org/users/sign_up you can get your personnal open-weather API key. Go for the 5 Day / 3 Hour Forecast.

add following file in the ClientApp directory: `.env.local`
with following contents:
REACT_APP_OPEN_WEATHER_API_KEY= your actual open weather key without any brackets or quotes
