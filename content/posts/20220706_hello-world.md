+++
date = "2022-07-06"
title = "致敬 hello, world"
+++

## 前言

和大学同学聊天偶然提到写博客，我决定试着写写看。由于平时工作比较忙，所以不太有时间写专业性很强的长篇
内容，博客会以记录和分享为主，记录自己的学习过程，也顺便练习下表达能力。

为了方便管理，我选择借助 [Zola](https://github.com/getzola/zola) 以 [Markdown](https://en.wikipedia.org/wiki/Markdown)
格式组织博客，网站主题基于 [Apollo](https://github.com/not-matthias/apollo)，代码高亮主题为 [Nord](https://github.com/arcticicestudio/nord)，
博客目前托管在 [GitHub Pages](https://pages.github.com) 上。

## 代码高亮效果

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

> If you’re thinking without writing, you only think you’re thinking. - Leslie Lamport
