---
layout: pub
type: journal
title: >
    Seek in the Dark: Reasoning via Test-Time Instance-Level Policy Gradient in Latent Space
author: Li, Hengli and Li, Chenxi and Wu, Tong and Zhu, Xuekai and Wang, Yuxuan and Yu, Zhaoxin and Jiang, Eric Hanchen and Zhu, Song-Chun and Jia, Zixia and Wu, Ying Nian and Zheng, Zilong
correspondence: ZWu, Ying Nian and Zheng, Zilong
journal: arXiv
arxiv: 2505.13308
year: 2025
preprint: true
selected: true
code: https://github.com/bigai-nlco/LatentSeek
website: https://bigai-nlco.github.io/LatentSeek/
abstract: >
    Reasoning ability, a core component of human intelligence, continues to pose a significant challenge for Large Language Models (LLMs) in the pursuit of AGI. Although model performance has improved under the training scaling law, significant challenges remain, particularly with respect to training algorithms, such as catastrophic forgetting, and the limited availability of novel training data. As an alternative, test-time scaling enhances reasoning performance by increasing test-time computation without parameter updating. Unlike prior methods in this paradigm focused on token space, we propose leveraging latent space for more effective reasoning and better adherence to the test-time scaling law. We introduce LatentSeek, a novel framework that enhances LLM reasoning through Test-Time Instance-level Adaptation (TTIA) within the model's latent space. Specifically, LatentSeek leverages policy gradient to iteratively update latent representations, guided by self-generated reward signals. LatentSeek is evaluated on a range of reasoning benchmarks, including GSM8K, MATH-500, and AIME2024, across multiple LLM architectures. Results show that LatentSeek consistently outperforms strong baselines, such as Chain-of-Thought prompting and fine-tuning-based methods. Furthermore, our analysis demonstrates that LatentSeek is highly efficient, typically converging within a few iterations for problems of average complexity, while also benefiting from additional iterations, thereby highlighting the potential of test-time scaling in the latent space. These findings position LatentSeek as a lightweight, scalable, and effective solution for enhancing the reasoning capabilities of LLMs.
bibtex: >
    @misc{li2025seekdarkreasoningtesttime,
          title={Seek in the Dark: Reasoning via Test-Time Instance-Level Policy Gradient in Latent Space}, 
          author={Hengli Li and Chenxi Li and Tong Wu and Xuekai Zhu and Yuxuan Wang and Zhaoxin Yu and Eric Hanchen Jiang and Song-Chun Zhu and Zixia Jia and Ying Nian Wu and Zilong Zheng},
          year={2025},
          eprint={2505.13308},
          archivePrefix={arXiv},
          primaryClass={cs.LG},
          url={https://arxiv.org/abs/2505.13308}, 
    }
---