# MongoDB Scaling & Optimization Cheatsheet

## 1. Indexing

- **Purpose:** Speed up query performance by reducing collection scans.
- **Types of Indexes:**
  - Single Field Index (ascending/descending)
  - Compound Index (multiple fields)
  - Multikey Index (array fields)
  - Text Index (full-text search)
  - Geospatial Index (location-based queries)
  - Hashed Index (for sharding)
- **Best Practices:**
  - Index fields used in queries, sorts, and joins
  - Avoid over-indexing to reduce write overhead
  - Analyze index usage regularly

---

## 2. Query Optimization

- **Analyze Queries:**

  ```js
  db.collection.find(query).explain("executionStats");
  ```

- **Tips:**
  - **Limit returned fields**: Use projection to return only the necessary fields.  
    **(e.g., `.find({}, { field1: 1, field2: 1 })`)**
  - **Avoid expensive queries**: Do not use `$regex` or `$where` on large collections.
  - **Prefer `$in` over multiple `$or` clauses**: Improves query efficiency.
  - **Batch operations when possible**: Reduces round trips to the database.

---

## 3. Aggregation Optimization

- Place `$match` and `$project` **early** in the pipeline
- Use `$limit` and `$skip` **after `$sort`** to reduce data load
- Index fields used in `$match`
- Use aggregation operators efficiently (`$group`, `$lookup`, `$unwind`)

---

## 4. Schema Design

- **Embedding vs Referencing:**
  - Embed for **one-to-few** relationships
  - Reference for **one-to-many or many-to-many**
- Avoid large documents (max BSON document size: 16 MB)
- Use bucketing for time-series data
- Design schema to match query patterns

---

## 5. Sharding (Horizontal Scaling)

- **Shard key requirements:** immutable, high cardinality, frequently queried
- Avoid monotonically increasing shard keys to prevent hot shards
- Use hashed shard keys for even data distribution
- Monitor chunk distribution and balance

---

## 6. Replication (High Availability)

- **Replica Set Components:**
  - Primary: handles writes
  - Secondary: can handle reads
  - Arbiter: voting only, no data
- **Read Preferences:** primary, secondary, nearest, etc.
- **Write Concern:** controls acknowledgment and durability
- Use replica sets for HA and read scaling

---

## 7. Performance Tuning

- Keep working set in RAM for faster queries
- Use WiredTiger storage engine for better performance
- Configure connection pooling for applications
- Monitor with tools like `mongostat` and `mongotop`
- Enable profiling for slow queries

---

## 8. Misc Tips

- Use TTL Index for automatic document expiration
- Consider capped collections for high-throughput logs
- Avoid large `$in` queries; split if necessary
- Monitor oplog size for replication lag
- Regularly compact or repair collections if needed

---

**References:**

- [MongoDB Official Docs](https://www.mongodb.com/docs/)
- [MongoDB Indexing Strategies](https://www.mongodb.com/docs/manual/indexes/)
- [Sharding & Replication](https://www.mongodb.com/docs/manual/sharding/)
