---
layout: publication
type: article
title: >
    Motion-Based Generator Model: Unsupervised Disentanglement of Appearance, Trackable and Intrackable Motions in Dynamic Patterns
author: Xie*, Jianwen and Gao*, Ruiqi and Zheng, Zilong and Zhu, Song-Chun and Wu, Ying Nian
website: http://www.stat.ucla.edu/~jxie/MotionBasedGenerator/MotionBasedGenerator.html
arxiv: 1911.11294
abbr: AAAI'20
award: Oral
img: Motion-DynGen/deform.gif
code: https://github.com/jianwen-xie/Dynamic_generator
# journal: The Thirty-Fourth AAAI Conference on Artificial Intelligence (AAAI)
venue: AAAI
year: 2020
abstract: >
    Dynamic patterns are characterized by complex spatial and motion patterns. Understanding dynamic patterns requires a disentangled representational model that separates the factorial components. A commonly used model for dynamic patterns is the state space model, where the state evolves over time according to a transition model and the state generates the observed image frames according to an emission model. To model the motions explicitly, it is natural for the model to be based on the motions or the displacement fields of the pixels. Thus in the emission model, we let the hidden state generate the displacement field, which warps the trackable component in the previous image frame to generate the next frame while adding a simultaneously emitted residual image to account for the change that cannot be explained by the deformation. The warping of the previous image is about the trackable part of the change of image frame, while the residual image is about the intrackable part of the image. We use a maximum likelihood algorithm to learn the model parameters that iterates between inferring latent noise vectors that drive the transition model and updating the parameters given the inferred latent vectors. Meanwhile we adopt a regularization term to penalize the norms of the residual images to encourage the model to explain the change of image frames by trackable motion. Unlike existing methods on dynamic patterns, we learn our model in unsupervised setting without ground truth displacement fields or optical flows. In addition, our model defines a notion of intrackability by the separation of warped component and residual component in each image frame. We show that our method can synthesize realistic dynamic pattern, and disentangling appearance, trackable and intrackable motions. The learned models can be useful for motion transfer, and it is natural to adopt it to define and measure intrackability of a dynamic pattern.
bibtex: >
    @article{xie2020motion,
        title={Motion-Based Generator Model: Unsupervised Disentanglement of Appearance, Trackable and Intrackable Motions in Dynamic Patterns},
        author={Xie, Jianwen and Gao, Ruiqi and Zheng, Zilong and Zhu, Song-Chun and Wu, Ying Nian},
        journal={The Thirty-Fourth AAAI Conference on Artificial Intelligence (AAAI)},
        year={2020}
    }

---
