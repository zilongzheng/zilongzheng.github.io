---
layout: pub
type: inproceedings
key: xie2021GPointent
title: >
    Generative PointNet: Deep Energy-Based Learning on Unordered Point Sets for 3D Generation, Reconstruction and Classification
author: Xie, Jianwen and Xu, Yifei and Zheng, Zilong and Zhu, Song-Chun and Wu, Ying Nian
arxiv: 2004.01301
pdf: https://openaccess.thecvf.com/content/CVPR2021/papers/Xie_Generative_PointNet_Deep_Energy-Based_Learning_on_Unordered_Point_Sets_for_CVPR_2021_paper.pdf
abbr: CVPR'21
img: GPointNet/gen_res.png
website: http://www.stat.ucla.edu/~jxie/GPointNet/
# booktitle: Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)
booktitle: CVPR
year: 2021
abstract: >
    We propose a generative model of unordered point sets, such as point clouds, in the forms of an energy-based model, where the energy function is parameterized by an input-permutation-invariant bottom-up neural network. The energy function learns a coordinate encoding of each point and then aggregates all individual point features into energy for the whole point cloud. We show that our model can be derived from the discriminative PointNet. The model can be trained by MCMC-based maximum likelihood learning (as well as its variants), without the help of any assisting networks like those in GANs and VAEs. Unlike most point cloud generator that relys on hand-crafting distance metrics, our model does not rely on hand-crafting distance metric for point cloud generation, because it synthesizes point clouds by matching observed examples in terms of statistical property defined by the energy function. Furthermore, we can learn a short-run MCMC toward the energy-based model as a flow-like generator for point cloud reconstruction and interpretation. The learned point cloud representation can be also useful for point cloud classification. Experiments demonstrate the advantages of the proposed generative model of point clouds.
bibtex: >
    @inproceedings{xie2021GPointent,
        title={Generative PointNet: Deep Energy-Based Learning on Unordered Point Sets for 3D Generation, Reconstruction and Classification},
        author={Xie, Jianwen and Xu, Yifei and Zheng, Zilong and Zhu, Song-Chun and Wu, Ying Nian},
        booktitle={Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)},
        year={2021}
    } 
---