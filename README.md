# Whale-spotting

# Setup
Run the command `SET ASPNETCORE_Environment=Development` in your terminal.

# Running the app
To run the app run `dotnet run` in the root of the repository.
To run the UI tests navigate ClientApp directory and run `npm test`.

If you get an error along the lines of `'rimraf' is not recognized`, navigate to the `ClientApp` folder and run an `npm install`.

# Preparing the database
Create a `.env` file in the root directory, containing
```
DATABASE_URL=Server=localhost;port=5432;Database=WhaleSpottingDb;user id=username;password=secret;
```
where the user id and password are your own PSQL credentials (note: the default username is postgres, if you're not sure!). Make sure you add this `.env` file to the `.gitignore`!

To create your own database, run `dotnet ef database update`. This will initialize an empty database.

This app is hosted on heroku and can be found at: https://whale-spotting-stg.herokuapp.com/ for the staging environment and https://whale-spotting-prod.herokuapp.com/ for the production environment.
