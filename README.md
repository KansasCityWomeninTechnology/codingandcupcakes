# Coding and Cupcakes Website Curriculum

## Overview
To create the web sites, we use a couple basic things - HTML, CSS, and JavaScript. We’ll use a special editor in the browser that will save our work so we can work on our projects from home, the library, or school!

## Prep Work

While we wait for everyone to arrive, we have some fun activities for you to work on. Don't worry, we'll do the project part as a group!

1.  Parents: Please take our anonymous [survey] (https://docs.google.com/forms/d/e/1FAIpQLSdKlS1CXl3lq1FuCNgFuoBucqZhq4f7Yr2V67PMp0IiuhfuBg/viewform). 
2.  Install Google Chrome at [www.google.com/chrome] (www.google.com/chrome)- this is our preferred browser to work in.
3.  If your daughter doesn’t have a Gmail account, set her up with one. (It’s ok to say she’s 14 on their age restriction piece)
    * Be sure to write down your username and password on the account reminder worksheet!
4.  Create an account on [https://github.com/] (https://github.com/) 
    * Be sure to write down your username and password on the account reminder worksheet!
    * Check your email for the github verification email.
5.  Create a Cloud9 account on [https://c9.io/] (https://c9.io/) 
    * You will be prompted to enter a credit card. If you have concerns, please let us know. 
    * Look for the GitHub icon during setup to link your Cloud9 and GitHub accounts.

## Project Setup

1. Go to https://github.com/KansasCityWomeninTechnology/codingandcupcakes and hit the fork button in the top right 
2. In your Cloud 9 dashboard click the “repositories” link on the left. You should see the coding & cupcakes project you forked. Click “clone to edit”. 
3. Give your project a name - all lower case & no spaces, then click “Create workspace”. 
4. Click on the project folder in the top of the left nav once it’s done loading, and open the index.html file
5. Click preview in the top nav and select “Live Preview File(index.html)”, pop the preview pane into a new window.
6. Whenever you make changes to the index, css, or other files, be sure to save first to see your changes!

## Instructions to customize your website
Start looking for code to change in your index.html file to make it your own. All of the code is written within HTML tags contained in < > symbols. You’ll be changing code within the brackets. For example, <title>You’ll change code here.</title> Make sure to not delete any closing tags or classes! Hint: Cloud9's colors will change if your code is broken!

### Site Basics

1. Change the Title of your site to "{your name}'s cupcake shop"
2. Change the h1 tag of the website to "{your name}'s cupcake shop"
3. Add your own text about your cupcake shop using h2, h3, and p tags.
4. Put in an image of your cupcakes on the page. (Look in the img/cupcakes folder. Don't see any you like? [Try Here.] (https://www.flickr.com/search/?text=cupcakes&sort=relevance&license=1%2C2%2C3%2C4%2C5%2C6))

### Creating a New Page

1.  In Cloud9, create a new file called "contact.html" and then open it. 
2.  Copy the entire html markup from index.html into the new file.
3.  Next you’ll be modifying the navigation, which lets us know where we are on the website. 
    * You can see how the navigation operates by going to your website and clicking between the Home and Shop tab in the header. Notice the gray shading and pink bar that highlight each section as you click between them. We want to make the same thing happen when you click on the Contact page. 
    * You will do this by moving the class="selected" code to the line of code for the contact page.
4.  Now let’s put the shop’s address so people know where to visit your store. 
    * Look in the body section of the code for the <div class=”content”> section. 
5.  Put contact information on your contact page between the h1 and h3 tags in the content section. 
    * Use paragraph tags to insert your contact information, and anything else you want to say. Note: It’s okay to erase the content between those tags.
    * You can use the Code Koalas address:
        <p>Visit us at:</p>
        <p>Code Koalas</p>
        <p>1712 Main Street, #100</p>
        <p>Kansas City, MO 64108</p>

### Making a form

1.  Put a contact form on the Contact page. 
    * See an example you can customize [here](http://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_mail)
    * You can customize this form so that when people complete it, an email will be sent to your email address. 
2.  Once you’ve customized the form, copy the h2 and form code from the web form 
3.  Paste the code in the body section of the code after your paragraph tags containing the store’s address and above the h3 tag. Be sure not to erase the h3 tag! 

### Adding Cupcakes to your Shop

1. Open the shop.html file. Use the list item tags to add more cupcake flavors to the one already there. Be sure to include a photo!

### Let's get stylish!

1.  Create a new file called style.css
2.  Look in index.html to see how the mystyle.css page is linked in code. (Hint: Look for the link rel=”stylesheet” line of code)
3.  Add a line of code below the mystyle.css line of code. (Hint: copy the line of code, paste it below and modify it to point to your newly created style.css file.)
    * You are going to be customizing the css in the style.css file, which currently is only working on the index.html page. If you want this customization to apply to the other Shop and Contact pages of your website, you should insert the line of link rel=”stylesheet” code that points to your style.css file onto the Shop and Contact pages too. 
4.  Open the style.css file as a new tab in Cloud 9. 
5.  Change your background color. See example [here:] (http://www.w3schools.com/css/css_background.asp)
6.  Change the background of the header and content as well. Want inspiration for a cool color palette? See example [here:] (https://color.adobe.com/explore/most-popular/?time=all)
7.  Choose a font from Google Fonts and add it to your html page, then call it in your styles. Check out the Google Fonts at fonts.google.com
[Google Fonts](https://www.google.com/fonts)

## Deploying Your Website

1.  In your bash terminal (located at the bottom of the Cloud9 page), type the following Git commands: 
    * git status - shows what has changed
    * git add [filename] - adds file to the batch, kind of like adding ingredients to cupcake batter
    * git commit -m”message here” - commits files with message about what you changed
    * git push origin master - pushes files to your branch in github
    * git push origin master:gh-pages - creates a page where your repository is hosted. Mine is [http://tehfedaykin.github.io/codingandcupcakes] (http://tehfedaykin.github.io/codingandcupcakes)

## Homework

Did you love working with code? If you want to learn more on your own, we have suggestions for you. 
* Create an account on [http://www.codecademy.com/] (http://www.codecademy.com/)
* Complete this [course] (http://www.codecademy.com/courses/web-beginner-en-zmn0b/0/1?content_from=make-an-interactive-website%3Ayour-first-program)  on Codecademy.
