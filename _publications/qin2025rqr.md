---
layout: publication
type: inproceedings
title: >
    Reinforced Query Reasoners for Reasoning-intensive Retrieval Tasks
author: Xubo Qin and Jun Bai and Jiaqi Li and Zixia Jia# and Zilong Zheng#
abbr: EMNLP'25
booktitle: EMNLP
arxiv: "2506.11603"
year: 2025
code: https://github.com/bigai-nlco/TongSearch-QR
selected: true
medias:
    - name: Technical Report
      url: https://bigai-nlco.notion.site/TongSearch-QR-Reinforced-Query-Reasoning-for-Retrieval-Tasks-1d6df56b182c80349d71ebfca4c55c1d
abstract: >
    Traditional information retrieval (IR) methods excel at textual and semantic matching but struggle in reasoning-intensive retrieval tasks that require multi-hop inference or complex semantic understanding between queries and documents. One promising solution is to explicitly rewrite or augment queries using large language models (LLMs) to elicit reasoning-relevant content prior to retrieval. However, the widespread use of large-scale LLMs like GPT-4 or LLaMA3-70B remains impractical due to their high inference cost and limited deployability in real-world systems. In this work, we introduce Reinforced Query Reasoner (RQR), a family of small-scale language models for query reasoning and rewriting in reasoning-intensive retrieval. Our approach frames query reformulation as a reinforcement learning problem and employs a novel semi-rule-based reward function. This enables smaller language models, e.g., Qwen2.5-7B-Instruct and Qwen2.5-1.5B-Instruct, to achieve reasoning performance rivaling large-scale LLMs without their prohibitive inference costs. Experiment results on BRIGHT benchmark show that, with BM25 as retrievers, both RQR-7B and RQR-1.5B models significantly outperform existing baselines, including prompt-based query reasoners and some latest dense retrievers trained for reasoning-intensive retrieval tasks, offering superior adaptability for real-world deployment.
bibtex: >
    @inproceedings{qin2025rqr,
        title={Reinforced Query Reasoners for Reasoning-intensive Retrieval Tasks},
        author={Xubo Qin and Jun Bai and Jiaqi Li and Zixia Jia and Zilong Zheng},
        year={2025},
        booktitle={The 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP)}
    }
---
