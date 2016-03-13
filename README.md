# Coding and Cupcakes Website Curriculum

## Overview
To create the web sites, we use a couple basic things - HTML, CSS, and JavaScript. We’ll use a special editor in the browser that will save our work so we can work on our projects from home, the library, or school!

## Prep Work
1. Install Google Chrome - this is our preferred browser to work in.
2. If your daughter doesn’t have a gmail account, set her up with one. (It’s ok to say she’s 14 on their age restriction piece)
3. Create an account at typing.io
4. Choose jQuery to practice!

## Project Setup
1. Create an account on https://github.com/  
    * Be sure to write down your username and password on the account reminder sheet!
    * Check your email for the github verification email. 
2. Go to https://github.com/KansasCityWomeninTechnology/codingandcupcakes and hit the fork button in the top right
3. Go to https://c9.io/ and create an account by clicking the sign in button.
    * Link your github account by clicking the “sign in with github” button. 
5. In your Cloud 9 dashboard click the “repositories” link on the left. You should see the coding & cupcakes project you forked. Click “clone to edit”. 
6. Give your project a name - all lower case & no spaces, then click “Create workspace”. 
7. Click on the project folder in the top of the left nav once it’s done loading, and open the index.html file
8. Click preview in the top nav and select “Live Preview File(index.html)”, pop the preview pane into a new window.
9. Whenever you make changes to the index, css, or other files, be sure to save first to see your changes!


## Instructions
Start looking for code to change in your index.html file to customize it and make it your own. Make sure to not delete any closing tags or classes! Hint: cloud 9's colors will change when your code is broken!

### Site Basics

1. Change the Title of your site to "{your name}'s cupcake shop"
2. Change the h1 tag of the website to "{your name}'s cupcake shop"
3. Add your own text about your cupcake shop using h2, h3, and p tags.
4. Put in an image of your cupcakes on the page. (Look in the img/cupcakes folder. Don't see any you like? Try Here.)

### Creating a New Page

1. Create a new file called "contact.html"
2. Copy the markup from index.html into that file
3. Move the "selected" class to the contact link
4. Put contact information on your contact page. You can use the Code Koalas address:
    210 West 19 Terrace,
    Kansas City, MO 64108

### Making a form

1. Put a contact form on the contact page. It can go to your email address. [See an Example](http://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_mail) 

### Adding Cupcakes to your Shop

1. Open the shop.html file. Use the <li> tags to add more cupcake flavors to the one already there. Be sure to include a photo!

### Let's get stylish!

1. Create a new file called style.css
2. Change your background color. [See example.](http://www.w3schools.com/css/css_background.asp)
3. Change the background of the header and content as well. Want inspiration for a cool color palette? [See here.](https://color.adobe.com/explore/most-popular/?time=all)
4. Choose a font from Google Fonts and add it to your html page, then call it in your styles. [Google Fonts](https://www.google.com/fonts)

## Deploying Your Website

1. In your bash terminal type “git remote add codingandcupcakes [YOURPROJECTURLHERE]”
    * Mine would be “git remote add codingandcupcakes https://github.com/tehfedaykin/codingandcupcakes”
    * This will allow you to push your changes to your github
2. Git commands:
    * git add [filename] - adds file to the batch, kind of like adding ingredients to cupcake batter
    * git commit -m”message here” - commits files with message about what you changed
    * git push origin master - pushes files to your branch in github
    * git push origin master:gh-pages - creates a page where your repository is hosted. Mine is http://tehfedaykin.github.io/codingandcupcakes


## Homework

1. Create an account on http://www.codecademy.com/
2. Complete this course on Codecademy: http://www.codecademy.com/courses/web-beginner-en-zmn0b/0/1?content_from=make-an-interactive-website%3Ayour-first-program

