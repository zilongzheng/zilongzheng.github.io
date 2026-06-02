---
layout: publication
type: article
title: >
    UniCode: Augmenting Evaluation for Code Reasoning
author: Xinyue Zheng* and Haowei Lin* and Shaofei Cai and Yaodong Yang and Zilong Zheng# and Yitao Liang#
year: 2026
selected: true
arxiv: "2510.17868"
code: https://github.com/grandsmile/UniCode
venue: ICML
abbr: ICML'26
abstract: >
  Current coding benchmarks often overstate Large Language Model (LLM) capabilities due to static paradigms and data contamination, allowing models to exploit statistical shortcuts rather than genuine reasoning. To address this, we introduce UniCode, a generative evaluation framework that systematically probes LLM reasoning boundaries via: (1) multi-dimensional augmentation operators to create diverse algorithmic variants; (2) a scalable test generation pipeline achieving 94.5% correctness without human-written solutions; and (3) fine-grained diagnostic metrics for rich error signals. Our evaluation of state-of-the-art models reveals a significant 31.2% performance collapse. Critically, we observe a high variance across different reasoning axes, revealing a profound fragility under structural shifts despite surface-level robustness. Furthermore, we identify a ``seed-problem regression," where models fail by defaulting to memorized seed logic and inefficient complexities. 

bibtex: >
    @inproceedings{zheng2026unicode,
        title={UniCode: Augmenting Evaluation for Code Reasoning},
        author={Xinyue Zheng and Haowei Lin and Shaofei Cai and Yaodong Yang and Zilong Zheng and Yitao Liang},
        booktitle={Proceedings of the 43rd International Conference on Machine Learning},
        year={2026}
    }
related_publications:
  - li2025latentseek
  - liu2025rulereasoner
  - qin2025rqr
  - zhao2025absolute
---