---
layout: publication
type: article
title: >
    Can LLMs Reason Soundly in Law? Auditing Inference Patterns for Legal Judgment
author: Lu Chen and Yuxuan Huang and Yixing Li and Dongrui Liu and Qihan Ren and ShuaiZhao and Kun Kuang and Zilong Zheng and Quanshi Zhang
arxiv: "2410.09083"
year: 2026
abbr: ICLR'26
venue: ICLR
pdf: https://openreview.net/pdf?id=5T0BXtJxzN
abstract: >
    This paper presents a method to analyze the inference patterns used by Large Language Models (LLMs) for judgment in a case study on legal LLMs, so as to identify potential incorrect representations of the LLM, according to human domain knowledge. Unlike traditional evaluations on language generation results, we propose to evaluate the correctness of the detailed inference patterns of an LLM behind its seemingly correct outputs. To this end, we quantify the interactions between input phrases used by the LLM as primitive inference patterns, because recent theoretical achievements have proven several mathematical guarantees of the faithfulness of the interaction-based explanation. We design a set of metrics to evaluate the detailed inference patterns of LLMs. Experiments show that even when the language generation results appear correct, a significant portion of the inference patterns used by the LLM for the legal judgment may represent misleading or irrelevant logic.
bibtex: >
    @inproceedings{chen2025evaluating,
        title={Can {LLM}s Reason Soundly in Law? Auditing Inference Patterns for Legal Judgment},
        author={Lu Chen and Yuxuan Huang and Yixing Li and Dongrui Liu and Qihan Ren and Shuai Zhao and Kun Kuang and Zilong Zheng and Quanshi Zhang},
        booktitle={The Fourteenth International Conference on Learning Representations},
        year={2026},
        url={https://openreview.net/forum?id=5T0BXtJxzN}
    }
related_publications:
    - zhao2025absolute
    - li2025latentseek
    - zhang2025amulet
    - wu2025tokenswift
tags:
  - RLVR
  - Reasoning
  - XAI
  - Large Reasoning Model
---
