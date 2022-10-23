# Getany

![getany-storefront](https://socialify.git.ci/hridaya423/getany-storefront/image?font=Inter&language=1&logo=https%3A%2F%2Fmedusajs.com%2Fimages%2Fmedusa-logo-black.svg&name=1&owner=1&pattern=Signal&stargazers=1&theme=Light)

## About

### Participants
Hridya - @hridaya423

### Description
An open-source ecommerce application built using Medusa & Next.js. It includes products screen, cart, checkout, search, live chat, discord notifications, storage with Minio, Matomo Analytics

## Setup Project

### Prerequisites

Before you start make sure you have:
* [Node.js](https://nodejs.org/en/)
* [Medusa Server](https://github.com/hridaya423/getany-server)
* [Redis](https://redis.io/docs/getting-started/installation/install-redis-on-windows/)
* [Meilisearch](https://docs.meilisearch.com/learn/getting_started/quick_start.html#setup-and-installation)
* [Minio](https://min.io/docs/minio/windows/index.html)
* [Rocket Chat Account](https://www.rocket.chat/)
* [Matomo Account](https://matomo.org/)

### Install Project
* Clone the repository:
`git clone https://github.com/hridaya423/getany-storefront`
* Change directory and install dependencies:
```bash
cd getany-storefront
npm install
```
* [Setup your medusa server](https://github.com/hridaya423/getany-server/blob/master/README.md)
* [Put in the env variables for Meilisearch](https://docs.medusajs.com/add-plugins/meilisearch#storefront-prerequisites)
* [Setup Medusa Admin](https://docs.medusajs.com/admin/quickstart/)
* Start the app

`npm run dev`

## Resources
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Admin Panel](https://github.com/medusajs/admin)
- [Medusa Documentation](https://docs.medusajs.com/)
