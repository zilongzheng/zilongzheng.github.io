---
layout: pub
type: article
key: vaeebm
title: >
     Learning Energy-Based Model with Variational Auto-Encoder as Amortized Sampler
author: Xie, Jianwen and Zheng, Zilong and Li, Ping
abbr: AAAI'21
img: VaeEBM/mcmc_teaching.jpg
# journal: The Thirty-Fifth AAAI Conference on Artificial Intelligence (AAAI)
journal: AAAI
year: 2021
arxiv: 2012.14936
abstract: >
     Due to the intractable partition function, training energybased models (EBMs) by maximum likelihood requires Markov chain Monte Carlo (MCMC) sampling to approximate the gradient of the Kullback–Leibler divergence between data and model distributions. However, it is non-trivial to sample from an EBM because of the difficulty of mixing between modes. In this paper, we propose to learn a variational auto-encoder (VAE) to initialize the finite-step MCMC, such as Langevin dynamics that is derived from the energy function, for efficient amortized sampling of the EBM. With these amortized MCMC samples, the EBM can be trained by maximum likelihood, which follows an “analysis by synthesis” scheme; while the variational auto-encoder learns from these MCMC samples via variational Bayes. We call this joint training algorithm the variational MCMC teaching, in which the VAE chases the EBM toward data distribution. We interpret the learning algorithm as a dynamic alternating projection in the context of information geometry. Our proposed models can generate samples comparable to GANs and EBMs. Additionally, we demonstrate that our models can learn effective probabilistic distribution toward supervised conditional learning experiments.
bibtex: >
    @article{xie2021vaeebm,
        title={Learning Energy-Based Model with Variational Auto-Encoder as Amortized Sampler},
        author={Xie, Jianwen and Zheng, Zilong and Li, Ping},
        journal={The Thirty-Fifth AAAI Conference on Artificial Intelligence (AAAI)},
        year={2021}
    } 
---