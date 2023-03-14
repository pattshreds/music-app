# Moodset - Playlist Creation

<h3> Welcome! </h3>
What started as a school project has turned into a long-term endeavor to create a playlist creation app without following any tutorial.

I started building this by organizing my folders, and getting a route setup to test the connections. After that I spent a lot of time working on the functionality and eventually styling. This app uses bcrypt, Cloudinary, dotenv, ejs, express, express-fileupload, express-session, method-override, and mongoose. The hosting is provided by Railway.

Link to the app is
<a href="https://moodset.up.railway.app/landing/landing">
here.
</a>

<hr>

<strong> Unsolved Problems </strong>
<ul>
  <li>Ability to upload multiple audio files into one playlist.</li>
</ul>
<br>
<strong> To-Do List </strong>
<ul>
  <s><li>Change host from Heroku to something new</s></li>
  <li>Add artist and song name to each audio file in the playlists.</li>
</ul>

<h3> Update Blog </h3>

<u> March 13th, 2023 </u>
Over this past weekend I decided to re-open Moodset to make some changes and refresh myself on the MVC format and using MongoDB. I realized that the deployment was broken as all that appeared in the browser was a Heroku error. I found the Heroku error pretty quickly in the logs and it was giving me an H14 error, which I found to mean there were no running dynos. I look into the issue and learn that Heroku has removed their free tier full-stack hosting. Today, Monday, I decided to use Railway for deployment and I have nothing but positive things to say! The UI is attractive, and deployment was incredibly easy. Thank you Railway for providing a free-tier full-stack web hosting service!
