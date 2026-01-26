---
layout: publication
type: article
title: >
    IMTalker: Efficient Audio-driven Talking Face Generation with Implicit Motion Transfer
author: Chen, Bo and Liu, Tao and Chen, Qi and  Chen#, Xie and Zheng#, Zilong
arxiv: "2511.22167"
year: 2026
preprint: true
github_star: true
code: https://github.com/bigai-nlco/IMTalker
website: https://cbsjtu01.github.io/IMTalker/
abstract: >
    Talking face generation aims to synthesize realistic speaking portraits from a single image, yet existing methods often rely on explicit optical flow and local warping, which fail to model complex global motions and cause identity drift. We present IMTalker, a novel framework that achieves efficient and high-fidelity talking face generation through implicit motion transfer. The core idea is to replace traditional flow-based warping with a cross-attention mechanism that implicitly models motion discrepancy and identity alignment within a unified latent space, enabling robust global motion rendering. To further preserve speaker identity during cross-identity reenactment, we introduce an identity-adaptive module that projects motion latents into personalized spaces, ensuring clear disentanglement between motion and identity. In addition, a lightweight flow-matching motion generator produces vivid and controllable implicit motion vectors from audio, pose, and gaze cues. Extensive experiments demonstrate that IMTalker surpasses prior methods in motion accuracy, identity preservation, and audio-lip synchronization, achieving state-of-the-art quality with superior efficiency, operating at 40 FPS for video-driven and 42 FPS for audio-driven generation on an RTX 4090 GPU.
bibtex: >
    @misc{chen2025imtalkerefficientaudiodriventalking,
          title={IMTalker: Efficient Audio-driven Talking Face Generation with Implicit Motion Transfer},
          author={Bo Chen and Tao Liu and Qi Chen and Xie Chen and Zilong Zheng},
          year={2025},
          eprint={2511.22167},
          archivePrefix={arXiv},
          primaryClass={cs.CV},
          url={https://arxiv.org/abs/2511.22167},
    }
related_publications:
    - wang2025videollamb
    - wang2025omnimmi
---
