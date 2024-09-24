---
layout: pub
type: journal
title: >
    In-Context Editing: Learning Knowledge from Self-Induced Distributions
author: Qi, Siyuan and Yang, Bangcheng, and Jiang, Kailin and Wang, Xiaobo and Li, Jiaqi and Zhong, Yifan and Yang, Yaodong and Zheng, Zilong
# abbr: EMNLP'24
correspondence: Qi, Siyuan and Zheng, Zilong
# pdf: https://aclanthology.org/2023.emnlp-main.334.pdf
journal: arXiv
arxiv: 2406.11194
year: 2024
preprint: true
selected: true
code: https://github.com/bigai-ai/ICE
abstract: >
    The existing fine-tuning paradigm for language models is brittle in knowledge editing scenarios, where the model must incorporate new information without extensive retraining. This brittleness often results in overfitting, reduced performance, and unnatural language generation. To address this, we propose Consistent In-Context Editing (ICE), a novel approach that leverages the model's in-context learning capability to tune toward a contextual distribution rather than a one-hot target. ICE introduces a straightforward optimization framework that includes both a target and a procedure, enhancing the robustness and effectiveness of gradient-based tuning methods. We provide analytical insights into ICE across four critical aspects of knowledge editing: accuracy, locality, generalization, and linguistic quality, showing its advantages. Experimental results across four datasets confirm the effectiveness of ICE and demonstrate its potential for continual editing, ensuring that updated information is incorporated while preserving the integrity of the model.
bibtex: >
    @article{qi2024ice,
        title={In-Context Editing: Learning Knowledge from Self-Induced Distributions}, 
        author={Qi, Siyuan and Yang, Bangcheng, and Jiang, Kailin and Wang, Xiaobo and Li, Jiaqi and Zhong, Yifan and Yang, Yaodong and Zheng, Zilong},
        year={2024},
        eprint={2406.11194},
        archivePrefix={arXiv},
        primaryClass={cs.CL},
        url={https://arxiv.org/abs/2406.11194}, 
    }
---