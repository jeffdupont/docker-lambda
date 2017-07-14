`docker build . -t sandbox/docker-lambda`
```
docker run --rm -it \
    -v /path/to/lambda/functions:/app/lambdas \
    -v "$HOME"/.aws:/root/.aws:ro \
    -e AWS_PROFILE \
    sandbox/docker-lambda \
    node /app/index.js LAMBDA_NAME_TRIGGER EVENT_JSON
```
```
//// SAMPLE EVENT_JSON
var event = {
    "action": "{LAMBDA ACTION}",
    "apikey": "{AWS_USER_API_KEY}",
    "body": { }
};
```
