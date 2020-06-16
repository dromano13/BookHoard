book app - popular books


books - users -> at least one join table to link many books to a user

?----------->author table that links to books -------> that can link to users?

books -> attributes -> genre, title, author, thumbnail(url link), foreign key for users
---->main page for books would have a list of genres
--> can add/remove/update info

(maybe move this to books)type of books -> attributes -> electronic, paperback, hardback, audio -> foreign key for books

users -> attributes -> username, name, email, password
------>main page for users is a profile
--> can create new books in genres


wireframes for every page view
-> views ---> 
users--> sign up
users--> login
users--> profile ->edit, delete options ->link to book page
books--> main page of genres categories
books--> info page for each book ->edit, delete options
books--> add book page --> attributes not null

------------>if time author pages linking books each author has written - maybe a short bio
------------>track or follow genre/author ability?


ERDs

Wireframes -> hand drawn dernit


User Stories

->as a user
-->we want to be able to sign up -> create username, password ->then be taken to profile page ->
-->edit profile -> change info as needed  --> add options like stating favorite genre, author, book something like that
->be able to delete profile
->link to main book page 

-------->search function??????

-->books page we want to be able to open categories/genres to see what books are listed
-->info page for books -> add book to a user profile -> edit book info if incorrect ->delete function to remove the book
-->add existing books to profile -> find book -> select it -> see it show up on profile
-->add books to database -> add in required info -> see the book in it's correct category -> show on profile that user added this book

--------------->possibles
Password reset
viewing basic profile informtion - social aspect

Filter options -> filtering by genres

