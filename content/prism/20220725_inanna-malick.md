+++
date = "2022-07-25"
title = "Inanna Malick Blog: Elegant and performant recursion in Rust"
+++

> **Evaluating an expression language: `1 * (2 - 3)`**
>
> * boxed pointer traversal
> ```rust
> ExprBoxed::Mul {
>     a: Box::new(ExprBoxed::LiteralInt { literal: 1 }),
>     b: Box::new(ExprBoxed::Sub {
>         a: Box::new(ExprBoxed::LiteralInt { literal: 2 }),
>         b: Box::new(ExprBoxed::LiteralInt { literal: 3 }),
>     }),
> }
> ```
> * cache-local reverse topological fold
> ```text
> [
> idx_0:    Mul(idx_1, idx_2)
> idx_1:    LiteralInt(1)
> idx_2:    Sub(idx_3, idx_4)
> idx_3:    LiteralInt(2)
> idx_4:    LiteralInt(3)
> ]
> ```

* Cache locality: [Locality of reference](https://en.wikipedia.org/wiki/Locality_of_reference)

* [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting)

* [Functor (functional programming)](https://en.wikipedia.org/wiki/Functor_(functional_programming))

* [Property testing](https://en.wikipedia.org/wiki/Property_testing)

[Link](https://recursion.wtf/posts/rust_schemes/)
