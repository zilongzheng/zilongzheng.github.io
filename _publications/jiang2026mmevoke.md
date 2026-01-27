---
layout: publication
type: article
title: >
    When Large Multimodal Models Confront Evolving Knowledge: Challenges and Explorations
author: Kailin Jiang and Yuntao Du and Yukai Ding and Yuchen Ren and Ning Jiang and Zhi Gao and Zilong Zheng and Lei Liu and Bin Li and Qing Li
arxiv: "2505.24449"
year: 2026
abbr: ICLR'26
venue: ICLR
code: https://github.com/EVOKE-LMM/EVOKE
pdf: https://openreview.net/pdf?id=iaPEM00wEs
website: https://evoke-lmm.github.io/
abstract: >
    Large Multimodal Models (LMMs) store vast amounts of pretrained knowledge but struggle to remain aligned with real-world updates, making it difficult to avoid capability degradation when acquiring evolving knowledge. Furthermore, most current work focuses on exploring static textual knowledge injection, neglecting dynamic multimodal evolving knowledge injection, leaving the potential of LMMs for multimodal knowledge injection as an open question. To address this, we first propose a pipeline to construct MMEVOKE, a benchmark for evaluating LMMs' ability in multimodal evolving knowledge injection. MMEVOKE contains 9,422 samples spanning 159 subtypes. Then, based on extensive experiments with MMEVOKE, we reveal challenges such as poor injection performance and capability degradation in existing knowledge injection methods through knowledge injection tests and general capability tests. Finally, to tackle these challenges, we introduce knowledge augmentation and knowledge retention methods, finding that knowledge-aware augmentation strengthens knowledge injection performance, and that Data Replay and MoE methods effectively mitigate capability degradation.
bibtex: >
    @inproceedings{jiang2026when,
        title={When Large Multimodal Models Confront Evolving Knowledge: Challenges and Explorations},
        author={Kailin Jiang and Yuntao Du and Yukai Ding and Yuchen Ren and Ning Jiang and Zhi Gao and Zilong Zheng and Lei Liu and Bin Li and Qing Li},
        booktitle={The Fourteenth International Conference on Learning Representations},
        year={2026},
        url={https://openreview.net/forum?id=iaPEM00wEs}
    }
related_publications:
    - qi2025ice
    - du2025mmke
    - wang2025videollamb
    - wang2025omnimmi
tags:
  - XAI
  - Multi-modal
---
