---
layout: pub
type: inproceedings
key: visdial-gnn
title: >
    Reasoning Visual Dialogs with Structural and Partial Observations
author: Zheng, Zilong and Wang, Wenguan and Qi, Siyuan and Zhu, Song-Chun
pdf: https://arxiv.org/pdf/1904.05548.pdf
abbr: CVPR'19
award: Oral
img: VisDial-GNN/visdial.jpg
code: https://github.com/zilongzheng/visdial-gnn
booktitle: Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)
year: 2019
abstract: >
    We propose a novel model to address the task of Visual Dialog which exhibits complex dialog structures. To obtain a reasonable answer based on the current question and the dialog history, the underlying semantic dependencies between dialog entities are essential. In this paper, we explicitly formalize this task as inference in a graphical model with partially observed nodes and unknown graph structures (relations in dialog). The given dialog entities are viewed as the observed nodes. The answer to a given question is represented by a node with missing value. We first introduce an Expectation Maximization algorithm to infer both the underlying dialog structures and the missing node values (desired answers). Based on this, we proceed to propose a differentiable graph neural network (GNN) solution that approximates this process. Experiment results on the VisDial and VisDial-Q datasets show that our model outperforms comparative methods. It is also observed that our method can infer the underlying dialog structure for better dialog reasoning.
bibtex: >
    @inproceedings{zheng2019reasoning,
        title={Reasoning Visual Dialogs with Structural and Partial Observations},
        author={Zheng, Zilong and Wang, Wenguan and Qi, Siyuan and Zhu, Song-Chun},
        booktitle={Computer Vision and Pattern Recognition (CVPR), 2019 IEEE Conference on},
        year={2019}
    } 
---