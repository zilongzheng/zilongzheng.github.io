---
layout: publication
type: inproceedings
title: >
    Patchwise Generative ConvNet: Training Energy-Based Models from a Single Natural Image for Internal Learning
author: Zheng, Zilong and Xie, Jianwen and Li, Ping
abbr: CVPR'21
img: PatchGenCN/pipeline.png
pdf: PatchGenCN/CVPR21_PatchGenCN.pdf
supp: PatchGenCN/CVPR21_PatchGenCN_supp.pdf
website: https://zilongzheng.github.io/PatchGenCN/
venue: CVPR
year: 2021
award: Oral
code: https://github.com/zilongzheng/PatchGenCN
selected: true
abstract: >
    Exploiting internal statistics of a single natural image has long been recognized as a significant  research paradigm where the goal is to learn the internal distribution of patches within the image without relying on external training data. Different from prior works that model such a distribution implicitly with a top-down latent variable model (e.g., generator), this paper proposes to explicitly represent the statistical distribution within a single natural image by using an energy-based generative framework, where a pyramid of energy functions, each parameterized by a bottom-up deep neural network, are used to capture the distributions of patches at different resolutions. Meanwhile, a coarse-to-fine sequential training and sampling strategy is presented to train the model efficiently. Besides learning to generate random samples from white noise, the model can learn in parallel with a self-supervised task (e.g., recover the input image from its corrupted version), which can further improve the descriptive power of the learned model. The proposed model is simple and natural in that it does not require an auxiliary model (e.g., discriminator) to assist the training. Besides, it also unifies internal statistics learning and image generation in a single framework. Experimental results presented on various image generation and manipulation tasks, including super-resolution, image editing, harmonization, style transfer, etc., have demonstrated the effectiveness of our model for internal learning.
bibtex: >
    @inproceedings{zheng2021patchgencn,
        title={Patchwise Generative ConvNet: Training Energy-Based Models from a Single Natural Image for Internal Learning},
        author={Zheng, Zilong and Xie, Jianwen and Li, Ping},
        booktitle={Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)},
        year={2021}
    }
---
