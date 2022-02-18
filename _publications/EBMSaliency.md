---
layout: pub
type: article
key: SalCoopNets
title: >
    Energy-Based Generative Cooperative Saliency Prediction
author: Zhang, Jing and Xie, Jianwen and Zheng, Zilong and Barnes, Nick 
arxiv: https://arxiv.org/pdf/2106.13389.pdf
abbr: AAAI'22
journal: The Thirty-Sixth AAAI Conference on Artificial Intelligence (AAAI)
year: 2022
award: Oral
sticky: false
code: https://github.com/JingZhang617/SalCoopNets
abstract: >
    Conventional saliency prediction models typically learn
    a deterministic mapping from images to the corresponding
    ground truth saliency maps. In this paper, we study the
    saliency prediction problem from the perspective of generative models by learning a conditional probability distribution over saliency maps given an image, and treating the prediction as a sampling process. Specifically,
    we propose a generative cooperative saliency prediction
    framework based on the generative cooperative networks,
    where a conditional latent variable model and a conditional energy-based model are jointly trained to predict
    saliency in a cooperative manner. We call our model the
    SalCoopNets. The latent variable model serves as a fast
    but coarse predictor to efficiently produce an initial prediction, which is then refined by the iterative Langevin revision of the energy-based model that serves as a fine predictor. Such a coarse-to-fine cooperative saliency prediction strategy offers the best of both worlds. Moreover, we
    generalize our framework to the scenario of weakly supervised saliency prediction, where saliency annotation of
    training images is partially observed, by proposing a cooperative learning while recovering strategy. Lastly, we
    show that the learned energy function can serve as a refinement module that can refine the results of other pretrained saliency prediction models. Experimental results
    show that our generative model can achieve state-of-the-art
    performance.
bibtex: >
    @article{zhang2022energy,
        title = {Energy-Based Generative Cooperative Saliency Prediction},
        author = {Zhang, Jing and Xie, Jianwen and Zheng, Zilong and Barnes, Nick},
        journal={The Thirty-Sixth AAAI Conference on Artificial Intelligence (AAAI)},
        year = {2022}
    }
---