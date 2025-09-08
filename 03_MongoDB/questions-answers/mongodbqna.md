1. What is mongo db, why use, pros and cons?
1. SQL vs NoSQL difference?

- SQL is relational, structured, uses tables.
  NoSQL is document-based, flexible schema, great for unstructured data and scalability.

2. What are documents and collections?

- A document is a JSON-like object, a collection is a group of documents (like a table in SQL).

3. Difference between find(), findOne(), aggregate()?

- find() → returns multiple docs.
  findOne() → returns first matching doc.
  aggregate() → advanced queries like grouping, filtering, joining.

4. What is indexing in MongoDB?

- Indexes improve query performance by storing a reference to fields. Without indexes, MongoDB scans the whole collection.

5. Embedding vs referencing documents?

- Embedding = nested documents inside one record (faster reads).
  Referencing = store ObjectId references (better for large datasets, normalized).

6. Does MongoDB support transactions?

- Yes, since v4.0. Transactions allow multiple operations across documents/collections to execute atomically.
