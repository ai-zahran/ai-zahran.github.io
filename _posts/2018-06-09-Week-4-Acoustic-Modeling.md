---
layout: post
title:  "Week 4: Acoustic Modeling"
date:   2018-06-09 00:00:00 +0200
categories: jekyll update
tags: speech arabic gsoc redhenlab acoustic-model kaldi
published: True
---

Fourth week coding my Google Summer of Code [project](https://summerofcode.withgoogle.com/projects/#5542722241298432) with [Red Hen Lab](www.redhenlab.org/). Obtaining the data turned out to be a bit tricker than I thought (due to some license issues). Nevertheless, I continued to work on a subset of the data that I already had locally.

My mentors were generous enough to help me reach out to multiple organizations to get additional data. Hope we will obtain a sufficient amount of data soon enough. 

## Data preparation

I used the helpful scripts from Kaldi's [wsj](https://github.com/kaldi-asr/kaldi/tree/6eebc04825c43c5fdc369e0a520b8c2adbc33473/egs/wsj) example, located in *steps* and *utils* subdirectories. I started through extracting [MFCC's](https://en.wikipedia.org/wiki/Mel-frequency_cepstrum) for the whole data set using Kaldi's `steps/make_mfcc.sh`.

To split the data into training and test directories, `utils/subset_data_dir.sh` was used with the  `--speakers` flag to extract roughly 20% of the data for testing. I wrote a Python script called [remove\_test\_speakers.py](https://github.com/ai-zahran/arabic_asr_and_di/blob/dev/arabic_asr/language_modeling/utils/remove_test_speakers.py) to remove any utterances by speakers in the test set from the training set.

The first step in the recipe proposed by Smit et al. [1] was to extract the shortest 10000 utterances from the training data, so `utils/subset_data_dir.sh` was used with the  `--shortest` flag to extract the shortest 10000 utterances. Cepstral mean and variance normalization ([CMVN](https://en.wikipedia.org/wiki/Cepstral_mean_and_variance_normalization)) was performed on the data using `steps/compute_cmvn_stats.sh`.


## Language model

[variKN](https://github.com/vsiivola/variKN) [2] was used to prepare the n-gram language model. The `varigram_kn` command was used to incrementally grow a Kneser-Ney smoothed n-gram model, with the threshold for accepting new n-grams set to **0.001**, and the pruning treshold responsible for removing the least useful n-grams set to **0.25**.

This process produced and [ARPA](http://www1.icsi.berkeley.edu/Speech/docs/HTKBook3.2/node213_mn.html) n-gram language model. To produce a finite state transducer from this file, Kaldi's `arpa2fst` program was used.

## Acoustic model
Done with the language model (at least for now), next phase was to build the acoustic model. The first model built was a monophone Gaussian mixture model (GMM). This model was built using the shortest 10000 utterances extracted earlier. Kaldi's `steps/train_mono.sh` was used for training this model.

Using the alignments from this model (extracted with `steps/align_si.sh`), a tri-phone GMM was built using `steps/train_deltas.sh`. The alignments from this model were used to build a new tri-phone GMM on top of features transformed with Linear Discriminant Analysis (LDA). `steps/train_lda_mllt.sh` was used for this step. After that, alignments from this last model were used to build a Spearker Adaptive Training (SAT) tri-phone GMM using `steps/train_sat.sh`.

After building this last system, `steps/cleanup/clean_and_segment_data.sh` was used to clean the training data based on the acoustic and language models trained so far.
The resulting data was used to build a new SAT GMM with the alignments from the last model, extracted with `steps/align_fmllr.sh`.

## Coming up
Next step will involve extracting i-vectors and training the TDNN.
There will also be a follow-up post detailing the setup process of Kaldi on the Case HPC. Stay tuned!


### **References**

[1] P. Smit, S. Gangireddy, S. Enarvi, S. Virpioja, and M. Kurimo, "Aalto system for the 2017 Arabic multigenre brodcast challenge," in *ASRU*, 2017.

[2] Vesa Siivola, Teemu Hirsimäki and Sami Virpioja,
"On Growing and Pruning Kneser-Ney Smoothed N-Gram Models", IEEE
Transactions on Speech, Audio and Language Processing,
15(5):1617-1624, 2007