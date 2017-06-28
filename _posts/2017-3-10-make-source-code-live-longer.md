---
layout: post
title: Make source code live longer
---

It’s not about just making it work, It’s about how long it stays.

When I started writing source code a few years back I had only **one focus,**
**get the shit done**. After working on building multiple products and features,
I realized there is more than getting it just to work and it’s more about how
long it stays i.e **maintainability**. Being a front-end engineer, I have a
great taste for user experience and I **care a lot about the developer’s
experience** reading the source code I write, they should be able to understand
code easily and should be able to add more functionality without my help.

> Code is read more than it is written

There are **2 main** things to take care while writing code.

* Source code should be **like a story**, anyone who reads it should understand
how it flows.
* And well **it should work**.

Here are **some of my tips** for making source code live longer.

1.  **Small** is the answer! Try to make all the logic into smaller logics. Small
function means easier to understand and easier to write tests.
1.  Follow **Single responsibility principle,** each function should handle only one
task.
1.  Source code should be a **self-documented**. When you write a complex piece of
code, you might feels great but you are not really doing a great job, it will
make the **developers scared** to touch this piece of code because they don’t
understand what is going on inside and makes it difficult to maintain, so If the
code explains itself then it will live longer.
1.  **Name your functions and variables well.** Don’t worry about how long they are,
it only improves the **code readability** and it shouldn’t affect performance
because production javascript codes are usually minified.
1.  **Smaller commits** with a good message will make sure why a particular
functionality was done.

> There is nothing as complex logic, It’s all about how you look at it.
