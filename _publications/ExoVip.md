---
layout: pub
type: inproceedings
title: >
    ExoViP: Step-by-step Verification and Exploration with Exoskeleton Modules for Compositional Visual Reasoning
author: Wang, Yuxuan and Yuille, Alan and Li, Zhuowan and Zheng, Zilong
abbr: CoLM'24
correspondence: Li, Zhuowan and Zheng, Zilong
equalauthor: Li, Junpeng and Jia, Zixia
# pdf: https://aclanthology.org/2023.emnlp-main.334.pdf
# booktitle: The Conference on Empirical Methods in Natural Language Processing (EMNLP)
booktitle: CoLM
arxiv: 2408.02210
code: https://github.com/bigai-nlco/ExoViP
year: 2024
selected: true
abstract: >
    Compositional visual reasoning methods, which translate a complex query into a structured composition of feasible visual tasks, have exhibited a strong potential in complicated multimodal tasks like visual question answering, language-guided image editing, etc. Empowered by recent advances in large language models~(LLMs), this multimodal challenge has been brought to a new stage by treating LLMs as few-shot/zero-shot planners, i.e., visual-language programming.Such methods, despite their numerous merits, suffer from challenges due to LLM planning mistakes or inaccuracy of visual execution modules, lagging behind the non-compositional models.In this work, we devise a ``plug-and-play" method, ExoViP, to correct the errors at both the planning and execution stages through introspective verification. We employ verification modules as ``exoskeletons" to enhance current vision-language programming schemes. Specifically, our proposed verification module utilizes a mixture of three sub-verifiers to validate predictions after each reasoning step, subsequently calibrating the visual module predictions and refining the reasoning trace planned by LLMs. Experimental results on two representative vision-language programming methods showcase consistent improvements on five compositional reasoning tasks on standard benchmarks. In light of this, we believe ExoViP can foster better performance and generalization on open-domain multimodal challenges.
bibtex: >
    @inproceedings{wang2024exovip,
        title={ExoViP: Step-by-step Verification and Exploration with Exoskeleton Modules for Compositional Visual Reasoning},
        author={Wang, Yuxuan and Yuille, Alan and Li, Zhuowan and Zheng Zilong},
        booktitle={The first Conference on Language Modeling (CoLM)},
        year={2024}
    }
---