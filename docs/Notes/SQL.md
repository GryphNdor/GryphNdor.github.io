---
id: sql
title: SQL
sidebar_position: 2
slug: /notes/sql
custom_edit_url: null
---

:::note
I am using PostgreSQL for my notes but it should look relatively similar to MySQL

Also *everything in sql is case in-sensitive*
:::

:::caution
Semi-Colons Matter in order to have Postgres run the command
:::

## Creating a Table

- Creating a table requires the key word `create table` or `CREATE TABLE` then the title of the table
- The following variables within the parenthesis provide the **column names** and **type**
- A list of all types can be found [here](https://www.w3schools.com/sql/sql_datatypes.asp)
  - Popular types include:
    - char: a fixed length string from 0 to 255 given a size parameter
    - varchar: a variable length string can be from 0 to 65535 given a size parameter
    - int/integer: a medium sized integer from -2147483648 to 2147483647
    - datetime: returns UTC date time
    - real: floating point precision number from -3.40E + 38 to 3.40E + 38
  - There is also the `NOT NULL` constraint that prevents a column from being null

Example
```sql title="CREATE TABLE Example"
--For PostgreSQL use \e to enter vi mode to add multiple lines--

CREATE TABLE weather(
  city  varchar(80),
  temp_lo integer,
  temp_hi integer,
  prcp  real,
  date date
);

CREATE TABLE cities(
  name varchar(80),
  location point
);

```

## Inserting Into A Table

- To insert into a row the keywords `INSERT INTO` is used follow by the __table name__, then the keyword `VALUES` is used which corresponses to each column of the table
- Another method of insertion is passing in the **column names** following the **table name** if the `NOT NULL` constraint is not in place you may omit column values

```sql title="INSERT Example"
INSERT INTO weather
  VALUES ('Blacksburg', 61, 88, .10, '2021-7-24');

--omitting temp_lo--
INSERT INTO weather(prcp, city, temp_hi, date)
  VALUES (.10, 'New York', 82, '2021-7-24');

```

## Querying a Table
- To query a table the `SELECT` and `FROM` keywords are needed
- The `SELECT` keyword selects a column of the table or if the `*` is used selects all columns of the table
- The `FROM` keyword identifies the table that needs to be queried
  - The `AS` keywords is optional and renames the column name like ES6 JavaScript imports
```javascript title="Example of As in ES6 imports"
import { BrowserRouter as Router } from 'react-router-dom'
```

```sql title="SELECT Examples"
--selects all columns from weather--
SELECT * FROM weather;

--selects avg temp as new column--
SELECT city, (temp_lo+temp_hi)/2 as avg_temp, prcp FROM weather;

```
- The `WHERE` keyword is a boolean statement that filters the query based on if it is true

```sql title="WHERE Example"
SELECT * FROM weather WHERE city = "Blacksburg";
```

#### Output
![output of where example](/img/sql/whereoutput.png)

- The `DISTINCT` keyword removes all duplicates from the query and `ORDER BY` specifies the column to order by (could be alphabetically or numerically )

```sql title="DISTINCT and ORDER BY Example"
SELECT DISTINCT name FROM cities ORDER BY name;
```
#### Output
![distinctAndOrderByOutput](/img/sql/distinctAndOrderByOutput.png)

## Join Tables
- To join a table with another table the `JOIN` keyword is needed
- A join combines multiple tables into **one** table to make queries against
- To do a join you have to use the `JOIN` keyword and `ON` keyword along with a [table query](#querying-a-table)

```sql title="JOIN Example"
SELECT * FROM weather JOIN cities ON name;

--prevents duplicate columns--
SELECT weather.city, weather.temp_lo, weather.temp_hi, weather.prcp, weather.date, cities.location
    FROM weather JOIN cities ON weather.city = cities.name;

```
#### Output
![joinOutput](/img/sql/joinOutput.png)

- Outer Joins vs Inner Joins:
  - An **inner join** will combine as many matching rows as possible between the 2 tables like the output above
  - An **outer join** will combine all the rows to one table and insert nulls if there is no match 
  - For an outer join it can either be from the LEFT table or the RIGHT table
- Outer Joins require the same set up as an inner join (the previous steps above) only instead of just `JOIN` there it is the `direction of the join` + `OUTER JOIN`
```sql title="LEFT OUTER JOIN Example"
SELECT * FROM cities LEFT OUTER JOIN weather ON name = city;

```
#### Output
![leftOuterJoin](/img/sql/leftOuterJoin.png)

## Aggregate Functions
- These functions help to consolidate data from the dB

```sql
--max--
SELECT max(temp_lo) FROM weather;

--chaining max--
SELECT city FROM weather WHERE temp_lo = (SELECT max(temp_lo) FROM weather);

--Group By--
SELECT city, max(temp_lo) FROM weather GROUP BY city;

--Having--
SELECT city, max(temp_lo) FROM weather GROUP BY city HAVING max(temp_lo) < 40;
```

## Updating Table
- To update a row in the table use the `UPDATE` keyword followed by the **table name** then use the `SET` keyword to override the data and `WHERE` to identify the parameters

```sql title="UPDATE Example"
--updates date of New York--
UPDATE weather
  SET date = '2021-7-25'
  WHERE city = 'New York';

```

## Deleting
- To delete a row from a table use the `DELETE FROM` keywords followed by the **table name** and `WHERE` to identify the parameters
- To delete a table use the keywords `DROP TABLE` followed by the **table name**
```sql title="DELETE and DROP TABLE Example"
DELETE FROM weather WHERE city = 'Tokyo';

DROP TABLE weather, cities;
```