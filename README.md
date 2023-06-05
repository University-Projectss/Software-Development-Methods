# RetroRetreat

A web application that host some of the most popular retro games, that you can play solo or with your friends.

## Games

Tic Tac Toe, Connect Four, Space Invaders Custom

-----------------------------------------------------------

## Description:
	
	The website should offer a variety of games for players of all ages and interests, with features designed to enhance your gaming experience. 
	You can also leave reviews for each game, so others can learn from your experiences and you can find the best games for you.
	You can also connect with other gamers through our forum, where you can share tips, tricks, and strategies, or just chat about your favorite games.
	We want our users(players) to get an ideea about the game before they play, so every game on our website includes a preview. 
	And for their security and privacy, we offer authentication and secure login. Users will have a profile page that shows their achievements.
	
-----------------------------------------------------------

## User stories:

	- Review section per game
			As a user, you can read other players reviews on every game and you can write your own reviews

	- Rating system
			As a user, besides the written review, you can give the game a score from 1 to 5

	- Multiplayer on same device
			As a user, you can play some games with your friends, on the same device
	
	- Tic, Tac, Toe
			As a user, you can play the most classic variant of Tic, Tac, Toe

	- Connect Four
			As a user, you can play a modern version of Connect Four

	- Space Invaders
			As a user, you can play a modified version of the famous Space Invaders

	- Forum 
			As a user, you can interact with other users through the forum, by writing messages.

	- Every game will have some sort of preview
			As a user, when you enter the game page, you will see a picture showcasing game footage

	- Authentification
			As a user, you can create an account, and login into that when you access the page in the future

	- Profile page(achievements)
			As a user, you will have a profile page, where you will see your achievements, meaning stats for the games you played.

-----------------------------------------------------------

## Link to Diagram
https://www.figma.com/file/y4BgzFNv9unamu4F3B4bx8/MDS-Project?node-id=0%3A1&t=ESp37i4T2VKOH2Vs-1

## Link to Backlog
https://mdsproject.atlassian.net/jira/software/projects/MDS/boards/2

## Link to Showcase
https://youtu.be/StrHify8jns

## Raportare bug
		Bugs encountered:
	 		in Space Invaders then spaceship was not shooting down and in the left
		 		It was fixed by firstly isolating the problem by refactoring the code to be more readable 
				and thus being able to find the exact line of code that was producing the error
		 		the problem was that the function name was not being recognised by the compiler and thus not being called
	 		when playing ConnectFour the counter for games played in ConnectFour was not being incremented
		 		the problem was created by the ide when it autocompleted the wrong function name
	 		the achievement "First time played Space Invaders" was appearing mutiple times
				the problem was that an achievement was not unique so it was created multiple times in the database
				solution was creating a if that checked if there was a achivement with that name in the database before creating the new one 
## Authors

- [Andrei Balanica](https://github.com/Balanica)
- [Alexandru Potanga](https://github.com/Destro25)
- [Robert Udrea](https://github.com/rob3rtu)
