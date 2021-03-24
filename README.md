# Whale-spotting

# Setup
Run the command `SET ASPNETCORE_Environment=Development` in your terminal.

# Running the app
To run the app run `dotnet run` in the root of the repository.
To run the UI tests navigate ClientApp directory and run `npm test`.

If you get an error along the lines of `'rimraf' is not recognized`, navigate to the `ClientApp` folder and run an `npm install`.

# Preparing the database
To create your own database, run `dotnet ef database update`. This will initialize an empty database.

This app is hosted on heroku and can be found at: https://whale-spotting-stg.herokuapp.com/ for the staging environment and https://whale-spotting-prod.herokuapp.com/ for the production environment.
