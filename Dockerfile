# ALPINE

###################################
# REQUIRED for bashLaVa https://github.com/firepress-org/bashlava
# REQUIRED for Github Action CI template https://github.com/firepress-org/ghostfire/tree/master/.github/workflows
###################################

ARG APP_NAME="ssg-starter"
ARG VERSION="0.3.0"
ARG RELEASE="0.3.0"
ARG GITHUB_USER="firepress-org"

###################################
# REQUIRED BY OUR GITHUB ACTION CI
###################################

ARG GIT_PROJECT_NAME="ssg-starter"
ARG DOCKERHUB_USER="devmtl"
ARG GITHUB_ORG="firepress-org"
ARG GITHUB_REGISTRY="registry"

ARG GIT_REPO_DOCKERFILE="https://github.com/pascalandy/ssg-starter"
ARG GIT_REPO_SOURCE="pascalandy/ssg-starter"

###################################
# Start your Dockerfile from here
###################################
