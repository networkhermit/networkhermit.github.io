+++
date = "2024-08-31"
title = "Netflix Technology Blog: Investigation of a Cross-regional Network Performance Issue"
+++

> Simply put, **the TCP receive window is how the receiver tells the sender “This is how many bytes
> you can send me without me ACKing any of them”.**

> In short, **the receive window size halved after the kernel upgrade. Hence the throughput was cut in
> half, causing the data transfer time to double.**

> While it technically wasn’t the “network” to blame, this time it turned out the culprit was the
> software components that make up the network (i.e. the TCP implementation in the kernel).

[Link](https://netflixtechblog.com/investigation-of-a-cross-regional-network-performance-issue-422d6218fdf1)
