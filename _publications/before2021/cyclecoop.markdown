---
layout: publication
type: article
title: >
     Learning Cycle-Consistent Cooperative Networks via Alternating MCMC Teaching for Unsupervised Cross-Domain Translation
author: Xie*, Jianwen and Zheng*, Zilong and Fang, Xiaolin and Zhu, Song-Chun and Wu, Ying Nian
abbr: AAAI'21
img: CycleCoop/style_transfer.png
pdf: https://ojs.aaai.org/index.php/AAAI/article/view/17249/17056
arxiv: 2103.04285
# journal: The Thirty-Fifth AAAI Conference on Artificial Intelligence (AAAI)
journal: AAAI
year: 2021
website: http://www.stat.ucla.edu/~jxie/CycleCoopNets/
abstract: >
    This paper studies the unsupervised cross-domain translation problem by proposing a generative framework, in which the probability distribution of each domain is represented by a generative cooperative network that consists of an energy-based model and a latent variable model. The use of generative cooperative network enables maximum likelihood learning of the domain model by MCMC teaching, where the energy-based model seeks to fit the data distribution of domain and distills its knowledge to the latent variable model via MCMC. Specifically, in the MCMC teaching process, the latent variable model parameterized by an encoder-decoder maps examples from the source domain to the target domain, while the energy-based model further refines the mapped results by Langevin revision such that the revised results match to the examples in the target domain in terms of the statistical properties, which are defined by the learned energy function. For the purpose of building up a correspondence between two unpaired domains, the proposed framework simultaneously learns a pair of cooperative networks with cycle consistency, accounting for a two-way translation between two domains, by alternating MCMC teaching. Experiments show that the proposed framework is useful for unsupervised image-to-image translation and unpaired image sequence translation.
bibtex: >
    @article{xie2021cycle,
        title={Learning Cycle-Consistent Cooperative Networks via Alternating MCMC Teaching for Unsupervised Cross-Domain Translation},
        author={Xie, Jianwen and Zheng, Zilong and Fang, Xiaolin and Zhu, Song-Chun and Wu, Ying Nian},
        journal={The Thirty-Third AAAI Conference on Artificial Intelligence (AAAI)},
        year={2021}
    }

---
