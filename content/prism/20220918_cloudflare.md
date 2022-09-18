+++
date = "2022-09-18"
title = "Cloudflare Blog: How we built Pingora, the proxy that connects Cloudflare to the Internet"
+++

> NGINX worker/process architecture limitations:
> * each request can only be served by a single worker: unbalanced load across all CPU cores,
>   requests that do CPU heavy or blocking IO tasks can slow down other requests
> * the connection pool is per worker: poor connection reuse, connection reuse ratio gets worse when
>   scale up
>
> At Cloudflare, we handle traffic across the entire Internet. We have many cases of bizarre and
> non-RFC compliant HTTP traffic that we have to support. This is a common dilemma across the HTTP
> community and web, where there is tension between strictly following HTTP specifications and
> accommodating the nuances of a wide ecosystem of potentially legacy clients or servers. Picking
> one side can be a tough job.
>
> In order to satisfy the requirements of Cloudflare's position in the HTTP ecosystem, we needed a
> robust, permissive, customizable HTTP library that can survive the wilds of the Internet and
> support a variety of noncompliant use cases. The best way to guarantee that is to implement our
> own.
>
> We chose multithreading over multiprocessing in order to share resources, especially connection
> pools, easily.

[Link](https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/)
