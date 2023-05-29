### Questions

***Question 1:*** What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

**Ans:-** A model with an interface and schema in MongoDB is used to define the structure of a collection. The interface defines the properties that are required for each document in the collection, and the schema defines the types of data that can be stored in each property. This helps to ensure that all data in the collection have the same structure and that the data is stored in a consistent format.

***Question 2:*** Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

**Ans:-** Field filtering in MongoDB allows you to specify which fields to include or exclude in the returned data when querying the database. This feature is particularly useful when you want to retrieve only specific fields from the data instead of retrieving the entire document.

***Question 3:*** What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

**Ans:-** Instance methods are methods that are defined on a specific instance of a model. They can be used to perform actions on the data stored in the model, or to interact with other models or services.

For example, a Book model might have an instance method called getRating() that returns the average rating for the book. This method could be used to calculate the average rating for all books in a collection, or to find the highest-rated book in a collection.

**Question 4:** How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

  **Ans:-** 1.In MongoDB queries, comparison operators like $ne (not equal), $gt (greater than), $lt (less than), $gte (greater than or equal to), and $lte (less than or equal to) are used to compare field values with specific criteria. Here are examples illustrating their usage:

$ne (not equal): Matches data where the field value is not equal to the specified value.

$gt (greater than): Matches data where the field value is greater than the specified value.

$lt (less than): Matches data where the field value is less than the specified value.

$gte (greater than or equal to): Matches data where the field value is greater than or equal to the specified value.

$lte (less than or equal to): Matches data where the field value is less than or equal to the specified value.

**Question 5:** What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

**Ans:-** What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

$in operator: The $in operator matches data where the value of a field matches any value in the specified array.

$nin operator: The $nin operator is the negation of the $in operator. It matches data where the value of a field does not match any value in the specified array.
