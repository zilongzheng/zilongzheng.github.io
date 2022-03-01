---
layout: pub
type: inproceedings
key: fan2021learning
title: >
    Learning Triadic Belief Dynamics in Nonverbal Communication from Videos
author: Fan, Lifeng and Qiu, Shuwen and Zheng, Zilong and Gao, Tao and Zhu, Song-Chun and Zhu, Yixin
abbr: CVPR'21
img: TriadicBelief/pg.png
booktitle: Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)
year: 2021
award: Oral
code: https://github.com/LifengFan/Triadic-Belief-Dynamics
arxiv: 2104.02841
pdf: TriadicBelief/TBD_paper.pdf
supp: TriadicBelief/TBD_supp.pdf
video: https://www.dropbox.com/s/nqai1z32bi66zuy/04411-video.mp4?dl=0
sticky: false
abstract: >
    Humans possess a unique social cognition capability; nonverbal communication can convey rich social information among agents. In contrast, such crucial social characteristics are mostly missing in the existing scene understanding literature. In this paper, we incorporate different nonverbal communication cues (e.g., gaze, human poses, and gestures) to represent, model, learn, and infer agents’ mental states from pure visual inputs. Crucially, such a mental representation takes the agent’s belief into account so that it represents what the true world state is and infers the beliefs in each agent’s mental state, which may differ from the true world states. By aggregating different beliefs and true world states, our model essentially forms “five minds” during the interactions between two agents. This “five minds” model differs from prior works that infer beliefs in an infinite recursion; instead, agents’ beliefs are converged into a “common mind”. Based on this representation, we further devise a hierarchical energybased model that jointly tracks and predicts all five minds. From this new perspective, a social event is interpreted by a series of nonverbal communication and belief dynamics, which transcends the classic keyframe video summary. In the experiments, we demonstrate that using such a social account provides a better video summary on videos with rich social interactions compared with state-of-the-art
    keyframe video summary methods
bibtex: >
    @inproceedings{fan2021learning,
        title     = {Learning Tradic Belief Dynamics in Nonverbal Communication from Videos},
        author    = {Lifeng Fan and Shuwen Qiu and Zilong Zheng and Tao Gao and Song-Chun Zhu and Yixin Zhu},
        year      = {2021},
        booktitle = {IEEE Conference on Computer Vision and Pattern Recognition (CVPR)}
    }
---