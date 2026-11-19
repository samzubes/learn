## Algrebra Review

This chapter will hope to cover most of the algebra background you will need to be able to thoroughly understand introductory calculus. We will quickly cover what functions are, what domains are, typical functions we will use, function notation, and useful ways for converting problems into math problems.

### Functions
Function: a mathematical object that takes in an input (a number) and gives one output (another number). For example,  
$$ f(x) = 2 * x $$
This equation defines the <button class="note-trigger" popovertarget="note-1">function</button> $f(x)$. To get the output of the function we substitute our input value into x:

- Input of $2$:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$f(2) = 2 * 2 = 4$
- Input of $y$:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$f(y) = 2 * y = 2y$
- Input of $f(y)$:&nbsp;&nbsp;&nbsp;$f(f(y)) = 2 * f(y) = 2 * 2 * y = 4y$  

Wait hold on I thought we could only put numbers into functions? What does it mean to put a function into another function?

<div id="note-1" class="note-popup" popover="auto" markdown="1">
  Technically, the function is $f$, not $f(x)$ or $f()$. $f(x)$ is the output for $f$ with input $x$. However, we will use $f(x)$ for simplicity and as this is what most introductory classes use to describe a function
</div>

If we put a number $y$ into the function $f(x)$, the output is $f(y)$, which is also a number. Because $f(y)$ is a number we can input it into functions becuase a function can take any input that's a number! Therefore, $$f(f(y))=f(2y)=4y$$

### Domains

Functions also have a property called the "domain". The domain of a function is all the valid inputs to that function. Every number in the domain will produce a valid number when inputed into a function. For example, because any number put into $g(x)=x$ results in the same number, all numbers are valid inputs to g(x). The domain of g(x) is all numbers. Essentially, this function behaves for any number we could put into it meaning its domain is any number.

We write domains in two different forms. The first being interval notation where you provide a range of values between two points: (a, b), ($-\infty$, b), (a, $\infty$), [a, b], [a, b), etc...

$$(a, b)$$

Parentheses represent open intervals. Open intervals include all values up to the point. For example, (1, 2) represents the interval from 1 to 2 exclusive of 1 and 2. So 1.000000001 is a valid point but not 1. And 1.9999999999 is a valid point but not 2.

$$[a, b]$$

On the other hand, brackets represent closed intervals. Closed values are inclusive of the end points. For example, [1, 2] represent the interval from 1 to 2. 1 is a valid point but not 0.999999999 2 is a valid points but not 2.000000001

$$(a, b]$$

We can also mix and match symbols to represent specific end conditions. Also it should be noted we always use parentheses () if a or b are infinite.

The second way we write domains is using inequality notation. For a function $f(x)$, we can represent its domain using $x$.

$$a \lt x \lt b$$

If a or b are included in the interval we can write it with equalities too: $a \leq x \leq b$

Now let's do some examples, what are the domains of the following functions:

- $g(x)=x^3$
- $f(x)=\sqrt{x}$
- $q(x)=\sqrt{x^2 - 3x + 2}$

<button class="note-trigger" popovertarget="note-2">Answers</button>
<div id="note-2" class="note-popup" popover="auto" markdown="1">
$g(x)$: $(-\infty, \infty)$, all $x$

$f(x)$: $[0, \infty)$, $0 \leq x$

$q(x)$: $(1, 2)$, $1 \lt x \lt 2$

$q(x)$ is a lot trickier and requires knowledge we will cover later like roots: first simplify the inside,
$$\sqrt{(x - 2)(x - 1)}$$
Which has root of $x=2$ and $x=1$. So the inside of the square root is negative when x is less than 2 but greater than 1 
</div>

$$q(x)=\frac{1}{x}$$

The function defined above, $q(x)$, illistrates one of the most common ways inputs can be invalid. If $x = 0$, $q(x)$ evaluates to $\frac{1}{0}$ which is undefined meaning $q(x)$ is undefined when $x=0$. <button class="note-trigger" popovertarget="note-3">What would the domain of $q(x)$ be?</button>

<div id="note-3" class="note-popup" popover="auto" markdown="1">
  Domain of $x\neq 0$
</div>

$$q(q(x))=\frac{1}{q(x)}=\frac{1}{\frac{1}{x}}$$

It is even more tricky to account for undefined behavior when we simplify functions. $q(q(x))$ can be simplified to just $x$ but that doesn't mean it is equal to $x$ for all values of $x$; if $x=0$ we run into the same issue as before. $q(q(0))\neq{0}$ because the first $q(0)$ is undefined and can't be input into the second "outer" function. Therefore, this function would have the same domain as the individual $q(x)$.

$$q(q(x))=\frac{1}{q(x)}=\frac{1}{\frac{1}{x}}=x, x\neq 0$$

The domain of a function is all of its valid inputs, but what about its outputs? The "range" of a function represents <button class="note-trigger" popovertarget="note-4">all</button> the possible outputs of a function. The function $f(x)=x^2$ will never output a negative number for all real numbers of $x$. Thus, it's range is $[0, \infty)$.

<div id="note-4" class="note-popup" popover="auto" markdown="1">
  There is another term called the codomain of a function. It represents all the possible outputs of a function and more. It's a term to convenietly describe the type of number a function outputs such as Real versus Imaginary numbers. However, we will just use range as it's only the possible outputs and nothing more.
</div>

### Graphs

One output for each input - circles, lines approaching upward\
verticle line test

Independent versus dependent -> input versus output  
Example of use in real world -> getting information out of something

...

Notation...

Multivariable functions... -> not containing multi-output functions

### Useful Functions and Their Properties
What functions are the most common? The most useful?

What makes a functions domain and properties useful in the real world or even for specific use cases?

...

### Analyzing Word Problems
We briefly will cover word problems as they represent the application of mathematics. Additionally, each chapter will attempt to cover word problems pertaining to its content.
