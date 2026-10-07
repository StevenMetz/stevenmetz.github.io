---
title: Moving 30k lines from Livewire to Vue, one page at a time
date: 2026-10-06
---
Zakaria is an avatar community site with forums that a few friends and I run. It was built on Laravel Livewire. I rebuilt the whole front end in Vue with Inertia.

## Why move

Performance. With Livewire, a lot of the logic lived on the server. We wanted more of it on the client side so the site would be faster.

## How big it was

Massive. It was the whole site, about 30,000 lines of code that had to be created or migrated.

It took roughly a week, with the help of AI.

## One page at a time

I didn't do it all at once. I went page by page, and for each page I wrote the tests first and then the code.

That meant there were stretches where Livewire and Vue were both running side by side, with some pages on the old stack and some on the new one.

## The hard part

Routing. Getting the routes to work properly between Vue and Livewire, so the two could work together while the migration was in progress, was harder than I expected. A half-migrated site still has to behave like one site, and that took the most figuring out.

So routing is what I tested most. For each page I checked three things:

- The route rendered the right page.
- Vue pages went through Inertia.
- Nothing that already worked got broken. Avatar pages were the big one there.

## Did it work

Load times went down by roughly 10%.

## Would I do it differently

No. Page by page, tests first, is how I'd do it again.

And there's nothing about Livewire that I miss.
