---
layout: publication
type: inproceedings
key: highie
title: >
    MindDial: Belief Dynamics Tracking with Theory-of-Mind Modeling for Situated Neural Dialogue Generation
author: Qiu, Shuwen and Liu, Mingdian and Li, Hengli and Zhu, Song-Chun and Zheng#, Zilong
abbr: SIGDIAL'24
misc: (also in <a href="https://tomworkshop.github.io/" >Workshop on Theory-of-Mind at ICML 2023</a>)
# booktitle: Workshop on Theory-of-Mind at Fortieth International Conference on Machine Learning (ICML)
booktitle: SIGDIAL
award: Oral
year: 2024
selected: false
arxiv: 2306.15253
abstract: >
    Humans talk in daily conversations while aligning and negotiating the expressed meanings or common ground. Despite the impressive conversational abilities of the large generative language models, they do not consider the individual differences in contextual understanding in a shared situated environment. In this work, we propose MindDial, a novel conversational framework that can generate situated free-form responses to align and negotiate common ground. We design an explicit mind module that can track three-level beliefs -- the speaker's belief, the speaker's prediction of the listener's belief, and the belief gap between the first two. Then the next response is generated to resolve the belief difference and take task-related action. Our framework is applied to both prompting and fine-tuning-based models, and is evaluated across scenarios involving both common ground alignment and negotiation. Experiments show that models with mind modeling can generate more human-like responses when aligning and negotiating common ground. The ablation study further validates the three-level belief design can aggregate information and improve task outcomes in both cooperative and negotiating settings.

bibtex: >
    @inproceedings{qiu2023minddial,
        title={MindDial: Belief Dynamics Tracking with Theory-of-Mind Modeling for Situated Neural Dialogue Generation},
        author={Qiu, Shuwen and Liu, Mingdian and Li, Hengli and Zhu, Song-Chun and Zheng, Zilong},
        booktitle={Proceedings of the 25th Annual Meeting of the Special Interest Group on Discourse and Dialogue},
        year={2023}
    }
---
