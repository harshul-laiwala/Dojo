-- Sakila Database Exercise:
-- (MySQL Intermediate Assignment)
-- 1. What query would you run to get all the customers inside city_id = 312? Your query should returm customer
-- first name, last name, email, and address.
select customer.first_name , customer.last_name, customer.email , address.address from customer
	join address on customer.address_id = address.address_id
    where address.city_id = 312;

-- 2. What query would you run to get all comedy films? Your query would return film title, description, release year,
-- rating, special features and genre.
select film.title , film.description , film.release_year, film.rating , film.special_features , category.name as genre from film
	join film_category on film.film_id = film_category.film_id
    join category on film_category.category_id = category.category_id
    where category.name = 'Comedy';

-- 3. What query would you run to get all the films joined by actor_id=5? Your query shoud return the film title,
-- description and release year.
select actor.first_name , actor.last_name , film.title, film.description, film.release_year from actor
	join film_actor ON  actor.actor_id = film_actor.actor_id
    join film ON film_actor.film_id = film.film_id
    where actor.actor_id = 5;

-- 4. What query would you run to get all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)?
-- Your query should return customer first name, last name, email, and address.
select customer.first_name , customer.last_name, customer.email, address.address, address.city_id from customer
	join address ON customer.address_id = address.address_id
    join city on address.city_id = city.city_id
    where city.city_id IN (1,42,312,459) AND customer.store_id = 1;


-- 5. What query would you run to get all the films with a rating = G and special feature = behind the scenes, joined
-- by actor_id = 15? Your query shoud return the film title, description, release year, rate and special feature.
select film.title , film.description , film.release_year, film.rating, film.special_features from film
	join film_actor on film.film_id = film_actor.film_id
    where film_actor.actor_id = 15 and film.rating = 'G' and film.special_features like '%Behind the Scenes%';

-- 6. What query would you run to get all the actors that joined in the film_id = 369? Your query should return the
-- first_name, last name and last_update of the actors.
select actor.first_name, actor.last_name , actor.last_update from actor 
	JOIN film_actor ON actor.actor_id = film_actor.actor_id
    where film_actor.film_id = 369;

-- 7. What query would you run to get all drama films with a rental rate of 2.99 ? Your query should return film title,
-- description, release year, rating, special features and genre.
select film.title, film.description, film.rating, film.release_year , film.special_features , category.name as genre , film.rental_rate from film
	join  film_category on film.film_id = film_category.film_id
    join category on film_category.category_id = category.category_id
    where film.rental_rate = 2.99;

-- 8. What query would you run to get all the action films joined by SANDRA KILMER. Your query should return film
-- title, description, release year, rating, special features, genre and actor's first name and last name.
select film.title, film.description, film.rating, film.release_year , film.special_features , category.name as genre , film.rental_rate , actor.first_name,actor.last_name  from film
	join  film_category on film.film_id = film_category.film_id
    join category on film_category.category_id = category.category_id
    join film_actor on film_actor.actor_id = actor.actor_id
    where film.rental_rate = 2.99 AND actor.first_name = 'SANDRA' and actor.last_name = 'KILMER';
    