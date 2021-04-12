# Fibonacci Rest API

A basic Node.js Fibonacci Service using JavaScript with Node.js and Express.js<br/>
<br/>

## How to use it

**`git clone`** this respository or a fork of this repository<br/>
**Install** the dependencies with `npm i` or `npm install` on the project folder.<br/>
**Run** the server with `npm start`<br/>
**Test** it with Postman or any API client. You can also use the browser as a client.<br/>
To make the request, you must put the index number in the Fibonacci series that you want to receive, by params<br/>
I.E.: `http://localhost:3001/3` will bring the value "2" because the index "3" in the Fibonacci sequence corresponds to the number "2"<br/>
<br/>

## My thought process

I knew I wanted to do it soon, so I decided to do something simple, not worrying about efficiency<br/>
but about functionality in the first place.<br/>
The process was quick as it didn't require a lot of work:<br/>

1. I knew I would handle the routes and the server with Express, so I imported it.<br/>
   I specifically needed two things from Express: The router and express as such.<br/>
   The first to set my routes and the second to start my server.<br/>
2. I defined the routes. One in root where I make a small welcome with a quick instruction<br/>
   to guide the user and another where I receive a number by params.<br/>
   In this second there is really the Fibonacci function.
3. The function makes use of the concept of recursion, so it needed a base case where<br/>
   it would not recur again and thus avoid an infinite loop.<br/>
4. Once that is handled, only the recursive part of the function remains, which consists of<br/>
   adding to the function with n - 1 with the same function but receiving n - 2.<br/>
   What happens here is that the flow is going to be divided into two functions different recursives<br/>
   that in turn will continue to branch until each one reaches the base case and from there<br/>
   the executions in the execution stack will close, returning with the desired number.<br/>
   The best way to understand how the algorithm achieves the desired result is to debug the execution stack step by step.<br/>
5. Once I finished with the algorithm, all that remained was to run the server on some port of the local host.<br/>
   So first I did a little error handling for any eventuality and used port 3001 to listen to the server<br/>
   <br/>

## What would I improve

I am aware of the improvements that could be made, such as a better handling of errors preventing more conditions,<br/>
such as handling a case where a negative number is passed or it is not a number at all.<br/>
Also with a few more hours I could add functionalities and transform it into an app with mathematical tools,<br/>
build the Frontend and give it a UI.
