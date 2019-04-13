<img align="right" width="200" height="200" src="https://github.com/KansasCityWomeninTechnology/codingandcupcakes/blob/master/img/logo.png" alt="Coding and Cupcakes Logo">

# Coding & Cupcakes Worksheet

## Overview

To create a web site, we use a couple basic things - HTML, CSS, and JavaScript. We’ll use a special editor in the browser that will save our work so we can work on our projects from home, the library, or school!

## Prep Work

1.  Parents: Please take our anonymous [survey](https://docs.google.com/forms/d/e/1FAIpQLSdKlS1CXl3lq1FuCNgFuoBucqZhq4f7Yr2V67PMp0IiuhfuBg/viewform).
2.  Install Google Chrome at [www.google.com/chrome](www.google.com/chrome) - this is our preferred browser to work in.
3.  If your daughter doesn’t have a Gmail account, set her up with one. (It’s ok to say she’s 14 on their age restriction piece)
    * Be sure to write down your username and password on the account reminder worksheet!
4.  Create a GitHub account on [https://github.com](https://github.com)
    * Be sure to write down your username and password on the account reminder worksheet!
    * Check your email for a GitHub verification email.
5.  Sign up for a CodeSandbox account on [https://codesandbox.io/](https://codesandbox.io/)
    * Choose "Sign in with GitHub" and use the GitHub account you just created.

## Project Setup

Log into Github.

1.  Go to https://github.com/kansascitywomenintechnology/codingandcupcakes and hit the **fork** button in the top right. This copies the codingandcupcakes code into a repository in your GitHub account.
2. In your own codingandcupcakes repository, go to Settings. Scroll down to the GitHub Pages section and set the GitHub Pages source to master branch (see screenshot).

<img src="https://github.com/KansasCityWomeninTechnology/codingandcupcakes/blob/master/img/gh-pages-setting.PNG" alt="GitHub Pages Settings screenshot">

Log into CodeSandbox.

1.  Click Create Sandbox.
2.  In Popular Templates, scroll down and choose "Import from GitHub".
3.  In the page that opens, click the “import wizard” link.
4.  Copy and paste the url of YOUR codingandcupcakes repository as the GitHub URL.
5. CodeSandbox should now show your **index.html** file. This is the code behind the main page of your website.
7. If you want to see the full-page view of your website, you can click the "Open in New Window" icon. This will open your website in a new tab (see screenshot).

<img src="https://github.com/KansasCityWomeninTechnology/codingandcupcakes/blob/master/img/view-in-new-window.png" alt="View in New Window screenshot">

Tip: As you make updates on your website, be sure to _save_ frequently in CodeSandbox (shortcut command is CTRL + s on Windows; Command + s on Mac).   

## Customizing your website

Start looking for code to change in your **index.html** file to customize and make it your own. All of the code is written within HTML tags contained in ```< >``` symbols. You’ll be changing code within the brackets. We will point out specifics tags for you to personalize with information about your cupcake shop. For example, ```<title>You’ll change code here.</title>``` Make sure to not delete any closing tags or classes! Hint: Codeanywhere's colors will change if your code is broken!

## Site Basics

1.  Change the **title** of your site to **{your name}'s cupcake shop**.
2.  Change the **h1** tag of the website to **{your name}'s cupcake shop**.
3.  Add your own text about your cupcake shop using **h2**, **h3**, and **p** tags. Get creative in telling your story!
4.  Put in an image of your cupcakes on the page. (Look in the **img/cupcakes** folder for some recommendations. Don't see any you like? Search cupcake images on Google or Flickr.)
    *  Hint: Images are stored between list tags (```<li>``` and ```</li>```) in the code. Find these tags and replace the content so that it points to your images.

## Creating a Contact Page

Now we'll add a new page to your website.

1.  In CodeSandbox, click the "New File" icon in the left-hand Explorer sidebar. Name the new file **contact.html**.
2.  Copy all the code from **index.html** into **contact.html**. This will ensure that your contacts page has the same structure and style as your index page.

Next, you'll modify the content of the contacts page. Let’s put the shop’s address so people know where to visit your store.

2.  Look in the body section of the code for the ```<div class=”content”>``` section (approx. line 27 of the code).
3.  In the content section of your contact page, add contact information between the ```<h2>``` and ```</h2>``` tags.
    *  Use paragraph tags to insert your contact information, and anything else you want to say. Note: It’s okay to erase the content between those tags.
    *  You can use the VMLY&R address:

        ```
        <h2>Visit us at:</h2>
        <p>VMLY&R</p>
        <p>250 Richards Rd</p>
        <p>Kansas City, MO 64116</p>
        ```
    * Note: By the end of our session, your website will be live and viewable by the whole world. For safety's sake, please don't use your own personal address.

Now let's modify the navigation, which lets us know where we are on the website. You can see how the navigation works by going to your website and clicking between the **Home** and **Shop** tabs in the header. Notice the gray shading and pink bar that highlight each tab as you click between them. We want to make the same thing happen when you click on the Contact page.

4.  Find the ```class="selected"``` code in **index.html**. Notice that it's on the line with ```href="index.html"```. If you open the shop.html file and find ```class="selected"```, you'll notice that it's on the line with ```href="shop.html"```. This is how the code controls which navigation tab is highlighted in pink.
5.  In the **contact.html** page, move ```class="selected"``` to the line with ```href="contact.html"```. This way, the **Contact** tab will be highlighted when we're on the Contact page.


## Making a form

Next we are going to add a form onto the Contact page, allowing people to email us with questions or comments. Again, the easiest way is to start with some existing code and then make our changes to it.  

1.  This link has an example you can customize: [http://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_mail](http://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_mail)
2.  Once you’ve customized the form in the link above, copy the tags and code of the **h2** and **form** sections.
3.  In the **contact.html** file in Codeanywhere, after the paragraph tags you added for the **Visit us at** section, paste the copied h2 and form code over the existing **p**, **h3** and ```<ul> </ul>``` tags.

## Adding Cupcakes to your Shop

1.  Open the **shop.html** file.
2.  Use the list item tags to add more cupcake flavors to the one already there.
3.  Be sure to include a photo! (Hint: Search Google or Flickr for cupcake images.)

## Let's get stylish!

1.  Create a new file called **style.css**
2.  Look in index.html to see how the the mystyle.css page is linked in code. (Hint: Look for the ```link rel=”stylesheet”``` line of code)
3.  Copy the stylesheet line of code, paste it just below its current location, and modify the pasted text to point to your newly created style.css file. You should now have two stylesheet lines, with the first one linking to mystyles.css and the second one linking to style.css.
    *  You are going to be customizing the css in the style.css file, which currently is only working on the index.html page. If you want this customization to apply to the other Shop and Contact pages of your website, you should insert the line of ```link rel=”stylesheet”``` code that points to your style.css file onto the Shop and Contact pages too.
4.  Open the **style.css** file in Codeanywhere.
5.  Change your background color. See example here: [http://www.w3schools.com/css/css_background.asp](http://www.w3schools.com/css/css_background.asp)
6.  Change the background of the header and content as well. Want inspiration for a cool color palette? See example here: [https://color.adobe.com/explore/most-popular/?time=all](https://color.adobe.com/explore/most-popular/?time=all)
7.  Choose a font from Google Fonts and add it to your html page, then call it in your styles. Check out the Google Fonts at fonts.google.com

## Deploying Your Website

1.  Make sure you have saved all your changes in CodeSandbox.
2.  Click the GitHub icon on the left sidebar (see screenshot).
3.  Click "Sign In" and authorize CodeSandbox to connect with your GitHub account.
4.  Click the GitHub icon again and fill in Subject in the Commit Info section. For example, "first commit".
5.  Click Commit. This pushes all of the changes you've made to your GitHub account and makes your website viewable to the world at **your-github-username.github.io/codingandcupcakes**

<img src="https://github.com/KansasCityWomeninTechnology/codingandcupcakes/blob/master/img/github-icon.png" alt="GitHub icon screenshot">

You can use CodeSandbox to make more changes to your website after you leave today. Just do another commit when you're ready for those changes to be live and viewable on your public website!

## Homework

Did you love working with code? If you want to learn more on your own, we have suggestions for you.

1.  Create an account on http://www.codecademy.com/
2.  Complete this course on Codecademy: http://www.codecademy.com/courses/web-beginner-en-zmn0b/0/1?content_from=make-an-interactive-website%3Ayour-first-program

---
Please take a moment to let us know how the workshop went by completing a short [survey](https://docs.google.com/forms/d/e/1FAIpQLSez_eKdTOfZsfv_IrxAFOaW20Hp5o7q05uosXrGMw_2OTepIQ/viewform)!
