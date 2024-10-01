# Back-End E Commerce 

## Table Of Contents
- [User Story](#User-Story)
- [Description](#Description)
- [Installation](#User-Instructions)
- [Issues](#Problmes-I-Ran_into)
- [Solution](#Solution)


## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Description 
This application mocks database that could be found in the back end of an e commerce retail company. We use sequilize to create and query data structure for tabled of Product, Category, and Tag.

## User instructions
1. Clone repo
 ```bash
    git clone git@github.com:gustavomrtnz/ORM_E-Commerce_Back-End.git
 ```
2. After Cloning The Repo Run
4. Make sure insomnia and postgreSQL are both install
4. run your schema in your integrated terminal by running [ psql -U "your username here" ] and then running [ \i shcema.sql ] to create your databse.
5. Seed your information by running [ npm run seed ]
6. lastly run your server by running [ node server ]
7. To get and see your many to many relations and products by id insert your server name into your browser or insomnia and use the designated destinations ..../api/(categories, tags, or products)

## Problems I Ran Into
While trying to replicate trying to make a GET call I kept getting an error in my console that was giving me a syntax error, upon checking my code I was not able to see the proper problem

### Solution
After many attempts at checking my code for syntax errors and doing research on stackoverflow and geeksforgeeks I resorted to asking my instructors fo help and the problem was not in my code but with my insomnia headers. 
