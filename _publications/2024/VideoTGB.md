---
layout: pub
type: inproceedings
title: >
    Efficient Temporal Extrapolation of Multimodal Large Language Models with Temporal Grounding Bridge for Long Video Understanding
author: Wang, Yuxuan and Wang, Yueqian and Wu, Pengfei and Liang, Jianxin and Zhao, Dongyan and Liu, Yang and Zheng, Zilong
abbr: EMNLP'24
correspondence: Zheng, Zilong
# pdf: https://aclanthology.org/2023.emnlp-main.334.pdf
# booktitle: The Conference on Empirical Methods in Natural Language Processing (EMNLP)
booktitle: EMNLP
arxiv: >
    2402.16050
code: https://github.com/bigai-nlco/VideoTGB
year: 2024
selected: false
abstract: >
    Despite progress in multimodal large language models~(MLLMs), the challenge of interpreting long-form videos in response to linguistic queries persists, largely due to the inefficiency in temporal grounding and limited pre-trained context window size. In this work, we introduce  Temporal Grounding Bridge (TGB), a novel framework that bootstraps MLLMs with advanced temporal grounding capabilities and broadens their contextual scope. Our framework significantly enhances the temporal capabilities of current MLLMs through three key innovations: an efficient multi-span temporal grounding algorithm applied to low-dimension temporal features projected from flow; a multimodal length extrapolation training paradigm that utilizes low-dimension temporal features to extend the training context window size; and a bootstrapping framework that bridges our model with pluggable MLLMs without requiring annotation. We validate TGB across seven video benchmarks and demonstrate substantial performance improvements compared with prior MLLMs. Notably, our model, initially trained on sequences of four frames, effectively handles sequences up to 16x longer without sacrificing performance, highlighting its scalability and effectiveness in real-world applications. Our code is publicly available.
bibtex: >
    @inproceedings{wang2024videotgb,
        title={Efficient Temporal Extrapolation of Multimodal Large Language Models with Temporal Grounding Bridge},
        author={Wang, Yuxuan and Wang, Yueqian and Wu, Pengfei and Liang, Jianxin and Zhao, Dongyan and Liu, Yang and Zheng, Zilong},
        booktitle={The 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP)},
        year={2024}
    }
---