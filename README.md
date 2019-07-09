#TFT Full Game Team Builder with Items and Image Output

First version of my Team Builder with Item Support for various stages of the game and the ability to share your created team as a image for the Riot Games game Teamfight Tactics.
Other TFT Team Builders I have seen do no have allow items to be added to teams, only display final teams and have limited or no sharing abilities.
I decided to create my own adding in these missing options.

Many guides and shared teams fail to show the users how to build their team in the early game, how to transition in the mid game and what items to look for first.
Generally the early game involves collecting strong base items for your late game team composition and getting strong early champions which may be replaced later.
Mid game invloves completing items for your late game comp and also gathering the rest of your champions for your final comp. This is also know as the transition phase where many early game champions are removed from the lineup.
Late game invloves the final comp with the completed items on the main carries or tanks depending on the team comp.
By providing the option to add early and mid games comps my team builder makes it easier to users to know how to get to the final team.

#Features
* Can optionally create early, mid and late game team compositions.
* Can add items to any champion for any stage of the game.
* Ability to export team as a png file for easy sharing.
* Room for 10 champions in each stage with 3 items on each.

Uses Dragula for drag and drop and html2canvas for converting the page to a canvas able to be exported as an image.
[Dragula](https://github.com/bevacqua/dragula) requires dragula.css and dragula.js
[html2canvas](http://html2canvas.hertzen.com/) requires html2canvas.js

Tested with firefox 67 and chrome 75. If using offline with chrome you may get a tainted canvas error when saving as image. This is due to chrome thinking the images are coming from a different domain. This can be fixed by running your own webserver locally or launching chrome with the '--allow-file-access-from-files' flag.

TFT Full Game Team Builder was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.