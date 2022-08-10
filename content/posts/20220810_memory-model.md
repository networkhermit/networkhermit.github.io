+++
date = "2022-08-10"
draft = true
title = "Go: 认识内存一致性模型"
+++

## 前言

memory consistency model: contract

hardware <-> compilers <-> programmers

## 参考资料

* [Memory Models](https://research.swtch.com/mm)
  1. [Hardware Memory Models](https://research.swtch.com/hwmm)
  2. [Programming Language Memory Models](https://research.swtch.com/plmm)
  3. [Updating the Go Memory Model](https://research.swtch.com/gomm)
* [The Go Memory Model](https://go.dev/ref/mem)

## 简单记录

### 硬件内存模型 (Symmetric multiprocessing)

* Sequential Consistency
* Total Store Order (TSO): `x86`
* Relaxed Consistency: `ARM`
* Weak Consistency: `RISC-V`
* Data-Race-Free Sequential Consistency (DRF-SC): turning point

### 编程语言内存模型 (Concurrency)

* DRF-SC: synchronizing instructions + happens-before relation
* atomics
  * non-synchronizing
    * relaxed
  * synchronizing
    * sequentially consistent
    * acquire/release (weak)
* memory barriers/fences
* synchronization operations
  * semaphore
  * spinlock
  * barrier
  * mutex
  * readers–writer lock
  * condition variable
  * monitor
  * channel
  * read-copy-update
* semantics for racy programs
  * defines the behavior and possible results
  * as undefined behavior: DRF-SC or Catch Fire
* document disallowed compiler optimizations
* disallow out-of-thin-air values

### 原子指令

* compare-and-swap (CAS)
* load-linked/store-conditional (LL/SC)/load-reserved/store-conditional (LR/SC)

## 写在最后

> When it comes to programs with races, both programmers and compilers should remember the advice: don't be clever.
