+++
date = "2022-09-12"
title = "Isovalent Blog: Addressing Bandwidth Exhaustion with Cilium Bandwidth Manager & The Rise of Kubernetes and the End of Networking & Security as You Know It. What’s Next?"
+++

> Since inception, part of the core characteristics of Kubernetes have been its outstanding
> orchestration and scheduling capabilities. By nature, resources available to the pods are shared
> resources and preventing compute starvation is critical. But if we are capable of preventing
> compute starvation, shouldn’t we also prevent *network* starvation?
>
> ---
>
> * Cilium removes the need for an IFB (Intermediate Functional Block), therefore reducing the
>   latency that was introduced with the CNI plugin implementation
> * Cilium leverages multi-core and multi queue capabilities, ensuring rate-limiting is not
>   detrimental to performances
> * Cilium leverages state-of-the-art and optimal congestion avoidance technologies like Earliest
>   Departure Time and Timing Wheel to reduce latency.
>
> ---
>
> Now – platform operators don’t always care *how* it’s done – they want to know 1) if it works and
> 2) if it’s easy to operate.
>
> ---
>
> A typical netperf test is called TCP_STREAM and goes from the netperf client to the netperf
> server. Therefore a stream from the netperf server to the client will be STREAM backwards –
> MAERTS. This is how servers typically operate, with larger data flows going from server to client.

[Addressing Bandwidth Exhaustion with Cilium Bandwidth Manager](https://isovalent.com/blog/post/addressing-bandwidth-exhaustion-with-cilium-bandwidth-manager/)

---

> In a few short years, Kubernetes has gone from being a “bleeding edge tech” to the “new enterprise
> standard” for how modern applications are built and operated. Enterprises and telcos are now past
> the initial “Day 1” challenges (e.g., “which Kubernetes distro do I run?”) and are in the deeper
> “Day 2” challenges, with a major focus on how they scalably connect, secure, and observe the
> connectivity between these modern API-driven applications.
>
> ---
>
> As organizations look for the best way to solve these challenges on modern Kubernetes platforms
> the most obvious technical requirements are:
> * Highly distributed & efficient processing to handle the explosion of east-west communication
>   (centralized devices become bottlenecks and per-workload “sidecar proxies” are too heavyweight).
> * Workload identity and API-layer visibility as a first-class construct for both zero-trust
>   security and observability (since IPs and ports are nearly meaningless in a Kubernetes
>   environment).
> * Configurable via standardized and automation-friendly APIs (e.g., Kubernetes CRDs such as
>   Services, Ingress, NetworkPolicy).
> * Integrates with legacy networks and legacy workloads running outside of Kubernetes.

[The Rise of Kubernetes and the End of Networking & Security as You Know It. What’s Next?](https://isovalent.com/blog/post/isovalent-series-b/)
