---
layout: post
title:  "The Healthcare Data Problem"
date:   2018-03-12 22:38:29 +0200
categories: jekyll update
published: False
---

# The Healthcare Data Problem

Last weekend, I, along with data scientist-friends from [Dataplusme](http://www.dataplusme.com) participated in [Egypt's first healthcare hackathon](http://hack.health2cairo.health) organized by [Health 2.0 Cairo](http://health2cairo.health). Many of Egypt's brilliant youth participated in the hackathon. This has been the very first healthcare hackathon to be held in Egypt. The hackathon contained three main tracks:

1. Track #1: cHealth (Connected Health) <span style="color: gray">*Nothing to do here*</span>
2. Track #2: mHealth & Digital Therapeutics <span style="color: gray">*Nothing to do here either*</span>
3. Data Analytics track <span style="color: red">***YEAH!!!***<span>

Needless to identify the track we enrolled in, the challenge required participants to address one of the following issues:

1. Detecting outliers within providers, according to behavior and insurance payments.
2. Identifying claims that should not be filed according to a patient's diagnosis
3. Identifying procedures that are expected to provide the best results, and identifying patients most likely to respond to certain procedures (**x2 issues here**).

The dataset supplied was the [Physician and Other Supplier Data CY 2015](https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Physician-and-Other-Supplier2015.html) from [CMS](https://www.cms.gov). Readers can explore the dataset through this [interactive representation](https://data.cms.gov/Medicare-Physician-Supplier/Medicare-Physician-and-Other-Supplier-National-Pro/p3uv-6dv4).

## The data problem (Part 1): Aggregated records, and vague stories
The size of the data (almost 300 megabytes) clearly indicates that it is **aggregated**. The data contains an entry for each healthcare provider, including the total medicare payment received, the number of beneficiaries receiving the services, etc.

The problem with this data is that we have very limited information to spot outliers and detect provider abuse. One way for spotting outliers is to examine how much money each provider obtained, and divide this number by the number of patients. The result of this operation can help us get an intuition of how much the provider charges on average.
$$ Avg.\ charged\ amount =  {Total\ amount\ of\ money \over No.\ of\ Patients } $$
So, what is the problem with this approach? **The insight is insufficient**. If we were planning to keep an eye for providers that yield a high score in this computation, we have to know that this number could actually be high for multiple reasons:

- the provider is abusive to the benficiaries and is overpricing his/her services (which is the case we are after).
- the provider could be providing high-quality service
- beneficiaries could be targeting this provider for specific services which are relatively expernsive.

Which reason is the true reason? There is no way to judge through the given information.  

**In order to prove that the first reason is the true resason**, we have to make sure that the provider has no reason to over-price. This means that we have to make sure the provider is providing the same services with the same quality as lower-priced providers.  
i.e.: *So, lacking information here is information about provided services and quality of service*.

Unfortunately, to get a sense of the distribution of services, we have to get information about transactional information (i.e.: provider *p* provided service *s* to beneficiary *b*.), or at least relevant statistics.

The result is: the outliers we detect from this data can only serve as suspects, points that may need to be investigated, but cannot be assumed as cases of abuse. This information merely says, *"Hey, I think this provider should be investigated. His data is showing some **irregular patterns** here."*, but that's what it is, an *irregular pattern*.

## The data problem (Part 2): Privacy
So what makes it very hard to obtain such dat? **Aggreements**

Simply put, even with all the anonimization techniques that could be done on the data to render it harmless and useless for anyone trying to exploit it, the benficiary must approve of his/her information being shared publicly. Without this agreement, the only way to share data publicly is through aggregating it this way.

Some data sets are released this way, but the problem is the organizations responsibly for this data set restrictions that make it hard to obtain permissions for distribution of this data.

Some of these datasets are listed below:

- Taiwanese
- Australian
- Chile 

## Wrong directions
Data generation

## What should we do?
Agreements

## The hackathon
The hackathon took place at [KMT house](kmthouse.com) in Maadi (probably the first Urban workspace in the Middle East and Africa). Many sponsors and partners took part in organizing the hackathon, the most notable was SMART Medical Services founded by Amr Al-Tayeb, Professor of medical surgery at Cairo University). Others included HiMSS, fruit street and clue Apps among other.