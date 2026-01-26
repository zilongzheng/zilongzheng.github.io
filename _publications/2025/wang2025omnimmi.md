---
layout: publication
type: inproceedings
title: >
    OmniMMI: A Comprehensive Multi-modal Interaction Benchmark in Streaming Video Contexts
key: cvpr25omnimmi
author: Wang, Yuxuan and Wang, Yueqian and Chen, Bo and Wu, Tong and Zhao, Dongyan and Zheng#, Zilong
abbr: CVPR'25
venue: CVPR
arxiv: "2503.22952"
code: https://github.com/OmniMMI/OmniMMI
website: https://omnimmi.github.io/
year: 2025
selected: true
show_details: true
abstract: >
   The rapid advancement of multi-modal language models (MLLMs) like GPT-4o has propelled the development of Omni language models, designed to process and proactively respond to continuous streams of multi-modal data. Despite their potential, evaluating their real-world interactive capabilities in streaming video contexts remains a formidable challenge. In this work, we introduce OmniMMI, a comprehensive multi-modal interaction benchmark tailored for OmniLLMs in streaming video contexts. OmniMMI encompasses over 1,121 real-world interactive videos and 2,290 questions, addressing two critical yet underexplored challenges in existing video benchmarks: streaming video understanding and proactive reasoning, across six distinct subtasks. Moreover, we propose a novel framework, Multi-modal Multiplexing Modeling (M4), designed to enhance real-time interactive reasoning with minimum finetuning on pre-trained MLLMs. Extensive experimental results reveal that the existing MLLMs fall short in interactive streaming understanding, particularly struggling with proactive tasks and multi-turn queries. Our proposed M4, though lightweight, demonstrates a significant improvement in handling proactive tasks and real-time interactions.
bibtex: >
    @inproceedings{cvpr25omnimmi,
        title={OmniMMI: A Comprehensive Multi-modal Interaction Benchmark in Streaming Video Contexts},
        author={Wang, Yuxuan and Wang, Yueqian and Chen, Bo and Wu, Tong and Zhao, Dongyan and Zheng, Zilong},
        booktitle={Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)},
        year={2025}
    }
related_publications:
    - zheng2025mcu
    - wang2024videotgb
    - wu2024cream
    - wang2024jarvis1
    - wang2024exovip
---

<div class="figure-block">
<img src="{{ "/assets/img/projects/wang2025omnimmi/teaser.png" }}" />
<figcaption>Figure 1. <span style="font-weight: 400">An overview of OmniMMI.</span> OmniMMI consists of two categories of multi-modal interactive challenges: streaming video understanding (top) and proactive reasoning (bottom). Each query is processed into natural language text and synthetic audio as input.</figcaption>
</div>
