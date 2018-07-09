---
layout: post
title:  "Week 8: Gale Arabic on Case HPC"
date:   2018-07-09 00:00:00 +0200
categories: jekyll update
tags: gsoc redhenlab speech-recogniton arabic hpc
published: True
---

It's week 8 of my GSoC [project](https://summerofcode.withgoogle.com/projects/#5542722241298432) with [Red Hen Lab](www.redhenlab.org/). As mentioned in an earlier [post](https://ai-zahran.github.io/jekyll/update/2018/06/16/Week-5-Case-HPC.html), running the system on Case HPC is one of the main goals of this GSoC project. I managed to install Kaldi earlier on Case HPC using a Singularity image. This week, I prepared the data from *GALE Phase 2 Arabic Broadcast Conversation* and started the training process on Case HPC.

## The Gale Arabic corpus
In my last [post](https://ai-zahran.github.io/jekyll/update/2018/06/29/Week-7-Arabic-Speech-Data.html), I mentioned that the transcript data is written in Arabic, in utf-8 format. To input the data to Kaldi, I wrote a Python script called [ldc_corpus2kaldi_dir.py](https://github.com/ai-zahran/arabic_asr_and_di/blob/dev/arabic_asr/utils/ldc_corpus2kaldi_dir.py) to build the Kaldi data directory using the transcripts files from Gale Arabic, and a shell script, [prepare_data_dir.sh](https://github.com/ai-zahran/arabic_asr_and_di/blob/dev/arabic_asr/local/prepare_data_dir.sh) to handle accumulating the data produced from running the script on all the transcript files into the Kaldi directory. The script handles the conversion from utf-8 using the Buckwalter transliteration. With some experimentation with Kaldi, I got the script to output the data directory in the appropriate format. I am currently running the training process on the Case HPC step-by-step.

## TDNN training
In parallel, I started the TDNN training process locally on my home machine. I used the [TED-LIUM Kaldi recipe](https://github.com/kaldi-asr/kaldi/blob/master/egs/tedlium/s5_r2/local/nnet3/tuning/run_tdnn_1b.sh), which is the default TDNN recipe at the time of writing. The recipe starts with training an i-vector extractor on top of an LDA-MLLT system. This system is used for training the TDNN.

## Coming up
While the process completes, I am planning to go further into the Arabic dialect identification task through experimenting with the tools from QCRI's [baseline](https://github.com/qcri/dialectID).