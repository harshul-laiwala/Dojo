
-- 1. What query would you run to get all the countries that speak Slovene. Your query should return the name of the
-- country, language and language percentage. You query should arrange the result by language percentage in
-- descending order.

select countries.name , languages.percentage,languages.language from languages 
	 join countries ON countries.id = languages.country_id
     where language ='Slovene'
     order by languages.percentage desc;

-- 2. What query would you run to display the total number of cities for each country. Your query should return the
-- name of the country and the total number of cities. You query should arrange the result by number of cities in
-- descending order.

select countries.name , count(cities.country_code) from cities 
	right join countries ON cities.country_id = countries.id
	group by cities.country_code 
    order by count(cities.country_code) desc;

-- 3. What query would you run to get all the cities in Mexico with a population of greater than 500,000. Your query
-- should arrange the result by population in descending order.

select cities.name,cities.population from cities 
	where population > 500000 and country_id IN (select countries.id from countries where countries.name='Mexico')
    order by population desc;


-- 4. What query would you run to get all language in each country with a percentage greater than 89%. Your query
-- should arrange the result by percentage in descending order.
 
select countries.name, languages.language, languages.percentage from languages 
	left join countries on countries.id = languages.country_id 
    where languages.percentage > 89
    order by languages.percentage desc; 

-- 5. What query would you run to get all the countries with Surface Area below 501 and Population greater than
-- 100,000.

select countries.name , countries.surface_area , countries.population from countries where countries.surface_area < 501 AND countries.population > 100000;

-- 6. What query would you run to get all Constitutional Monarchy Countries with a capital greater than 200 and a life
-- expectancy greater than 75 years.

select countries.name , countries.surface_area , countries.population from countries where countries.surface_area < 501 AND countries.population > 100000;

-- 7. What query would you run to get all the cities of Argentina inside the Buenos Aires district and have population
-- greater than 500, 000. The query should return the Country Name, City Name, District and Population.

select countries.name as Country , cities.name as City , cities.district , cities.population from cities 
	left join countries ON cities.country_id=countries.id
	where cities.district = 'Buenos Aires' AND cities.population > 500000;

-- 8. What query would you run to summarize the number of countries in each region. The query should display the
-- name of the region and the number of countries. Also, the query should arrange the result by number of
-- countries in descending order

select countries.region, count(countries.id) as countries from countries 
	group by countries.region
    order by count(countries.id) desc;