+++
date = "2023-09-01"
title = "Linux Journal: Remotely Wipe a Server"
+++

> With Linux, I've always felt that I was limited only by my own programming and problem-solving
> abilities, no matter what problem presented itself.

```bash
sudo -i
cd /dev/shm
shred -n2 -z -v /dev/vda
echo 1 > /proc/sys/kernel/sysrq
echo o > /proc/sysrq-trigger
```

[Link](https://www.linuxjournal.com/content/remotely-wipe-server)
