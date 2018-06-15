---
layout: post
title:  "Week 5: Acoustic Modeling"
date:   2018-06-15 00:00:00 +0200
categories: jekyll update
tags: gsoc redhenlab hpc singularity slurm
published: True
---

Hello!
This is my fifth week coding my Google Summer of Code [project](https://summerofcode.withgoogle.com/projects/#5542722241298432) with [Red Hen Lab](www.redhenlab.org/). One of the goals of this project is to implement the code on [Case HPC](https://sites.google.com/a/case.edu/hpc-upgraded-cluster/home), Case Western Reserve University's high performance computing system, and to run it on the Red Hen Arabic data set. In order to do so, I had to configure a Ubuntu [Singularity](https://singularity.lbl.gov/) image on the Case HPC and use it to install Kaldi.

## Singularity
Singularity is a containerization software designed with scientific computing and HPC's in mind. Its goal is to package workflows and libraries. It can also helps the user run a different operating system than the one on the host machine.
The way Singularity works is simple. The user creates the container locally and loads it with the necessary software, then transports it to the host and runs it.
Dealing with the host's storage is also very easy. When the Singularity container swaps the host's operating system, Singularity binds directories on the host back inside the container, so everything feels like $HOME.

## Setting up the Singularity container

## Coming up
In the next post, we will talk about the datasets we are going to use.

### **References**

[1] P. Smit, S. Gangireddy, S. Enarvi, S. Virpioja, and M. Kurimo, "Aalto system for the 2017 Arabic multigenre brodcast challenge," in *ASRU*, 2017.

[2] Vesa Siivola, Teemu Hirsimäki and Sami Virpioja,
"On Growing and Pruning Kneser-Ney Smoothed N-Gram Models", IEEE
Transactions on Speech, Audio and Language Processing,
15(5):1617-1624, 2007