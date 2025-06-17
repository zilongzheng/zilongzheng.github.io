---
layout: publication
type: article
title: >
    Absolute Zero: Reinforced Self-play Reasoning with Zero Data
author: Zhao, Andrew and Wu, Yiran and Yue, Yang and Wu, Tong and Xu, Quentin and Yue, Yang and Lin, Matthieu and Wang, Shenzhi and Wu, Qingyun and Zheng#, Zilong and Huang#, Gao
year: 2025
selected: true
preprint: true
arxiv: "2505.03335"
code: https://github.com/LeapLabTHU/Absolute-Zero-Reasoner
website: https://andrewzh112.github.io/absolute-zero-reasoner/
model: https://huggingface.co/collections/andrewzh/absolute-zero-reasoner-68139b2bca82afb00bc69e5b
github_star: true
show_details: true
medias:
  - name: X
    url: https://x.com/_AndrewZhao/status/1919920459748909288
  - name: HF Papers
    url: https://huggingface.co/papers/2505.03335
abstract: >
    Model collapse in synthetic data indicates that iterative training on self-generated data leads to a gradual decline in performance. With the proliferation of AI models, synthetic data will fundamentally reshape the web data ecosystem. Future GPT-{n} models will inevitably be trained on a blend of synthetic and human-produced data. In this paper, we focus on two questions: what is the impact of synthetic data on language model training, and how to synthesize data without model collapse? We first pre-train language models across different proportions of synthetic data, revealing a negative correlation between the proportion of synthetic data and model performance. We further conduct statistical analysis on synthetic data to uncover distributional shift phenomenon and over-concentration of n-gram features. Inspired by the above findings, we propose token editing on human-produced data to obtain semi-synthetic data. As a proof of concept, we theoretically demonstrate that token-level editing can prevent model collapse, as the test error is constrained by a finite upper bound. We conduct extensive experiments on pre-training from scratch, continual pre-training, and supervised fine-tuning. The results validate our theoretical proof that token-level editing improves data quality and enhances model performance.
bibtex: >
    @misc{zhao2025absolutezeroreinforcedselfplay,
          title={Absolute Zero: Reinforced Self-play Reasoning with Zero Data},
          author={Andrew Zhao and Yiran Wu and Yang Yue and Tong Wu and Quentin Xu and Yang Yue and Matthieu Lin and Shenzhi Wang and Qingyun Wu and Zilong Zheng and Gao Huang},
          year={2025},
          eprint={2505.03335},
          archivePrefix={arXiv},
          primaryClass={cs.LG},
          url={https://arxiv.org/abs/2505.03335},
    }
related_publications:
  - li2025latentseek
---

### Out-of-Distribution General Reasoning Performance

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/azr_teaser.jpg" }}" />
<figcaption>Absolute Zero Reasoner achieves state-of-the-art performance with <span class="highlight">ZERO DATA</span>. Without relying on any gold labels or human-defined queries, our Absolute Zero Reasoner trained using our proposed self-play approach demonstrates remarkable out-of-distribution reasoning capabilities, even outperforming models trained on tens of thousands of expert-labeled in-domain examples.</figcaption>
</div>

### Absolute Zero Reasoner

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/azr.png" }}" />
<figcaption>Absolute Zero Reasoner Training Overview. At every iteration, Absolute Zero Reasoner first PROPOSES a batch of tasks, conditioned on past self-generated triplets stored in a buffer and a particular task type: abduction, deduction, or induction. From these generated tasks, Python is used to filter and construct valid code-based reasoning questions. A learnability reward $r_{\rm propose}$ is also calculated for each proposed task. The Absolute Zero Reasoner then SOLVES the batch of reasoning questions. Python is used again to verify the generated responses and compute the accuracy reward $r_{\rm resolve}$. Finally, the Absolute Zero Reasoner is jointly updated using both $r_{\rm propose}$ and $r_{\rm resolve}$ across all three task types, using TRR++.</figcaption>
</div>
