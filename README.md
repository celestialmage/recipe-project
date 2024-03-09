# Recipe Project

This app contains a list of recipes and allows you to delete recipes or create new ones.

## App.js

This file returns the JSX for the page to display, as well as the components RecipeList.js and RecipeCreate. It also reads the data contained withing RecipeData.js and passes that data into the RecipeList and RecipeCreate components.

## RecipeList.js

This component takes in the list of recipes and formats them to properly display in a table. Select recipes can also be deleted from the table by using the "Delete" button found in the "Actions" column.

## RecipeCreate.js

This component monitors the input fields found at the bottom of the recipe table. It constantly updates corresponding values input into the fields, and when the submit button is clicked, those values are passed as a new object into the recipe array and displayed at the bottom of the current recipe table.

## RecipeData.js

This file holds the data for the recipes array, which is used throughout the app.
