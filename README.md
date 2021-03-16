# Pokemon Trainer

## Overview
Pokemon catalogue website application made using Angular.js and [Poke API](https://pokeapi.co/).

## Group members

<ul>
    <li> Alexander Rol </li>
    <li> Vytautas Zarauskas </li>
</ul>

## Description

This simple web application has been made as the last Front-end assignment of the Experis Academy course.  

When accessing the homepage of the application the user is required to enter a trainer name in order to save Pokemons from the catalogue. Once logged in, the user can browse through the catalogue and select Pokemons to add to his/her Pokedex. Pokedex is stored locally in the browser and can be reviewed by going to the Trainer page. We do NOT collect any user data.  

If the user tries to access restricted pages of the application without providing a name, it will automatically reroute the user to the Login page.

<br>

# Getting the app to run
### Step 1
Assuming Node package Module (npm) is installed, open your terminal and enter "npm install -g @angular/cli".

### Step 2
Clone the project and navigate to your local files containing the cloned project (project root).

### Step 3
Run the command "npm install".  
This ensures that all modules and packages from npm are installed before running the project for the first time.

### Step 4
We're now ready to run the program for the first time.  
To do so, enter "ng serve" into the terminal.  
Make sure you are still in you project root when executing this command as it expects the current directory to be at the base of the project.  
This will take a moment to load all the files. When it's done loading, go to your browser, enter "localhost:4200/" and press enter.