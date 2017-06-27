docker build . -t sandbox/docker-lambda

docker run --rm -it \
    -v /path/to/lambda/functions:/app/lambdas \
    -v "$HOME"/.aws:/root/.aws:ro \
    -e AWS_PROFILE=$AWS_PROFILE \
    sandbox/docker-lambda \
    node /app/index.js foo '{"bar":"baz"}'
