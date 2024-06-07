---
layout: pub
type: inproceedings
key: highie
title: >
    MindDial: Belief Dynamics Tracking with Theory-of-Mind Modeling for Situated Neural Dialogue Generation
author: Qiu, Shuwen and Zhu, Song-Chun and Zheng, Zilong
abbr: ICML'23
booktitle: Workshop on Theory-of-Mind at Fortieth International Conference on Machine Learning (ICML)
correspondence: Zheng, Zilong
year: 2023
selected: false
arxiv: 2306.15253
abstract: >
    Humans talk in free-form while negotiating the expressed meanings or common ground. Despite the impressive conversational abilities of the large generative language models, they do not consider the individual differences in contextual understanding in a shared situated environment. In this work, we propose MindDial, a novel conversational framework that can generate situated free-form responses to negotiate common ground. We design an explicit mind module that can track three-level beliefs -- the speaker's belief, the speaker's prediction of the listener's belief, and the common belief based on the gap between the first two. Then the speaking act classification head will decide to continue to talk, end this turn, or take task-related action. We augment a common ground alignment dataset MutualFriend with belief dynamics annotation, of which the goal is to find a single mutual friend based on the free chat between two agents. Experiments show that our model with mental state modeling can resemble human responses when aligning common ground meanwhile mimic the natural human conversation flow. The ablation study further validates the third-level common belief can aggregate information of the first and second-order beliefs and align common ground more efficiently.
bibtex: >
    @inproceedings{qiu2023minddial,
        title={MindDial: Belief Dynamics Tracking with Theory-of-Mind Modeling for Situated Neural Dialogue Generation},
        author={Qiu, Shuwen and Zhu, Song-Chun and Zheng, Zilong},
        booktitle={Workshop on Theory-of-Mind at ICML 2023},
        year={2023}
    }
---