TDD practice

Kata: http://codekata.com/kata/kata09-back-to-the-checkout/

## Where do we get the price from? [OPEN QUESTION]

- Either a `Catalog` has the prices of an item.
- An item knows its unit price. But this is a bit cumbersome.
- Items can be put inside the cart in any order, meaning that if the items were aware of their special prices it would
be much more difficult to deal with this as there's no "centralized" authority.
