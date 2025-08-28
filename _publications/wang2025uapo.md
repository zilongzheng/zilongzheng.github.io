---
layout: publication
type: inproceedings
title: >
    Adaptive Preference Optimization with Uncertainty-aware Utility Anchor
author: Xiaobo Wang and Zixia Jia and Jiaqi Li and Qi Liu and Zilong Zheng#
abbr: EMNLP'25
booktitle: EMNLP Findings
year: 2025
selected: false
abstract: >
    Offline preference optimization methods are efficient for large language models (LLMs) alignment. Direct Preference optimization (DPO)-like learning, one of the most popular approaches, stands out for its efficiency in reward modeling. However, these methods typically follow the convention to use Bradley-Terry (BT) reward modeling that faces several critical assumptions, including the requirement for pairwise training data, model distribution shifting, human rationality assumption, etc. To address these limitations, we propose a general framework for offline preference optimization methods, Adaptive Preference Optimization with Utility Anchor (UAPO), which introduces an anchoring function to estimate the uncertainties brought from preference data annotation. Our method enables training even in scenarios where the data is unpaired, significantly enhancing data utilization efficiency. Moreover, the anchor design makes UAPO more robust in the training process. Experimental results demonstrate that UAPO achieves competitive outcomes without the strict dependency on data pairing, paving the way for more flexible and effective preference optimization methods.
bibtex: >
    @inproceedings{wang2025uapo,
        title={Adaptive Preference Optimization with Uncertainty-aware Utility Anchor},
        author={Xiaobo Wang and Zixia Jia and Jiaqi Li and Qi Liu and Zilong Zheng},
        year={2025},
        booktitle={Findings of the Association for Computational Linguistics: EMNLP-Findings 2025}
    }
---
