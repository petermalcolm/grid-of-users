# Grid of Users 

By default, the grid displays the data in the order that is is received. Each person is displayed in a rectangle with a black border of 2px and display 3 per row on desktop (not responsive). The name is an h2 of size 16px and bold, the age is 12px and italic, and the category is 12 px and regular. The priority is displayed as a background color:
1. Orange
2. Green
3. Blue
4. Purple

There are the following sorts and filters:
* Sorts ­ chosen from a select.
   * Featured ­ the default sort (no sort)
   * A­Z: Alphabetically ascending by name
   * Priority: Listed in ascending order
* Filters ­ chosen by radio buttons for each type of filter. When a filter is selected, only the matching people are displayed. The non­matching are not rendered.
   * Category ­ show the unique categories present in the initial set of data. 

Seeded with the following data:
```
{
	"data": [{
		"name": "Joe",
		"age": 24,
		"priority": 1,
		"category": "cat2"
	}, {
		"name": "Jane",
		"age": 76,
		"priority": 4,
		"category": "cat1"
	}, {
		"name": "Kevin",
		"age": 32,
		"priority": 2,
		"category": "cat2"
	}, {
		"name": "Lucy",
		"age": 54,
		"priority": 1,
		"category": "cat3"
	}, {
		"name": "Colin",
		"age": 34,
		"priority": 3,
		"category": "cat1"
	}, {
		"name": "Franny",
		"age": 36,
		"priority": 2,
		"category": "cat3"
	}, {
		"name": "Neil",
		"age": 74,
		"priority": 4,
		"category": "cat2"
	}, {
		"name": "Katy",
		"age": 55,
		"priority": 3,
		"category": "cat2"
	}]
}
```