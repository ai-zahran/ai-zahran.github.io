---
layout: post
title: "Weeks 9 & 10: Dialect Identification Base"
date: 2018-07-25 00:00:00 +0200
categories: jekyll update
tags: gsoc redhenlab dialect-identification arabic
published: True
---

In Weeks 9 and 10, I continued to work on the speech recognition system, while working in parallel in the dialect identification task.

## TDNN

For the speech recognition task, I finished training the [Time Delay Neural Network (TDNN)](https://github.com/ai-zahran/arabic_asr_and_di/blob/dev/arabic_asr/local/nnet3/run_tdnn.sh) locally, and left the training process to run on Case HPC. The TDNN uses LDA-based i-vectors and MFCC's.

Next step will be adapting the model to the development data in dialectic Arabic.

## Arabic DI
For the dialect identification task, I implemented the [Siamese neural network](https://github.com/ai-zahran/arabic_asr_and_di/blob/arabic_di/arabic_dialect_identification/dialect_enrollment.py) and the [dialect enrollment algorithm](https://github.com/ai-zahran/arabic_asr_and_di/blob/arabic_di/arabic_dialect_identification/dialect_enrollment.py). The authors reported 0.83 as the interpolation parameter value achieving the best accuracy. For the training process, the authors used a random sampling approach to form the training examples, where each example includes an i-vector of an utterance, a dialect model for a certain dialect, and a label that details whether they are a match or a mismatch.

Next step will be to implement *length normalization* and *recursive-whitening* 