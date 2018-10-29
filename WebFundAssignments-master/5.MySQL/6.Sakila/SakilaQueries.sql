-- Sakila Database Exercise:
-- (MySQL Intermediate Assignment)
-- 1. What query would you run to get all the customers inside city_id = 312? Your query should returm customer
-- first name, last name, email, and address.
select customer.first_name , customer.last_name, customer.email , address.address from customer
	join address on customer.address_id = address.address_id
    where address.city_id = 312;

-- 2. What query would you run to get all comedy films? Your query would return film title, description, release year,
-- rating, special features and genre.


-- 3. What query would you run to get all the films joined by actor_id=5? Your query shoud return the film title,
-- description and release year.

-- 4. What query would you run to get all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)?
-- Your query should return customer first name, last name, email, and address.

-- 5. What query would you run to get all the films with a rating = G and special feature = behind the scenes, joined
-- by actor_id = 15? Your query shoud return the film title, description, release year, rate and special feature.

-- 6. What query would you run to get all the actors that joined in the film_id = 369? Your query should return the
-- first_name, last name and last_update of the actors.

-- 7. What query would you run to get all drama films with a rental rate of 2.99 ? Your query should return film title,
-- description, release year, rating, special features and genre.

-- 8. What query would you run to get all the action films joined by SANDRA KILMER. Your query should return film
-- title, description, release year, rating, special features, genre and actor's first name and last name.