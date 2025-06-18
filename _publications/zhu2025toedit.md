---
layout: publication
type: inproceedings
title: >
    How to Synthesize Text Data without Model Collapse?
author: Zhu, Xuekai and Cheng, Daixuan and Li, Hengli and Zhang, Kaiyan and Hua, Ermo and Lv, Xingtai and Ding, Ning and Lin#, Zhouhan and Zheng#, Zilong and Zhou#, Bowen
abbr: ICML'25
venue: ICML
arxiv: "2412.14689"
year: 2025
selected: true
show_details: true
abstract: >
    Model collapse in synthetic data indicates that iterative training on self-generated data leads to a gradual decline in performance. With the proliferation of AI models, synthetic data will fundamentally reshape the web data ecosystem. Future GPT-{n} models will inevitably be trained on a blend of synthetic and human-produced data. In this paper, we focus on two questions: what is the impact of synthetic data on language model training, and how to synthesize data without model collapse? We first pre-train language models across different proportions of synthetic data, revealing a negative correlation between the proportion of synthetic data and model performance. We further conduct statistical analysis on synthetic data to uncover distributional shift phenomenon and over-concentration of n-gram features. Inspired by the above findings, we propose token editing on human-produced data to obtain semi-synthetic data. As a proof of concept, we theoretically demonstrate that token-level editing can prevent model collapse, as the test error is constrained by a finite upper bound. We conduct extensive experiments on pre-training from scratch, continual pre-training, and supervised fine-tuning. The results validate our theoretical proof that token-level editing improves data quality and enhances model performance.
bibtex: >
    @inproceedings{zhu2025toedit,
        title={How to Synthesize Text Data without Model Collapse?},
        author={Zhu, Xuekai and Cheng, Daixuan and Li, Hengli and Zhang, Kaiyan and Hua, Ermo and Lv, Xingtai and Ding, Ning and Lin, Zhouhan and Zheng, Zilong and Zhou, Bowen},
        booktitle = {Proceedings of the 42nd International Conference on Machine Learning},
        year={2025}
    }
medias:
    - name: X
      url:  https://x.com/ZilongZheng/status/1870366949907349576
---

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhu2025toedit/overview.png" }}" />
<figcaption>Figure 1. <span style="font-weight: 400">Model collapse of synthetic data.</span> &#9312; The model continuously trains on its previously generated data, leading to a gradual decline in model performance, i.e., model collapse. Starting from real data $Data_0$, the test error $E_{\rm test}$ increases as $f_0$ undergoes iterative training on synthetic data $Data_{>0}$. &#9313; ToEdit (ours), we use a trained model for token-level editing rather than purely synthesizing data. Leveraging $f_0$ and an operation matrix $M_i$ to edit the data, the test error is constrained within a fixed upper bound. Therefore, we can preserve the distribution coverage to avoid model collapse.</figcaption>
</div>
