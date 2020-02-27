# Project Zion Services

This is the backend service for Project Zion

# Run Mongodb local

## Use Docker Container

1. Install Docker Desktop
2. run 

``` sh
docker container run -it --rm -p 27017:27017 --name mongo -v $(pwd)/data:/data mongo
```