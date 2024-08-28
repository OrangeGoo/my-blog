---
title: "Code Pratice Platform"
description: "React, Spring Cloud, PostgreSQL, RabbitMQ, Redis, Docker"
date: "May 26 2024"
---

* Developed a full-stack app using **Spring Boot** for the REST API and **React** for the frontend.
* Used **Docker** for code isolation, ensuring sandbox stability, and implemented flexible sandbox invocation with the **static factory pattern** and **Spring** configuration.
* Refactored a monolithic project using **Spring Cloud**, implemented **Redis** for distributed session storage of user login information, and divided the project into several modules.
* Used an asynchronous approach to submit user IDs to **RabbitMQ**, forwarding them to the judging queue via a Direct exchange. This reduced response time from **112ms** to **60ms** and increased QPS approximately by **33\%**.