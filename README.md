# slice of life blog

Personal blog built with Nuxt 4 and Nuxt Content.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Deploy

Requires `docker login` on both your local machine and the server.

```bash
DOCKER_REGISTRY=yourusername/philiplambok-com DEPLOY_HOST=user@your-server-ip ./deploy.sh
```

To use a custom port (default is 3000):

```bash
DOCKER_REGISTRY=yourusername/philiplambok-com DEPLOY_HOST=user@your-server-ip DEPLOY_PORT=8080 ./deploy.sh
```

This will:
1. Build the Docker image for linux/amd64
2. Push it to the Docker registry
3. SSH into the server, pull the image, and restart the container

### Manual Docker build

```bash
docker build --platform linux/amd64 -t yourusername/philiplambok-com .
docker push yourusername/philiplambok-com
```
