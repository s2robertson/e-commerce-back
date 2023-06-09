# E-Commerce Back End

## Description
This e-commerce app allows a user to perform CRUD operations pertaining to products, product categories,
and descriptive tags that can be attached to the products.  I created this app as an exercise in using
the `Sequelize` ORM library.

## Installation
Before running, `db/schema.sql` should be used to initialize a database, and `npm run seed` used to insert
sample data.  Also, environment variables should be set for database name (`DB_NAME`), database user (`DB_USER`),
and database password (`DB_PASSWORD`).  These values will be picked up automatically if they are stored in
a `.env` file in the project's root (see the link to `dotenv` below).

## Usage
This is an an express app, and interactions with it are through http requests.  Products can be viewed and 
created at `/api/products` using GET and POST requests, and can be viewed, updated, and deleted at
`/api/products/:id` using GET, PUT, and DELETE requests.  Categories and tags can likewise be viewed/modified
at `/api/categories`, `/api/categories/:id`, `/api/tags`, and `/api/tags/:id`.

[Watch a sample usage video](https://drive.google.com/file/d/102Pfmk53waXZr1atkuyTbnEw2m5FTQ5P/view)

## Credits
The initial files (sample data and a skeleton outline) were provided by University of Toronto Coding Bootcamp.
In addition, I used the following packages:
* [sequelize](https://www.npmjs.com/package/sequelize)
* [express](https://www.npmjs.com/package/express)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [dotenv](https://www.npmjs.com/package/dotenv)

## License
MIT