---
layout: post
title: "Arabic ASR and DI (Red Hen Lab - GSoC 2018)"
date: 2018-08-13 00:00:00 +0200
categories: jekyll update
tags: gsoc redhenlab dialect-identification arabic
published: True
---

# Welcome to the Arabic ASR and DI project!

In this post, we will summarize the work done on Arabic speech recognition and Arabic dialect identification projects for RedHenLab as part of GSoC 2018. Each of the projects is explained in more detail in a separate post.

## [Arabic Speech Recognition]({{ site.baseurl }}{% post_url 2018-08-13-Arabic-ASR %})

The Arabic speech recognition project builds upon the work done by the Aalto team in the MGB-3 2018 challenge for Arabic speech recognition [1]. The project builds multiple GMM's sequentially, using alignments from each GMM to train the next, then moves to extracting i-vectors and training a TDNN using the extracted features and i-vectors.
The models were trained on the Gale Arabic conversation speech data set, which [UPenn's LDC](https://www.ldc.upenn.edu/) kindly provided for the purpose of this GSoC project.
Check this [post]({{ site.baseurl }}{% post_url 2018-08-13-Arabic-ASR %}) for more information about the project.

### Work yet to be done

The output of the recognizer is currently falling for the complex morphology of the Arabic language. The solution lies mainly within language modeling and adaptation to Dialectic Arabic. These will be the next steps for this project.

## [Arabic Dialect Identification]({{ site.baseurl }}{% post_url 2018-08-13-Arabic-DI %})

The work done on Arabic dialect identification builds upon the work done by the MIT-QCRI team on the MGB-3 Arabic dialect identification challenge [2]. The project uses i-vectors extracted for the utterances to predict the dialect of the utterance using one of two methods:

 - Cosine-distance scoring (CDS)
 - A Siamese neural network

Check this [post]({{ site.baseurl }}{% post_url 2018-08-13-Arabic-DI %}) for more details about the project.

### Work yet to be done

 - To maximize the performance, the authors suggested merging the output of both classifiers. Furthermore, other feature types should be explored, especially phonemic features.

## Timeline

 For specific checkpoints within the timeline of the project, you can check the following blog posts:
 
 - [Spending this summer in GSoC with Red Hen Lab]({{ site.baseurl }}{% post_url 2018-05-08-Spending-this-summer-in-GSoC-with-Red-Hen-Lab %})
 - [Week 1: Language Modeling]({{ site.baseurl }}{% post_url 2018-05-14-Week-1-Language-Modeling %})
 - [Week 4: Acoustic Modeling]({{ site.baseurl }}{% post_url 2018-06-09-Week-4-Acoustic-Modeling %})
 - [Week 5: Case HPC]({{ site.baseurl }}{% post_url 2018-06-17-Week-5-Case-HPC %})
 - [Week 7: Dialect Identification]({{ site.baseurl }}{% post_url 2018-06-28-Week-7-Dialect-Identification %})
 - [Week 7 (Cont.): Arabic Speech Data]({{ site.baseurl }}{% post_url 2018-06-30-Week-7-Arabic-Speech-Data %})
 - [Week 8: Gale Arabic on Case HPC]({{ site.baseurl }}{% post_url 2018-07-09-Week-8-Gale_Arabic_on_Case_HPC %})
 - [Weeks 9 & 10: Dialect Identification Base]({{ site.baseurl }}{% post_url 2018-07-25-Weeks-9&10-Dialect-Identification-Base %})
 
 ## Acknowledgement
 
A huge thanks goes to my GSoC mentors, Professor Mark Turner, Professor Ahmed Abdel-Fattah, Professor Michael Pacchioli and all the Red Hen Lab contributors who were very helpful and supportive throughout the project.


# References

[1] P. Smit, S. Gangireddy, S. Enarvi, S. Virpioja, and M. Kurimo, "Aalto system for the 2017 Arabic multigenre brodcast challenge," in ASRU, 2017.

[2] Ali, A., Dehak, N., Cardinal, P., Khurana, S., Yella, S.H., Glass, J., Bell, P., Renals, S. (2016) Automatic Dialect Detection in Arabic Broadcast Speech. Proc. Interspeech 2016, 2934-2938.
