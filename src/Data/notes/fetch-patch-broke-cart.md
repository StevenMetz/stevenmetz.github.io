---
title: When another app patches fetch and breaks your cart
date: 2026-10-06
---
A merchant wrote in because customers couldn't increase or decrease quantities in the cart. Every time they tried, a JSON error was thrown and the quantity stayed where it was.

The stack trace looked like the answer and wasn't. It said there was a JSON error and it pointed at a line, but it didn't explain what was actually wrong, and it didn't show that the call had started inside our cart script. Going by the message alone, I would have gone looking in the wrong place.

## Finding who was involved

What did help was the top of the stack. I clicked into the first entry and landed in a script that belonged to a third-party app, one the merchant needs to run their store. That app was monkey patching `window.fetch`, which means every request on the page, ours included, went through its code first.

To prove it, I blocked that one script and tried again. Quantities worked. So it was that app's patch and nothing else.

Then I added an event listener to the cart so I could see what was happening on our side, and that's where the real error showed up.

Changing a quantity is a `POST` to Shopify's `/cart/change.js`. The body is supposed to be JSON that says which line and how many:

```json
{ "line": 1, "quantity": 2 }
```

The patched `fetch` wasn't encoding that properly. What came through had `=` signs where JSON expects colons, something like this:

```
line = 1, quantity: 2
```

That isn't JSON, so the parser threw "unexpected token" and the quantity never changed.

## The fix

There was no PR for this one. The bug wasn't in our code, and I couldn't remove an app the merchant depends on.

Instead I used the Smart Cart's show callback. When the cart shows, I re-establish `fetch` and patch it again myself, so cart requests go out the way they should. Two things made that the right spot:

- By the time the cart shows, every other app on the page has most likely finished loading, so nothing patches over mine afterwards.
- Nobody changes a line item quantity unless the cart is showing, so the fix is always in place by the time it matters.

## What I check first now

The stack trace, still. The message can send you the wrong way, but the top entry usually points at the line throwing the error or the file it comes from. I click into that before I read anything else. If it lands in someone else's script, I block that script and see if the problem goes away. It's the fastest way I know to find out whose problem it is.
