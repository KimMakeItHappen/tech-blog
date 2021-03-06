# tech-blog
# Table of Content

* My Task
* User Story
* Acceptance Criteria
* Mock-Up

# My Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!
Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

# User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

# Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

# My Mock Up
youtube video of the website: https://youtu.be/5SZlPo2xMxI
Deployed Project: https://ancient-taiga-11612.herokuapp.com/
Photos: ![Screen Shot 2021-10-04 at 7 00 04 PM](https://user-images.githubusercontent.com/80864786/135935965-c6ad27a8-6e54-445b-989e-a93c0330b518.png)
![Screen Shot 2021-10-04 at 6 22 44 PM](https://user-images.githubusercontent.com/80864786/135935977-6cc67719-2400-4660-9aaf-ad9f1f90599e.png)
![Screen Shot 2021-10-04 at 6 06 21 PM](https://user-images.githubusercontent.com/80864786/135935983-cac44772-2fdc-40cb-911e-79d5ed78db05.png)
![Screen Shot 2021-10-28 at 10 06 58 AM](https://user-images.githubusercontent.com/80864786/139272723-10e9f21e-b05d-4b78-a3d4-c979744f407d.png)![Screen Shot 2021-10-04 at 6 06 21 PM](https://user-images.githubusercontent.com/80864786/139272742-16dc8147-437e-4885-af62-727af024314c.png)
![Screen Shot 2021-10-04 at 6 22 44 PM](https://user-images.githubusercontent.com/80864786/139272745-681c2501-23ab-4bef-96a6-309d80a385b9.png)
![Screen Shot 2021-10-04 at 7 00 04 PM](https://user-images.githubusercontent.com/80864786/139272747-6e0e3450-029d-47b6-837b-8852731e9d48.png)

![Screen Shot 2021-10-28 at 10 07 11 AM](https://user-images.githubusercontent.com/80864786/139272727-1f55aea9-e1e9-4794-abe4-d111c8494bff.png)
![Screen Shot 2021-10-28 at 10 07 53 AM](https://user-images.githubusercontent.com/80864786/139272729-d1987a69-b1e3-4c29-b5a0-acbcbefebae1.png)


