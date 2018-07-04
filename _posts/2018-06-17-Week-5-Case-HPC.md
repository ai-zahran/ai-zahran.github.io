---
layout: post
title:  "Week 5: Case HPC"
date:   2018-06-17 00:00:00 +0200
categories: jekyll update
tags: gsoc redhenlab hpc singularity slurm
published: True
---

Hello!
This is my fifth week coding my Google Summer of Code [project](https://summerofcode.withgoogle.com/projects/#5542722241298432) with [Red Hen Lab](www.redhenlab.org/). One of the goals of this project is to implement the code on [Case HPC](https://sites.google.com/a/case.edu/hpc-upgraded-cluster/home), Case Western Reserve University's high performance computing system, and to run it on the Red Hen Arabic data set. In order to do so, I had to configure a Ubuntu [Singularity](https://singularity.lbl.gov/) image on the Case HPC and use it to install Kaldi.

## Singularity
Singularity is a containerization software designed with scientific computing and HPC's in mind. Its goal is to package workflows and libraries. It can also helps the user run a different operating system than the one on the host machine.
The way Singularity works is simple. The user creates the container locally and loads it with the necessary software, then transports it to the host and runs it.
Dealing with the host's storage is also very easy. When the Singularity container swaps the host's operating system, Singularity binds directories on the host back inside the container, so everything feels like **$HOME**.

## Setting up the Singularity container

To start, I copied a Singularity image from my mentor, Michael Pacchioli. This image already had Nvidia CUDA and cuDNN installed, so it saved a lot of time. However, CUDA binaries were not included in $PATH, so I had to run:

```bash
PATH=$PATH:/usr/local/cuda/bin
```
To run the image, I'd first have to request a node from the cluster using Slurm's `srun` command:

```bash
srun -p gpu -C gpuk40 --gres=gpu:1 --pty --mem=<memory_size> bash
```
where the `mem` option specifies the real memory size required per node in megabytes. I set this option to 4 GB using `--mem=4096`. This is necessary to compile Kaldi, as the some processes need lots of memory.

Then, I'd load the Singularity module:

```bash
module load singularity/2.5.1
```

and finally, I'd run a shell environment in the Singularity image:

```bash
singularity shell -w --nv <image_name>.img -H </path/to/new/home/>
```
The `--nv` flag allows Singularity to leverage the Nvidia GPU on the host machine. All it requires is a recent Nvidia driver on the host operating system.
The `-w` flag informs Singularity that the image should be writable, i.e.: changes made to the image in this session will be persistent.
The `-H` option specifies the directory Singularity will use as home (Singularity uses your */home/usr* directory as home by default).

### The main problem
Singularity does a great job at simplifying the process of installing new software. During the setup process on an HPC, the main problem is always caused by the fact that the user should not have superuser privileges, while package managers like *apt-get* and *yum* require superuser privileges to work. The user then has to contact the system admin, who handles the installation process.

Singularity solves this by encapsulating the user's environment in a container that the user can download as an image to a local PC where superuser privileges are obtained. The user can then access the image as superuser, install software locally, and upload it back to the HPC.

However, since Singularity shell cannot be run with superuser privileges unless the user has superuser privileges on the host machine, the user will always have to download and locally install software on the image. This does not pose a threat for high-bandwidth locations, but for a location with low bandwidth (like where I live), it's an overnight process. I'm still trying to figure out a solution for this problem. Local compression almost minimized the transfer time to half. Nonetheless, the installation process  sometimes becomes very iterative, which still requires a faster solution.

### Back to the setup process
As mentioned in the last section, I downloaded the image and installed necessary software. To make sure it was good, I used it to compile a local version of Kaldi. I also tested CUDA by running `cuda test`  for *cudamatrix* in Kaldi's *src* directory:

```bash
cude make test cudamatrix
```

Next, I uploaded the image to the HPC and ran it. While compiling Kaldi, I noticed the fact that Singularity inherits the host's environment variables. This made Kaldi unable to find **g++**, as **$CXX** gave the value **mpicxx**, so I had to set it manually.


## Coming up
In the next post, we will talk about the datasets we are going to use.
