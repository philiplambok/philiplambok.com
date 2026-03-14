#!/usr/bin/env bash
set -euo pipefail

# Configuration
REGISTRY="philiplambok/philiplambok.com"
REMOTE_HOST="${DEPLOY_HOST:?Set DEPLOY_HOST (e.g. user@your-server-ip)}"
COMPOSE_DIR="/home/ubuntu/projects/philiplambok.com-proxy"
TAG="${REGISTRY}:latest"

echo "==> Building Nuxt app..."
pnpm build

echo "==> Building Docker image for linux/amd64..."
docker build --platform linux/amd64 -t "$TAG" .

echo "==> Pushing image to registry..."
docker push "$TAG"

echo "==> Deploying on server..."
ssh "$REMOTE_HOST" << EOF
  cd $COMPOSE_DIR
  docker pull $TAG
  docker compose up -d --force-recreate main-app
EOF

echo "==> Deployed!"
