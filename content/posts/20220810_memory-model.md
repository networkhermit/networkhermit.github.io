+++
date = "2022-08-10"
draft = true
title = "Go: 认识内存一致性模型"
+++

## 前言

memory model
* address space layout
* memory layout
* memory ordering
* memory segmentation

memory consistency model: two-layer contract
* hardware <-> compilers <-> programmers
* the main issue is the visibility and consistency of changes to data stored in memory

*valid optimizations do not change the behavior of valid programs*
* processor optimizations: out-of-order execution
* compiler optimizations: reorder operations

## 参考资料

* [Memory Models](https://research.swtch.com/mm)
  1. [Hardware Memory Models](https://research.swtch.com/hwmm)
  2. [Programming Language Memory Models](https://research.swtch.com/plmm)
  3. [Updating the Go Memory Model](https://research.swtch.com/gomm)
* [The Go Memory Model](https://go.dev/ref/mem)

## 笔记整理

### Data Race, Happens-before

> Every race involves at least one write: two uncoordinated reads do not race with each other.

> The total order over all the synchronizing operations is separate from the happens-before relationship. It is *not* true that there is a happens-before edge in one direction or the other between every lock, unlock, or volatile variable access in a program: you only get a happens-before edge from a write to a read that observes the write.

### 硬件内存模型 (Symmetric multiprocessing)

* Sequential Consistency: the ideal model
* Total Store Order (TSO): `x86`
* Weak Consistency: `RISC-V`
* Relaxed Consistency: `ARM`
* Data-Race-Free Sequential Consistency (DRF-SC): current consensus

> The gap between what is allowed and what is observed makes for unfortunate future surprises: hardware implementing a stronger model than technically guaranteed encourages dependence on the stronger behavior and means that future, weaker hardware will break programs, validly or not.

### 编程语言内存模型 (Concurrency)

> All modern hardware guarantees coherence, which can also be viewed as sequential consistency for the operations on a single memory location. It turns out that, because of program reordering during compilation, modern languages do not even provide coherence.

> Coherence is easier for hardware to provide than for compilers because hardware can apply dynamic optimizations: it can adjust the optimization paths based on the exact addresses involved in a given sequence of memory reads and writes. In contrast, compilers can only apply static optimizations: they have to write out, ahead of time, an instruction sequence that will be correct no matter what addresses and values are involved.

> *Threads Cannot Be Implemented As a Library*: languages cannot be silent about the semantics of multithreaded execution.

* DRF-SC
  * happens-before relation through synchronization operations
  * total order with interleaved execution
* atomics
  * non-synchronizing
    * relaxed: for hiding races
  * synchronizing (message receive/message send)
    * sequentially consistent (strong)
    * acquire/release (weak): coherence-only
* memory barriers/fences
* high-level synchronization mechanisms
  * semaphore
  * spinlock
  * barrier
  * mutex
  * readers–writer lock
  * condition variable
  * monitor
  * channel
  * atomic reference counting
  * once
  * read-copy-update
* semantics for racy programs
  * defines the behavior and possible results
  * as undefined behavior: DRF-SC or Catch Fire
* distinguish between allowed and disallowed compiler optimizations
* handle paradoxes like acausality/out-of-thin-air values

### 关键原子指令

* read–modify–write
* compare-and-swap (CAS)
* load-linked/store-conditional (LL/SC) / load-reserved/store-conditional (LR/SC)
* load-acquire/store-release (LDAR/STLR)

## 写在最后

> When it comes to programs with races, both programmers and compilers should remember the advice: don't be clever.
