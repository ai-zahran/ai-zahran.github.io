---
layout: post
title:  "Week 4: Acoustic Modeling"
date:   2018-06-09 00:00:00 +0200
categories: jekyll update
tags: speech arabic gsoc redhenlab acoustic-model kaldi
published: True
---

Fourth week coding my Google Summer of Code [project](https://summerofcode.withgoogle.com/projects/#5542722241298432) with [Red Hen Lab](www.redhenlab.org/).

Obtaining the data turned out to be a bit tricker than I thought (due to license issues). Nevertheless, I continued to work on a subset of the data that I already had locally.

## Data Preparation

I used the helpful scripts from Kaldi's [wsj](https://github.com/kaldi-asr/kaldi/tree/6eebc04825c43c5fdc369e0a520b8c2adbc33473/egs/wsj) example, located in *steps* and *utils* subdirectories. I started through extracting [MFCC's](https://en.wikipedia.org/wiki/Mel-frequency_cepstrum) for the whole data set using Kaldi's `steps/make_mfcc.sh`.

To split the data into training and test directories, `utils/subset_data_dir.sh` was used with the  `--speakers` flag to extract roughly 20% of the data for testing. I wrote a Python script called [remove_test_speakers.py](https://github.com/ai-zahran/arabic_asr_and_di/blob/dev/arabic_asr/language_modeling/utils/remove_test_speakers.py) to remove utterances by speakers in the test set from the training set.

The first step in the recipe proposed by Smit et al. [1] is to extract the shortest 10000 utterances from the training data, so `utils/subset_data_dir.sh` was used with the  `--shortest` flag to extract the shortest 10000 utterances. Cepstral mean and variance normalization ([CMVN](https://en.wikipedia.org/wiki/Cepstral_mean_and_variance_normalization)) was performed on the data using `steps/compute_cmvn_stats.sh`.


## Language Model

To prepare the language model, variKN was used.

### **References**

[1] P. Smit, S. Gangireddy, S. Enarvi, S. Virpioja, and M. Kurimo, “Aalto system for the 2017 Arabic multigenre brodcast challenge,” in *ASRU*, 2017.