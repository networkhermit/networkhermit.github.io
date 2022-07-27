+++
date = "2022-07-27"
title = "WireGuard Interworkings: Routing & Network Namespace Integration"
+++

> **Routing All Your Traffic**
>
> * The Classic Solutions
>
> Overriding The Default Route
> ```bash
> ip route add 0.0.0.0/1 dev wg0
> ip route add 128.0.0.0/1 dev wg0
> ip route add 163.172.161.0/32 via 192.168.1.1 dev eth0
> ```
>
> Rule-based Routing
> ```bash
> wg set wg0 fwmark 1234
> ip route add default dev wg0 table 2468
> ip rule add not fwmark 1234 table 2468
> ip rule add table main suppress_prefixlength 0
> ```
>
> * The New Namespace Solution
> ```bash
> ip netns add physical
>
> ip link set eth0 netns physical
> iw phy phy0 set netns name physical
>
> ip -n physical link add wg0 type wireguard
>
> ip -n physical link set wg0 netns 1
>
> ip netns exec physical dhcpcd wlan0
> ip netns exec physical wpa_supplicant -iwlan0 -c/etc/wpa_supplicant/wpa_supplicant.conf
> ip -n physical addr add 192.168.12.52/24 dev eth0
>
> wg setconf wg0 /etc/wireguard/wg0.conf
> ip addr add 10.2.4.5/32 dev wg0
> ip link set wg0 up
> ip route add default dev wg0
> ```

[Link](https://www.wireguard.com/netns/)

[Container Networking Is Simple](https://iximiuz.com/en/posts/container-networking-is-simple/)
