---
layout: pub
type: article
key: vlgi
title: >
    Unsupervised Vision-Language Grammar Induction with Shared Structure Modeling
author: Wan, Bo and Han, Wenjuan and Zheng, Zilong and  Tuytelaars, Tinne
pdf: https://openreview.net/pdf?id=N0n_QyQ5lBF
abbr: ICLR'22
journal: The Tenth International Conference on Learning Representations (ICLR)
year: 2022
award: Oral
sticky: false
abstract: >
    We introduce a new task, unsupervised vision-language (VL) grammar induction.
    Given an image-caption pair, the goal is to extract a shared hierarchical structure for both image and language simultaneously. We argue that such structured output, grounded in both modalities, is a clear step towards the high-level understanding of multimodal information. Besides challenges existing in conventional visually grounded grammar induction tasks, VL grammar induction requires a
    model to capture contextual semantics and perform a fine-grained alignment. To
    address these challenges, we propose a novel method, CLIORA, which constructs
    a shared vision-language constituency tree structure with context-dependent semantics for all constituents in different levels of the tree. It computes a matching score between each constituent and image region, trained via contrastive learning.
    It integrates two levels of fusion, namely at feature-level and at score-level, so as
    to allow fine-grained alignment. We introduce a new evaluation metric: Critical
    Concept Recall Rate (CCRR) to explicitly evaluate VL grammar induction, and
    show a 2.6% improvement over a strong baseline on Flickr30k Entities. We also
    evaluate our model via two derived tasks, <em>i.e.</em>, language grammar induction and
    phrase grounding, and improve over the state-of-the-art for both.
bibtex: >
    @article{wan2022unsupervised,
        title={Unsupervised Vision-Language Grammar Induction with Shared Structure Modeling},
        author={Wan, Bo and Han, Wenjuan and Zheng, Zilong and  Tuytelaars, Tinne},
        journal={The Tenth International Conference on Learning Representations (ICLR)},
        year={2022}
    } 
---