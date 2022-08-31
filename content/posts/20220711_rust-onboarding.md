+++
date = "2022-07-11"
title = "Rust: 上手和提升"
+++

## 前言

前段时间由于项目需求短期内上手了 Rust，也顺便逛了一圈 Rust 的生态，这里记录一下学习的经验。

## 什么是 Rust？

一门[编程语言](https://en.wikipedia.org/wiki/Programming_language),
*[memory safe](https://en.wikipedia.org/wiki/Memory_safety) without [garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))*,
*fearless [concurrency](https://en.wikipedia.org/wiki/Concurrent_computing) without [data race](https://en.wikipedia.org/wiki/Race_condition#Data_race)*

> Technology from the past come to save the future from itself. - Graydon Hoare (Rust 创始人)

* [官网](https://www.rust-lang.org)
* [维基百科](https://en.wikipedia.org/wiki/Rust_(programming_language))
* [GitHub](https://github.com/rust-lang/rust)
* [Influenced by](https://doc.rust-lang.org/stable/reference/influences.html)
* [RustBelt](https://plv.mpi-sws.org/rustbelt/)

和 [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) 一样，我觉得它们都很现代。

如果听腻了 `Performance`, `Reliability`, `Productivity`，我告诉你一个我在 Rust 上学到的新词：

***Ergonomic***

> **Ergonomics** is a measure of the friction you experience when trying to get things done with a
> tool.
- [Rust's language ergonomics initiative](https://blog.rust-lang.org/2017/03/02/lang-ergonomics.html)

> Doing so is a clear **ergonomic** win.
- [Rust RFC 0141 - lifetime elision](https://rust-lang.github.io/rfcs/0141-lifetime-elision.html)

> This proposal will improve the **ergonomics** of the Rust language for development of command-line
> tools and "back end" / "computational kernel" programs.
- [Rust RFC 1869 - eprintln](https://rust-lang.github.io/rfcs/1869-eprintln.html)

> Better **ergonomics** for pattern-matching on references.
- [Rust RFC 2005 - match **ergonomics**](https://rust-lang.github.io/rfcs/2005-match-ergonomics.html)

> Add async & await syntaxes to make it more **ergonomic** to write code manipulating futures.
- [Rust RFC 2394 - async await](https://rust-lang.github.io/rfcs/2394-async_await.html)

> The main motivation for this RFC is improving readability, **ergonomics**, and reducing paper
> cuts.
- [Rust RFC 2497 - if let chains](https://rust-lang.github.io/rfcs/2497-if-let-chains.html)

> `axum` is a web application framework that focuses on **ergonomics** and modularity.
- [axum](https://github.com/tokio-rs/axum)

> async fn(Request) -> Result<Response, Error>
>
> Tower is a library of modular and reusable components for building robust networking clients and
> servers.
- [Tower](https://github.com/tower-rs/tower)

> Rust makes systems programming accessible. - Kosinix
- [fireflowers - The Rust Programming Language, in the words of its practitioners](https://brson.github.io/fireflowers/)

## Rust 入门

入门的学习资源不宜过多，有如下三个就足够了：

* [rustlings](https://github.com/rust-lang/rustlings) ~~Jedi Younglings~~
  > `Small exercises to get you used to reading and writing Rust code.`
* [The Book](https://doc.rust-lang.org/book/index.html)
  > *`The Rust Programming Language`*
* [Rust by Example](https://doc.rust-lang.org/rust-by-example/index.html)
  > `Learn Rust with examples`

让自己对这门语言关键的概念有个印象，避免刻意套用以往的编程经验，试着去认识 Rust 的独特之处，入个门没
那么难。把 `rustlings` 的全部小练习完成后，就可以算是初步入门了，下面是我通关时出现的彩蛋 [^1]。

```txt
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

* 代码编辑器：[VS Code](https://github.com/microsoft/vscode), 搭配 `rust-analyzer` 和 `Even Better
  TOML` [^2] 两个插件

* Language Server 支持: [rust-analyzer](https://rust-analyzer.github.io)

* 代码质量必备：[rustfmt](https://github.com/rust-lang/rustfmt), [clippy](https://github.com/rust-lang/rust-clippy),
  使用如下配置

```json
{
    "[rust]": {
        "editor.formatOnSave": true
    },
    "rust-analyzer.checkOnSave.command": "clippy"
}
```

* 依赖安全：[cargo-audit](https://github.com/RustSec/cargo-audit), [cargo-outdated](https://github.com/kbknapp/cargo-outdated)

* 额外推荐：[mold](https://github.com/rui314/mold)（一款现代链接器）, [sccache](https://github.com/mozilla/sccache)
  （编译缓存）

## Rust 实际开发

这个阶段是最难熬的，除了善用[搜索引擎](https://en.wikipedia.org/wiki/Comparison_of_web_search_engines)
和 [Stack Overflow](https://stackoverflow.com)，这里再增加一些参考资源：

* [std](https://doc.rust-lang.org/stable/std/): Rust 标准库
* [crates.io](https://crates.io) 和 [docs.rs](https://docs.rs): 官方软件仓库及其在线文档
* [api guidelines](https://rust-lang.github.io/api-guidelines/): Rust API 风格指南
* [cheats.rs](https://cheats.rs): Rust 速查表

适应 Rust 特有的 `Ownership` 和 `Borrow Checker` 需要时间去磨合，根据项目需求着手一些实际的功能，模
仿和延伸接触到的 demo 或例子，关注数据结构、模块划分、错误处理、并发模型和设计模式，花上点心思不用多
久就能上手 Rust 开发。

## Rust 生态背景

我一直比较排斥孤立地看待一门编程语言，了解这门语言所围绕的生态，认识它的历史背景和演进过程，这对你长
期的技术成长大有裨益。比如你可能不知道 Rust 最初也支持 [M:N (hybrid) threading model](https://rust-lang.github.io/rfcs/0230-remove-runtime.html)，
以及 Go 语言和 [Plan 9](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs) 之间惊人的联系。

下面是我推荐的一些信息来源：

* [Rust Blog](https://blog.rust-lang.org)
* [Releases](https://github.com/rust-lang/rust/blob/master/RELEASES.md), [RFCs](https://rust-lang.github.io/rfcs/)
* [This Week in Rust](https://this-week-in-rust.org) [^3]
* [GitHub](https://github.com), [Hacker News](https://news.ycombinator.com), [LWN](https://lwn.net)

## Rust 进阶

不管最终能达到什么深度，只要是坚持涉猎都值得被认可：

* 源码阅读: [rust](https://github.com/rust-lang/rust),
  [mio](https://github.com/tokio-rs/mio)/[io-uring](https://github.com/tokio-rs/io-uring)/[aya](https://github.com/aya-rs/aya),
  [tokio](https://github.com/tokio-rs/tokio)/[rayon](https://github.com/rayon-rs/rayon),
  [axum](https://github.com/tokio-rs/axum)/[tonic](https://github.com/hyperium/tonic),
  [tracing](https://github.com/tokio-rs/tracing)/[opentelemetry](https://github.com/open-telemetry/opentelemetry-rust)
* [reference](https://doc.rust-lang.org/stable/reference/): Rust 语言参考
* [nomicon](https://doc.rust-lang.org/stable/nomicon/): `The Dark Arts of Advanced and Unsafe Rust
  Programming`
* 网络协议：[Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html)

## 写在最后

技术圈里没有事物是完美的，Rust 同样也不是 [Silver Bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet) ——
*Safe Rust* 并不能避免死锁、竞争条件、内存泄漏，而且 *Unsafe Rust* 的可靠性依赖于人为约束，*Sync
Rust* 和 *Async Rust* 分化的生态具有迷惑性，但很多技术都得看场景和环境，不要陷入无谓的语言之争。

我用一句古文结束这篇博客：

**“它山之石，可以攻玉”**

---

[^1]: Rust 吉祥物 [Ferris](https://rustacean.net)

[^2]: TOML 文件格式支持, 可选

[^3]: 往期也可以回顾，里面有不少精华内容
