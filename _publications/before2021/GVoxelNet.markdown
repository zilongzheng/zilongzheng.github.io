---
layout: publication
type: journal
title: >
    Generative VoxelNet: Learning Energy-Based Models for 3D Shape Synthesis and Analysis
author: Xie*, Jianwen and Zheng*, Zilong and Gao, Ruiqi and Wang, Wenguan and Zhu, Song-Chun and Wu, Ying Nian
website: http://www.stat.ucla.edu/~jxie/3DEBM/
pdf: 3DDescriptorNet/3DGConvNet_pami.pdf
abbr: TPAMI
venue: IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)
year: 2020
abstract: >
    3D data that contains rich geometry information of objects and scenes is a valuable asset for understanding 3D physical world. With the recent emergence of large-scale 3D datasets, it becomes increasingly crucial to have a powerful 3D generative model for 3D shape synthesis and analysis. This paper proposes a 3D shape descriptor network, which is a deep 3D convolutional energy-based model, for representing volumetric shape patterns. The maximum likelihood training of the model follows an “analysis by synthesis” scheme. The benefits of the proposed model are five-fold: first, unlike GANs and VAEs, the training of the model does not rely on any auxiliary models; second, the model can synthesize realistic 3D shapes by sampling from the probability distribution via MCMC, such as Langevin dynamics; third, the conditional version of the model can be applied to 3D object recovery and super-resolution; fourth, the model can be used to train a 3D generator network via MCMC teaching; fifth, the unsupervisedly trained model provides a powerful feature extractor for 3D data, which can be useful for 3D object classification. Experiments demonstrate that the proposed model can generate high-quality 3D shape patterns and can be useful for a wide variety of 3D shape analysis.
bibtex: >
    @article{xie2020gvoxelnet,
        title={Generative VoxelNet: Learning Energy-Based Models for 3D Shape Synthesis and Analysis},
        author= {Xie, Jianwen and Zheng, Zilong and Gao, Ruiqi and Wang, Wenguan and Zhu, Song-Chun and Wu, Ying Nian},
        journal={IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)},
        year={2020}
    }
---
