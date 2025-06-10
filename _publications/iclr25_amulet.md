---
layout: pub
type: article
title: >
    Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs
key: iclr25amulet
author: Zhang, Zhaowei and Bai, Fengshuo and Chen, Qizhi and Ma, Chengdong and Wang, Mingzhi and Sun, Haoran and Zheng, Zilong and Yang, Yaodong
correspondence: Zheng, Zilong and Yang, Yaodong
abbr: ICLR'25
journal: ICLR
pdf: https://openreview.net/forum?id=f9w89OY2cp
year: 2025
selected: false
abstract: >
    How to align large language models (LLMs) with user preferences from a static general dataset has been frequently studied. However, user preferences are usually personalized, changing, and diverse. This leads to the problem that the actual user preferences often do not coincide with those trained by the model developers in the practical use of LLMs. Since we cannot collect enough data and retrain for every demand, researching efficient real-time preference adaptation methods based on the backbone LLMs during test time is important. To this end, we introduce Amulet, a novel, training-free framework that formulates the decoding process of every token as a separate online learning problem with the guidance of simple user-provided prompts, thus enabling real-time optimization to satisfy users' personalized preferences. To reduce the computational cost brought by this optimization process for each token, we additionally provide a closed-form solution for each iteration step of the optimization process, thereby reducing the computational time cost to a negligible level. The detailed experimental results demonstrate that Amulet can achieve significant performance improvements in rich settings with combinations of different LLMs, datasets, and user preferences, while maintaining acceptable computational efficiency.
bibtex: >
    @inproceedings{zhang2025amulet,
        title={Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs}, 
        author={Zhang, Zhaowei and Bai, Fengshuo and Chen, Qizhi and Ma, Chengdong and Wang, Mingzhi and Sun, Haoran and Zheng, Zilong and Yang, Yaodong},
        booktitle={The Thirteenth International Conference on Learning Representations},
        year={2025}
    }
---