
// That works -----v

<div id="playlist-container">
    <% playlist.audio.forEach(track => { %>
        <audio src="<%= playlist.audio[track] %>" controls></audio>
                <%});%>
</div>


// Doesn't work yet -----v

<div id="playlist-container">
                <% playlist.audio.forEach(track => { %> <%= var sound = new
                howl({ src: ['<%= playlist.audio[track] %>'] }) %> <%});%>
            </div>