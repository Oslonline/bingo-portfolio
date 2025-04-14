FROM docker.io/debian:trixie-slim@sha256:2a68788db17e6f845263ea011a249de9d78394607da22836f107fa033b70882c

ENV NODE_VERSION=23.0.0
ENV CADDY_VERSION=v2.7.6
ENV APP_DIR=/app

USER root

SHELL ["/bin/bash", "-o", "pipefail", "-c"]
# hadolint ignore=DL3008
RUN set -x \
    && apt-get update  \
    && apt-get install -y --no-install-recommends \
      curl \
      wget \
      git \
      ca-certificates \
      tar \
      unzip \
      xz-utils \
      gnupg \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz -o node.tar.xz \
    && tar -xJf node.tar.xz \
    && mv node-v$NODE_VERSION-linux-x64 /usr/local/node \
    && ln -s /usr/local/node/bin/node /usr/bin/node \
    && ln -s /usr/local/node/bin/npm /usr/bin/npm \
    && ln -s /usr/local/node/bin/npx /usr/bin/npx \
    && rm node.tar.xz

RUN curl -fsSL "https://github.com/caddyserver/caddy/releases/download/${CADDY_VERSION}/caddy_${CADDY_VERSION#v}_linux_amd64.tar.gz" -o caddy.tar.gz \
    && tar -xzf caddy.tar.gz \
    && mv caddy /usr/bin/caddy \
    && chmod +x /usr/bin/caddy \
    && rm caddy.tar.gz

WORKDIR ${APP_DIR}

RUN set -x \
    && git clone --branch main https://github.com/Oslonline/bingo-portfolio.git . \
    && npm install  \
    && npm run build \
    && npm cache clean --force \
    && rm -rf  \
      /usr/local/node \
      node_modules  \
      .git

# Inject Caddyfile
RUN set -x \
  && mkdir -p /etc/caddy \
  && useradd --comment 'Portfolio User' --create-home --uid 1337 --shell /bin/sh portfolio \
  && chown -R portfolio:portfolio ${APP_DIR} /etc/caddy \
  && printf ":80\nroot * %s/dist\nfile_server\n" "${APP_DIR}" > /etc/caddy/Caddyfile

USER portfolio

EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
