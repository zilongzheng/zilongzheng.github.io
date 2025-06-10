---
layout: pub
type: journal
title: >
    Absolute Zero: Reinforced Self-play Reasoning with Zero Data
author: Zhao, Andrew and Wu, Yiran and Yue, Yang and Wu, Tong and Xu, Quentin and Yue, Yang and Lin, Matthieu and Wang, Shenzhi and Wu, Qingyun and Zheng, Zilong and Huang, Gao
# abbr: EMNLP'24
correspondence: Zheng, Zilong and Huang, Gao
# pdf: https://aclanthology.org/2023.emnlp-main.334.pdf
journal: arXiv
arxiv: 2505.03335
year: 2025
preprint: true
selected: true
code: https://github.com/LeapLabTHU/Absolute-Zero-Reasoner
website: https://andrewzh112.github.io/absolute-zero-reasoner/
medias:
  - name: models
    url: https://huggingface.co/collections/andrewzh/absolute-zero-reasoner-68139b2bca82afb00bc69e5b
  - name: X
    url: https://x.com/_AndrewZhao/status/1919920459748909288
  - name: HF Papers
    url: https://huggingface.co/papers/2505.03335
abstract: >
    Reinforcement learning with verifiable rewards (RLVR) has shown promise in enhancing the reasoning capabilities of large language models by learning directly from outcome-based rewards. Recent RLVR works that operate under the zero setting avoid supervision in labeling the reasoning process, but still depend on manually curated collections of questions and answers for training. The scarcity of high-quality, human-produced examples raises concerns about the long-term scalability of relying on human supervision, a challenge already evident in the domain of language model pretraining. Furthermore, in a hypothetical future where AI surpasses human intelligence, tasks provided by humans may offer limited learning potential for a superintelligent system. To address these concerns, we propose a new RLVR paradigm called Absolute Zero, in which a single model learns to propose tasks that maximize its own learning progress and improves reasoning by solving them, without relying on any external data. Under this paradigm, we introduce the Absolute Zero Reasoner (AZR), a system that self-evolves its training curriculum and reasoning ability by using a code executor to both validate proposed code reasoning tasks and verify answers, serving as an unified source of verifiable reward to guide open-ended yet grounded learning. Despite being trained entirely without external data, AZR achieves overall SOTA performance on coding and mathematical reasoning tasks, outperforming existing zero-setting models that rely on tens of thousands of in-domain human-curated examples. Furthermore, we demonstrate that AZR can be effectively applied across different model scales and is compatible with various model classes.
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
---