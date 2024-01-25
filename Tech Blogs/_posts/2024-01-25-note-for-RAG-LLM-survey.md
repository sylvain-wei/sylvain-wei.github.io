---
title: "Notes for A Survey of RAG LLMs"
hidden: true
last_modified_at: 2024-01-26
tag: RAG LLM
author: Shaohang Wei
date: 2024-01-25
---

- Paper: [Retrieval-Augmented Generation for Large Language Models: A Survey](https://arxiv.org/abs/2312.10997)
- Author: Yunfan Gao et al.; *Institute: Tongji University & Fudan University*
- Time: 2023.12

# Outline

## Roadmap of RAG

![image-20240126000850692](../../images/2024-01-25-note-for-RAG-LLM-survey/image-20240126000850692.png)

- 2017(transformer): assimilating additional knowledge through Pre-Training Models(PTM) to augment language models. Main direction: optimizing _pre-training_ methodologies.
- Post 2023(chatgpt is born): the lion's share of RAG endeavors concentrated on _inference_, with a miority dedicated to _fine-tunnig_ proccesses.
- Post GPT-4: RAG's emphasis evolved into a _hybrid_ approach, combining the strengths of RAG and fine-tuning, alongside a dedicated minority continuing the focus on optimizing pre-training methodologies.

*[hightlight]: The concept of RAG is originally proposed in Mid-2020[^lewis2020].*

## Definition of RAG

![image-20240126000907755](../../images/2024-01-25-note-for-RAG-LLM-survey/image-20240126000907755.png)



[^lewis2020]:Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich K ̈ uttler, Mike Lewis, Wen-tau Yih, Tim Rockt ̈ aschel, et al. Retrieval-augmented generation for knowledge-intensive nlp tasks. Advances in Neural Information Processing Systems, 33:9459–9474, 2020.



