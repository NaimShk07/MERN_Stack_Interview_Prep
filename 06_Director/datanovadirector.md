1. tell me about your ev charging project
2. what was you contribute
3. did used any real time reporting in that project
4. how did the ui look like
5. what are the challenges you faced in implementing this project
6. what exactly were the improvements, how did you improve user engagement in cognisun website
7. what are the step you will take to improve user engagement in any website
8. how will you analyze what are the loop holes and what are the possible fixes(funcitionality, ui, both, anything)
9. how will you identify what is lacking in the current user experience
10. `what are check list you would want to check if this things are present or not , if not present then it may affect user experience`
11. `what is ideal webpage or website which has all the features that have a very good user experience`
12. `what is sitemap`
13. `what about image loading , webpage overall load time, side map`
14. `which image format is best for a website so it load faster`
15. `what is sidemaps`
16. what was your contribution in the networking app project
17. can you walk me through the overall design of the system
18. how does the referal system works
19. tell me the system design part of it let say you want to refer anyone from the technical pov
20. how did you integrated whatsapp into the system, what was the name
21. `how did you prevent duplication in this `
22. from the technical pov how will you prevent duplication
23. mysql vs mongodb
24. `which one is more optimized to run aggregation query`

- For complex and nested aggregation, MongoDB performs better due to its powerful aggregation pipeline. MySQL is strong with structured, relational data but can be slower with joins and multi-step groupings.

25. `how will prevent concurrency in the system ,(ex two manager are adding detail of a same project together at the same time ) how will you handle this`

### 1. **Optimistic Locking**

- Store a `version` or `updatedAt` timestamp in the DB.
- Before update, check if data has changed since it was fetched.
- If version doesn’t match → reject update with a conflict.

```js
// Pseudo logic
if (incomingVersion !== dbVersion) {
	throw new Error("Conflict: Data has been modified");
}
```

---

### 2. **Pessimistic Locking**

- Lock the row/data when one user is editing it.
- Others must wait until it's released.
- Risk: can cause blocking or deadlocks if not managed carefully.

---

### 3. **Atomic Operations**

- Use DB-level transactions to make sure operations are all-or-nothing.
- Ensures data isn't half-updated during simultaneous writes.

---

### 4. **UI-Level Prevention**

- Add **edit locks** on frontend (e.g., "Being edited by X").
- Disable "Save" if someone else is already editing.

---

### 5. **Queue-Based Updates** (for async updates)

- Serialize updates through message queues if needed.

26. do you have any experience in using third party authentication services
27. how did you integrated secure role based access controlled
28. how many different user were there within the system were the
29. was it a multi tenant architecture
30. `can you tell me about time where you kind of face a conflict the with any of your colleague or manager? how did you handle that situation`

- Once, I had a disagreement with a teammate on API design. Instead of escalating, I scheduled a 1-on-1 to understand their view. We ended up combining ideas, which improved both performance and maintainability. It helped build better team trust.

31. what is the reason you are looking for a change
