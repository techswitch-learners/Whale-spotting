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

To create/update your database, in `WhaleSpottingContext.cs`, comment out the following line:
```
optionsBuilder.UseNpgsql(Environment.GetEnvironmentVariable("DATABASE_URL"));
```

and instead, write
```
optionsBuilder.UseNpgsql("Server=localhost;port=5432;Database=WhaleSpottingDb;user id=username;password=secret;")
```
instead, where the argument is your correct connection string. 

Do a dotnet run to create/update the database. After this, you can delete the new line and uncomment the initial one! You will need to repeat these steps for all updates of the database.

To pull in all the data from the Whale Hotline API, send a blank POST request to https://localhost:5001/getapidata. You will need to do this in Postman until there is a frontend for this endpoint.

## Deployments

This app is hosted on heroku and can be found at: https://whale-spotting-stg.herokuapp.com/ for the staging environment and https://whale-spotting-prod.herokuapp.com/ for the production environment. The staging environment will automatically update with pushes to main, to promote staging to production please contact one of the admins of the repo.
