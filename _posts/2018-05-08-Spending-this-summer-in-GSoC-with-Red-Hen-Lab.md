---
layout: post
title:  "Spending this summer in GSoC with Red Hen Lab"
date:   2018-05-09 00:00:00 +0200
categories: jekyll update
tags: speech arabic gsoc redhenlab
# published: False
---

![GSoC]({{ "/assets/images/GSoC.png" }})
![Red Hen Lab]({{ "/assets/images/red_hen_lab.png" }})

I am thrilled to announce that I will be participating in **[GSoC](https://summerofcode.withgoogle.com/)** this year with **[Red Hen Lab](www.redhenlab.org/)**. My mentors for this project will include Professor [Mark Turner](http://markturner.org/) and Professor [Ahmed Abdelfattah](https://shams.academia.edu/AhmedAbdelFattah), among others.

My project for this summer, titled [Arabic Speech Recognition and Dialect Identification](https://summerofcode.withgoogle.com/projects/#5542722241298432) will involve building a speech recognition system for dialectic Arabic, which we will use to transcribe the Television news broadcast captured by Red Hen in Egypt. It also includes building a system for Arabic dialect identification. To do both tasks, we intend to follow the architectures proposed by the winning teams in the [MGB-3 Arabic tasks](http://www.mgb-challenge.org/arabic.html)[^fn1].

MGB is a challenge that involves producing state-of-the-art systems for speech recognition and multiple other speech-related tasks in order to be used on TV broadcast recordings (i.e.: the challenge organizers are telling you, *"Hey, this is the cleanest data you could ever work on. You got no excuses"*).

We intend to use the data from the 2016 and the 2017 MGB challenges to build our system.

# **The Data**

MGB-3 (held in 2017) included a task for building a **speech-to-text** system for dialectic Arabic and a task for building **Arabic dialect identification** system. For each of the tasks in the challenge, MGB provided huge amounts of data for training. The data from MGB 2016 and 2017 related to speech recognition included:

1. **1,200 hours** from *Al-Jazeera* (including **8.3M tokens** of in-domain data from the transcripts)
2. **5 hours of Egyptian** adaptation data from *Youtube* (including **170k tokens** from the transcripts)
4. **110 million words**-corpus obtained from the *Al-Jazeera Arabic* website for language modeling.

As for the 2017 Arabic dialect identification, the task was to differentiate between five dialects: *Egyptian, Levantine, Gulf, North African, Modern standard Arabic*. The data included

1. **50 hours** of labeled recordings belonging to the different dialects. 
2. Lexical features
3. i-vector bottleneck features

# **Our Plan**

The best dialectic Arabic speech recognition accuracy in MGB-3 was obtained by the team from [**Aalto univeristy**](http://spa.aalto.fi/en/research/research_groups/speech_recognition/)[2], while the best dialect identification accuracy was obtained by the **[MIT](https://www.csail.mit.edu/)-[QCRI](http://qcri.org/)** team[3].
We intend to follow the architecures proposed by these teams.

A follow-up post will include information about the architectures, and I intend to post regularly on my progress throughout the program, so stay tuned!

Thank you for reading, and wish us luck!


# **References**


[1] A. Ali, S. Vogel, and S. Renals, “Speech recognition challenge in the wild: Arabic MGB-3,” 2017 IEEE Automatic Speech Recognition and Understanding Workshop (ASRU), 2017.  
[2] P. Smit, S. Gangireddy, S. Enarvi, S. Virpioja, and
M. Kurimo, “Aalto system for the 2017 Arabic multigenre brodcast challenge,” in ASRU, 2017.  
[3] S. Shon, A. Ali, and J. Glass, “MIT-QCRI Arabic dialect
identification system for the 2017 multi-genre broadcast
challenge,” in ASRU, 2017.