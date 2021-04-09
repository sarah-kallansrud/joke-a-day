var jokes = ["I'm afraid for the calendar. Its days are numbered.", "My wife said I should do lunges to stay in shape. That would be a big step forward.", "What do a tick and the Eiffel Tower have in common? They're both Paris sites.", 
"What did the ocean say to the beach? Nothing, it just waved.", "How does the moon cut his hair? Eclipse it.", "I only know 25 letters of the alphabet. I don't know y.", "What is the #1 cause of dry skin? A bath towel!", "What do you call a pig that does karate? A pork chop!"];

var jokeTime = 0 ; // 12am
var joke = document.getElementById("joke");

//display random joke at midnight

if (time === jokeTime)
  joke.innerText = "Why did the bike fall over? It was two tired."

var time = function()
{
    // gives page clock function to change joke once a day
    
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
   time();
};
  


    






