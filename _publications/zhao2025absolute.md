---
layout: publication
type: article
title: >
    Absolute Zero: Reinforced Self-play Reasoning with Zero Data
author: Zhao, Andrew and Wu, Yiran and Yue, Yang and Wu, Tong and Xu, Quentin and Yue, Yang and Lin, Matthieu and Wang, Shenzhi and Wu, Qingyun and Zheng#, Zilong and Huang#, Gao
year: 2025
selected: true
arxiv: "2505.03335"
code: https://github.com/LeapLabTHU/Absolute-Zero-Reasoner
website: https://andrewzh112.github.io/absolute-zero-reasoner/
model: https://huggingface.co/collections/andrewzh/absolute-zero-reasoner-68139b2bca82afb00bc69e5b
github_star: true
show_details: true
abbr: NeurIPS'25
venue: NeurIPS
award: Spotlight
medias:
  - name: Wired
    url: https://www.wired.com/story/ai-models-keep-learning-after-training-research/
  - name: X
    url: https://x.com/_AndrewZhao/status/1919920459748909288
badges:
  - url: https://huggingface.co/papers/2505.03335
    src: >
      <span class="hf-paper-badge">#1 Paper of the Day</span>

abstract: >
    Reinforcement learning with verifiable rewards (RLVR) has shown promise in enhancing the reasoning capabilities of large language models by learning directly from outcome-based rewards. Recent RLVR works that operate under the zero setting avoid supervision in labeling the reasoning process, but still depend on manually curated collections of questions and answers for training. The scarcity of high-quality, human-produced examples raises concerns about the long-term scalability of relying on human supervision, a challenge already evident in the domain of language model pretraining. Furthermore, in a hypothetical future where AI surpasses human intelligence, tasks provided by humans may offer limited learning potential for a superintelligent system. To address these concerns, we propose a new RLVR paradigm called Absolute Zero, in which a single model learns to propose tasks that maximize its own learning progress and improves reasoning by solving them, without relying on any external data. Under this paradigm, we introduce the Absolute Zero Reasoner (AZR), a system that self-evolves its training curriculum and reasoning ability by using a code executor to both validate proposed code reasoning tasks and verify answers, serving as an unified source of verifiable reward to guide open-ended yet grounded learning. Despite being trained entirely without external data, AZR achieves overall SOTA performance on coding and mathematical reasoning tasks, outperforming existing zero-setting models that rely on tens of thousands of in-domain human-curated examples. Furthermore, we demonstrate that AZR can be effectively applied across different model scales and is compatible with various model classes.
bibtex: >
    @inproceedings{zhao2025absolutezero,
        title={Absolute Zero: Reinforced Self-play Reasoning with Zero Data},
        author={Andrew Zhao and Yiran Wu and Yang Yue and Tong Wu and Quentin Xu and Yang Yue and Matthieu Lin and Shenzhi Wang and Qingyun Wu and Zilong Zheng and Gao Huang},
        year={2025},
        booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
        url={https://arxiv.org/abs/2505.03335},
    }
related_publications:
  - li2025latentseek
  - zhao2025diverct
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
