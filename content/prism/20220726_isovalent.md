+++
date = "2022-07-26"
title = "Isovalent Blog: Cilium Service Mesh – Everything You Need to Know"
+++

> Looking at the feature set of a service mesh today, it can be summarized as follows:
>
> * **Resilient Connectivity**: Service to service communication must be possible across boundaries such as clouds, clusters, and premises. Communication must be resilient and fault tolerant.
>
> * **L7 Traffic Management**: Load balancing, rate limiting, and resiliency must be L7-aware (HTTP, REST, gRPC, WebSocket, …).
>
> * **Identity-based Security**: Relying on network identifiers to achieve security is no longer sufficient, both the sending and receiving services must be able to authenticate each other based on identities instead of a network identifier.
>
> * **Observability & Tracing**: Observability in the form of tracing and metrics is critical to understanding, monitoring, and troubleshooting application stability, performance, and availability.
>
> * **Transparency**: The functionality must be available to applications in a transparent manner, i.e. without requiring to change application code.

> **eBPF-Native When Possible**
>
> If eBPF is not capable of processing the request, for example when connections need to be spliced, requests need to be rate-limited, or TLS termination is required, the handling falls back to Envoy running in either a sidecar or sidecar-free model. This gives the best of both worlds – eBPF processing when possible for increased performance and reduced latency, with the ability always to fall back to Envoy as needed.

> **mTLS for Any Network Protocol**
>
> By splitting the authentication handshake from the payload transport, we can use TLS 1.3 as the handshake protocol while relying on IPsec or WireGuard as a better-performing, more transparent payload channel.

[Link](https://isovalent.com/blog/post/cilium-service-mesh/)

[How eBPF will solve Service Mesh – Goodbye Sidecars](https://isovalent.com/blog/post/2021-12-08-ebpf-servicemesh/)

[Next-Generation Mutual Authentication with Cilium Service Mesh](https://isovalent.com/blog/post/2022-05-03-servicemesh-security/)
