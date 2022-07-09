+++
date = "2022-07-06"
title = "致敬 hello, world"
+++

# 前言

和大学同学聊天偶然提到写博客，我决定尝试写写看。由于平时工作比较忙，所以不太有时间写专业性很强的长篇内容，博客主要会以原创和分享为主，记录自己的学习过程，也顺便练习下表达能力。

为了管理简单，我选择用 [Zola](https://github.com/getzola/zola) 以 [Markdown](https://en.wikipedia.org/wiki/Markdown) 格式编写博客，模板用的是 [apollo](https://github.com/not-matthias/apollo)，代码高亮主题为 [Nord](https://github.com/arcticicestudio/nord)，目前博客托管在 [GitHub Pages](https://pages.github.com) 上。

## 代码高亮效果展示

### Go

```go
package main

import "fmt"

func sayHello() {
	fmt.Println("hello, world")
}

func main() {
	sayHello()
}
```

### Rust

```rust
fn say_hello() {
    println!("hello, world");
}

fn main() {
    say_hello();
}
```

### Python

```python
def say_hello() -> None:
    print("hello, world")


def main() -> None:
    say_hello()


if __name__ == "__main__":
    main()
```

## 写在最后

> You were there at the beginning of this journey, I wish you’d been able to see
> the end.
