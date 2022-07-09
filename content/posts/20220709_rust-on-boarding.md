+++
date = "2022-07-09"
draft = true
title = "Rust: 上手和提升"
+++

# 前言

前段时间因为项目需要短期内上手了 Rust，也顺便逛了一圈 Rust 的生态，这里记录一下学习的经验。

## 什么是 Rust？

一门[编程语言](https://en.wikipedia.org/wiki/Programming_language), *[memory safe](https://en.wikipedia.org/wiki/Memory_safety) without [garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))*

> Technology from the past come to save the future from itself
> - Graydon Hoare (Rust 创始人)

* [官网](https://www.rust-lang.org)
* [维基百科](https://en.wikipedia.org/wiki/Rust_(programming_language))
* [GitHub](https://github.com/rust-lang/rust)
* [Influenced by](https://doc.rust-lang.org/stable/reference/influences.html)

和 [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) 一样，我觉得它们都很现代。

如果听腻了 `Performance`, `Reliability`, `Productivity`，我告诉你一个我在 Rust 上学到的新词：

***Ergonomic***

> **Ergonomics** is a measure of the friction you experience when trying to get things done with a tool.
- [Rust's language ergonomics initiative](https://blog.rust-lang.org/2017/03/02/lang-ergonomics.html)

> Doing so is a clear **ergonomic** win.
- [Rust RFC 0141 - lifetime elision](https://rust-lang.github.io/rfcs/0141-lifetime-elision.html)

> This proposal will improve the **ergonomics** of the Rust language for development of command-line tools and "back end" / "computational kernel" programs.
- [Rust RFC 1869 - eprintln](https://rust-lang.github.io/rfcs/1869-eprintln.html)

> Better **ergonomics** for pattern-matching on references.
- [Rust RFC 2005 - match **ergonomics**](https://rust-lang.github.io/rfcs/2005-match-ergonomics.html)

> Add async & await syntaxes to make it more **ergonomic** to write code manipulating futures.
- [Rust RFC 2394 - async await](https://rust-lang.github.io/rfcs/2394-async_await.html)

> The main motivation for this RFC is improving readability, **ergonomics**, and reducing paper cuts.
- [Rust RFC 2497 - if let chains](https://rust-lang.github.io/rfcs/2497-if-let-chains.html)

> `axum` is a web application framework that focuses on **ergonomics** and modularity.
- [axum](https://github.com/tokio-rs/axum)

> async fn(Request) -> Result<Response, Error>
>
> Tower is a library of modular and reusable components for building robust networking clients and servers.
- [Tower](https://github.com/tower-rs/tower)

> Rust makes systems programming accessible. - Kosinix
- [fireflowers - The Rust Programming Language, in the words of its practitioners](https://brson.github.io/fireflowers/)

## Rust 入门

刚开始入门，学习资源限制在如下三个就足够了：

* [rustlings](https://github.com/rust-lang/rustlings) ~~Jedi Younglings~~
  > `Small exercises to get you used to reading and writing Rust code.`
* [The Book](https://doc.rust-lang.org/book/index.html)
  > *`The Rust Programming Language`*
* [Rust by Example](https://doc.rust-lang.org/rust-by-example/index.html)
  > `Learn Rust with examples`

先让自己对这门语言关键的概念有个印象，避免刻意套用以往的编程经验，试着去接受和理解 Rust 的独特之处，入个门没那么难。把 `rustlings` 的全部小练习打通关后，就可以算是初步入门了，下面是通关时出现的彩蛋。

```text
🎉 All exercises completed! 🎉

+----------------------------------------------------+
|          You made it to the Fe-nish line!          |
+--------------------------  ------------------------+
                          \\/
     ▒▒          ▒▒▒▒▒▒▒▒      ▒▒▒▒▒▒▒▒          ▒▒
   ▒▒▒▒  ▒▒    ▒▒        ▒▒  ▒▒        ▒▒    ▒▒  ▒▒▒▒
   ▒▒▒▒  ▒▒  ▒▒            ▒▒            ▒▒  ▒▒  ▒▒▒▒
 ░░▒▒▒▒░░▒▒  ▒▒            ▒▒            ▒▒  ▒▒░░▒▒▒▒
   ▓▓▓▓▓▓▓▓  ▓▓      ▓▓██  ▓▓  ▓▓██      ▓▓  ▓▓▓▓▓▓▓▓
     ▒▒▒▒    ▒▒      ████  ▒▒  ████      ▒▒░░  ▒▒▒▒
       ▒▒  ▒▒▒▒▒▒        ▒▒▒▒▒▒        ▒▒▒▒▒▒  ▒▒
         ▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▒▒▓▓▒▒▒▒▒▒▒▒
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
             ▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒
           ▒▒  ▒▒▒▒▒▒▒▒▒▒██████▒▒▒▒▒▒▒▒▒▒  ▒▒
         ▒▒    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    ▒▒
       ▒▒    ▒▒    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    ▒▒    ▒▒
       ▒▒  ▒▒    ▒▒                  ▒▒    ▒▒  ▒▒
           ▒▒  ▒▒                      ▒▒  ▒▒
We hope you enjoyed learning about the various aspects of Rust!
If you noticed any issues, please don't hesitate to report them to our repo.
You can also contribute your own exercises to help the greater community!
Before reporting an issue or contributing, please read our guidelines:
https://github.com/rust-lang/rustlings/blob/main/CONTRIBUTING.md
```

## Rust 开发环境
