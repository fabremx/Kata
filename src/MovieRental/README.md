# Movie Rental

## Instructions

The Martin Fowler’s book “Refactoring, Improving the Design of Existing Code” start with a (very) simple example of refactoring of code.

Actualy the statement method prints out a simple text output of a rental statement

```
Rental Record for martin
  Ran 3.5
  Trois Couleurs: Bleu 2
Amount owed is 5.5
You earned 2 frequent renter points
```

We want to write an HTML version of the statement method :

```
<h1>Rental Record for <em>martin</em></h1>
<table>
  <tr><td>Ran</td><td>3.5</td></tr>
  <tr><td>Trois Couleurs: Bleu</td><td>2</td></tr>
</table>
<p>Amount owed is <em>5.5</em></p>
<p>You earned <em>2</em> frequent renter points</p>
```

First refactor the program to make it easy to add the feature, then add the feature.

Credit: [Coding Dojo](https://codingdojo.org/kata/movie-rental/)
