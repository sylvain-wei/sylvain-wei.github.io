---
title: "Notes for A Survey of RAG LLMs"
hidden: true
last_modified_at: 2024-01-26
tag: RAG LLM
author: Shaohang Wei
date: 2024-01-25
---
Basic Information:
- Paper: [Retrieval-Augmented Generation for Large Language Models: A Survey](https://arxiv.org/abs/2312.10997)
- Author: Yunfan Gao et al.; *Institute: Tongji University & Fudan University*
- Time: 2023.12

- Abstraction: Large Language Models (LLMs) demonstrate significant capabilities but face challenges such as hallucination, outdated knowledge, and nontransparent, untraceable reasoning processes. Retrieval-Augmented Generation (RAG) has emerged as a promising solution by incorporating knowledge from external databases. This enhances the accuracy and credibility of the models, particularly for knowledge-intensive tasks, and allows for continuous knowledge updates and integration of domain-specific information. RAG synergistically merges LLMs’ intrinsic knowledge with the vast, dynamic repositories of external databases. This comprehensive review paper offers a detailed examination of the progression of RAG paradigms, encompassing the Naive RAG, the Advanced RAG, and the Modular RAG. It meticulously scrutinizes the tripartite foundation of RAG frameworks, which includes the retrieval , the generation and the augmentation techniques. The paper highlights the state-of-the-art technologies embedded in each of these critical components, providing a profound understanding of the advancements in RAG systems. Furthermore, this paper introduces the metrics and benchmarks for assessing RAG models, along with the most up-to-date evaluation framework. In conclusion, the paper delineates prospective avenues for research, including the identification of challenges, the expansion of multi-modalities, and the progression of the RAG infrastructure and its ecosystem[^githubcode].

# Outline

## Roadmap of RAG

![image-20240126000850692](../../images/2024-01-25-note-for-RAG-LLM-survey/image-20240126000850692.png)

- **2017(transformer)**: assimilating additional knowledge through Pre-Training Models(PTM) to augment language models. Main direction: optimizing _pre-training_ methodologies.
- **Post 2023(chatgpt is born)**: the lion's share of RAG endeavors concentrated on _inference_, with a miority dedicated to _fine-tunnig_ proccesses.
- **Post GPT-4**: RAG's emphasis evolved into a _hybrid_ approach, combining the strengths of RAG and fine-tuning, alongside a dedicated minority continuing the focus on optimizing pre-training methodologies.

<u>By the way</u>, the concept of RAG is originally proposed in Mid-2020[^lewis2020].

## Definition of RAG

![image-20240126000907755](../../images/2024-01-25-note-for-RAG-LLM-survey/image-20240126000907755.png)



[^lewis2020]:Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich K ̈ uttler, Mike Lewis, Wen-tau Yih, Tim Rockt ̈ aschel, et al. Retrieval-augmented generation for knowledge-intensive nlp tasks. Advances in Neural Information Processing Systems, 33:9459–9474, 2020.
[^githubcode]:[Tongji-KGLLM/RAG-Survey (github.com)](https://github.com/Tongji-KGLLM/RAG-Survey)