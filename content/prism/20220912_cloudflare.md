+++
date = "2022-09-12"
title = "Cloudflare Blog: The story of one latency spike & The revenge of the listening sockets"
+++

> Using a large chunk of receive buffer space for the metadata is not really what the programmer
> wants. To counter that, when the socket is under memory pressure complex logic is run with the
> intention of freeing some space. One of the operations is `tcp_collapse` and it will merge
> adjacent TCP packets into one larger `sk_buff`. This behavior is pretty much a garbage collection
> (GC)—and as everyone knows, when the garbage collection kicks in, the latency must spike.

[The story of one latency spike](https://blog.cloudflare.com/the-story-of-one-latency-spike/)

> You can't have a very large number of bound TCP sockets and we learned that the hard way. We
> learned a bit about the Linux networking stack: the fact that `LHTABLE` is fixed size and is
> hashed by destination port only.

[The revenge of the listening sockets](https://blog.cloudflare.com/revenge-listening-sockets/)
