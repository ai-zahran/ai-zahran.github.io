---
layout: post
title: "Weeks 9 & 10: Dialect Identification Base"
date: 2018-07-25 00:00:00 +0200
categories: jekyll update
tags: gsoc redhenlab dialect-identification arabic
published: True
---

In Weeks 9 and 10, I continued to work on the speech recognition system, while working in parallel in the dialect identification task.

For the speech recognition task, I finished training the Time Delay Neural Network (TDNN) locally, and left the training process to continue on Case HPC. I am goind to write a follow-up post to detail the TDNN building process.

For the dialect identification task, I implemented the Siamese neural network and the dialect enrollment algorithm. I will talk about these algorithms in this post.

## Dialect Enrollment
Dialect enrollment is obtained through computing a model called the *i-vector dialect model* for each dialect. This model is computed through the following equation.

$$\overline{w_d} = \frac{1}{d}\sum_{i=1}^{n_d}{w_i^d}$$

where $w_i^d$ is the i-vector of utterance $i$ belonging to dialect $d$, and $n_d$ is the number of utterances belonging to dialect $d$.

### Interpolation

In order to manifest the in-domain development data for the purpose of adaptation, the authors used a simple interpolation approach, with a tunable hyper-parameter $\gamma$:

$$\overline{w_d^{Inter}} = (1-\gamma )\overline{w_d^{TRN}} + \gamma {\overline{w_d^{DEV}}}$$

The authors reported 0.83 as the value for $\gamma$ achieving the best performance on the test set.

## Siamese Neural Network