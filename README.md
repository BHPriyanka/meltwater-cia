Definition:
The application will remove given keywords and phrases from document text and insert XXXX at the locations where text was removed.

Input parameters:
1.     String of keywords and phrases: a string of censored keywords and phrases separated by spaces or commas. Phrases will be enclosed in single or double quotes. Some examples:
  	Hello world “Boston Red Sox” 
        	‘Pepperoni Pizza’, ‘Cheese Pizza’, beer
2.     Document text – the original document text that needs the provided keywords and phrases removed (masked out).

Returns:
Document text with indicated keywords and phrases removed and replaced with XXXX.

Requirements:
1.	Coding language: NodeJS
2.	Framework: Angular, if any
3.	Must be a web application, with a frontend accessible through the web browser
4.	Must include instructions on how to run (such as in a read.me file on the repo)


Assumptions:
1. Text/phrases are entered within quotes
2. Each keywords/phrases are seperated by comma
3. Applicable only to text file
4. No detailed error check done due to time constraint


Steps to run:
1. Clone the git repository
   git clone https://github.com/BHPriyanka/meltwater-cia.git

2. On the terminal, navigate to the meltwater-cia project
   cd ..../meltwater-cia

3. Install the node modules and start the server in two separate directories (frontend and backend).
   a. cd backend
      npm -i
      npm start

   b. cd frontend
      npm -i
      npm start

4. Navigate to localhost:4200 on the web browser
5. Upload the text file using the upload button
6. Enter the text/phrases within quotes seperated by comma
7. Click on "Mask Me" (to mask the entered text)
8. Download the file which contains the text/phrases masked

