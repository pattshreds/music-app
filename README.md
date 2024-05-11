<img
  src="./public/images/landing.gif"
  alt="moodset-gif"
/>

<h3> Welcome! </h3>
What started as a school project has turned into a long-term endeavor to create a playlist-builder app without following any tutorials.

<br><br>

I started building this by organizing my folders in an MVC structure, and getting a route setup to test the server. After that I spent a lot of time working on the functionality and eventually styling. This app uses MongoDB, Express, EJS, Node, Cloudinary, Express-Sessions, Bcrypt, and Materialize CSS along with a few other packages The hosting was provided by Railway, but am now exploring different options. This app will be deployed very soon!

<br><br>

Link to the app is:
Coming Soon!

<!-- <a href="https://moodset.up.railway.app/landing/landing">
here.
</a> -->

<hr>

<strong> To-Do List </strong>

<ul>
  <s><li>Change host from Heroku to something new.</s></li>
  <li><s>Add artist and song name to each audio file in the playlists.</s></li>
  <li><s>Build a custom audio player to replace the default HTML audio player.</s></li>
  <li>Build the ability to add more than one song to each playlist via the new audio player.</li>
  <li>Build a next and pravious track button in the new player.</li>
  <li>Improve playhead scrubbing visually.</li>
  <li>Render the artist and song title inside the player for each audio file.</li>
</ul>

<hr>

<h3> Update Blog </h3>

<u> March 13th, 2023 </u>

Over this past weekend I decided to re-open Moodset to make some changes and refresh myself on the MVC format and using MongoDB. I realized that the deployment was broken as all that appeared in the browser was a Heroku error. I found the error pretty quickly in the logs and it was showing an H14 error, which I found to mean there were no running dynos. I look into the issue and learn that Heroku has removed their free tier full-stack hosting. Today, Monday, I decided on Railway for deployment and I have nothing but positive things to say! The UI is attractive, and deployment was incredibly easy. Thank you Railway for providing a free-tier full-stack web hosting service!

<hr>

<u> May 11th, 2024 </u>

For the past few weeks I've been making a big effort to modernize and redeploy all of my projects so that my portfolio is strong. This is the second project I'm working on. I went through the whole fifle system and refactored code to read better and look better to follow a DRY approach. I fully implemented Materialize CSS throughout the app and changed the color pallete to be readable, visually appealing and consistent. In addition, I build a completely custom audio player as an EJS partial that replaced the default HTML audio player. This new player consists of 3 files: <br />

  <ol>
    <li><strong>player.ejs</strong> - This is the HTML framework.</li>
    <li><strong>player.js</strong> - This has the DOM manipulation and functionality for the player.</li>
    <li><strong>audioPlayerStyles.css</strong> - This is the CSS file. This audio player is not using Materialize CSS as of right now.</li>
  </ol>  
  <br />
The To-Do section of this readme has been updated with new tasks involving this new player. It's not perfect yet but it works and is on GitHub! This player took quite a while to figure out and I'm super proud of it!

<hr>
