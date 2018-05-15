---
layout: post
title:  "Week 1: Language Modeling"
date:   2018-05-14 00:00:00 +0200
categories: jekyll update
tags: speech arabic gsoc redhenlab language-model varikn
published: True
---

This is my first week coding my Google Summer of Code [project](https://summerofcode.withgoogle.com/projects/#5542722241298432) with [Red Hen Lab](www.redhenlab.org/). My first task will be preparing the language model to use for decoding.

<!--# Theoretical background

## What is a language model?

### What is lattice rescoring?
-->

## Aalto system's language model

### Baseline system: n-gram model

For the baseline, we will use *[VariKN](https://github.com/vsiivola/variKN)* [1] to train an n-gram model. The authors of the Aalto system [2] trained an n-gram model with **8 million n-gram contexts** (they tuned the pruning parameters to reach this number of n-gram contexts). More than **7 million** of the contexts were of order three or lower.

The lexicon we will use for decoding is grapheme-based.

### Improving the Language Model: The RNNLM

The second task will be to improve the language modeling component. To do this, we will train a *recurrent neural network language model (RNNLM)* using [TheanoLM](https://github.com/senarvi/theanolm) [3]. This model is to be used for lattice rescoring.
<!--include definition of RNNLM here-->

### The RNNLM architecture

The authors proposed the following architecture for the RNNLM.

|Module|Characteristics|
|---|---|
| Projection layer | <ul><li>**200 neurons** for character and subword models</li><li>**300 neurons** for the word model</ul> |
| A hidden LSTM layer | <ul><li>**1000 neurons** for charachter and subword models</li><li>**1500 neurons** for word model</ul> |
| Output layer|<ul><li>Uses **Softmax** activation function</li><li>Layer size depends vocabulary size</li><li>Thus, words and subwords have to be grouped into classes using **the exchange word clustering algorithm** (the authors used 2000 classes)</li>|
| Training method | **Backpropagation** |
| Optimization algorithm | **Adagrad** |
| Minibatch size | <ul><li>**64** for character and subword models</li><li> **32** for word models</li></ul> |
| Sequence length for each minibatch | <ul><li>**100** for character model</li><li>**50** for sub-word model</li><li>**25** for word model</li></ul> |
| Initial learning rate | **0.1** |
| Dropout rate | **0.2** |
| Maximum number of iterations | **15** |


**So, Wish us luck!**

### **References**


[1] Vesa Siivola, Teemu Hirsimaki, and Sami Virpioja, “On growing and pruning Kneser-Ney smoothed n-gram models,” in *IEEE Transactions on Audio, Speech & Language
Processing*, vol. 15, no. 5, pp. 1617–1624, 2007.

[2] P. Smit, S. Gangireddy, S. Enarvi, S. Virpioja, and M. Kurimo, “Aalto system for the 2017 Arabic multigenre brodcast challenge,” in *ASRU*, 2017.

[3] Seppo Enarvi and Mikko Kurimo, “TheanoLM an extensible toolkit for neural network language modeling,” in INTERSPEECH 2016 – *17th Annual Conference of the International Speech Communication Association,* San Francisco, September 2016, pp. 3052–3056.