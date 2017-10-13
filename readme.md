# Open Movie Database API 
This app will grab the top 100 most popular movies using The Open Movie Database's API.

# Local Setup
Running this project locally requires the follow steps:

1. `git clone` this project into the directory of your choice.
2. `npm install` or `yarn install` to pull down the required packages.
3. Setup your MySQL database with a `movies` table using the following command
      ```
      CREATE TABLE `movies` (
      `id` int(11) NOT NULL,
      `adult` varchar(10) DEFAULT NULL,
      `backdrop_path` varchar(100) DEFAULT NULL,
      `genre_ids` text,
      `original_language` varchar(20) DEFAULT NULL,
      `original_title` varchar(100) DEFAULT NULL,
      `overview` text,
      `popularity` decimal(10,6) DEFAULT NULL,
      `poster_path` varchar(100) DEFAULT NULL,
      `release_date` datetime DEFAULT NULL,
      `title` varchar(100) DEFAULT NULL,
      `video` varchar(10) DEFAULT NULL,
      `vote_average` decimal(4,2) DEFAULT NULL,
      `vote_count` int(11) DEFAULT NULL,
      PRIMARY KEY (`id`)
      )
      ```
3. Create a `config.js` file based on the example provided in this repo.
4. `npm run` or `yarn run` to spin up the server.
5. Fill your database by navigating to `locahost:8081/gather`
6. Navigate to `localhost:8081` and enjoy.