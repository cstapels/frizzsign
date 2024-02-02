Uses ThingSpeak as a database to store votes from visitors indicating they want to sign up.
Each write to thingspeak contains up to four fields.  Field one is 1 for player add, -1 for player subtract.  For comments only, we can probably use 0
Field 2 is the player name, or delete
field 3 is the player comment, or delete
Field 4 is the number of the player being deleted.

Delete player is inactive until a player radio is selected.  TODO make sure delete is accepted and refresh is complete before allowing a new delete operation


Wish list

Better weather data

Look at previous days

sign up for a future day

let everyone know all conditionals have been met

