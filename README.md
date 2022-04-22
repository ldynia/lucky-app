# Installation

1.  Start application

    ```console
    git clone --recursive git@github.com:ldynia/lucky-app.git
    cd lucky-app
    docker-compose -f docker-compose.dev.yaml build
    docker-compose -f docker-compose.dev.yaml build $(cat build-args.dev | while read line; do out+="--build-arg $line"; done; echo $out; out="")
    docker-compose -f docker-compose.dev.yaml up
    ```

1.  Open app in browser and test all applications:
    - proxy app [http://localhost:800](http://localhost:800)
    - frontend app [http://localhost:801](http://localhost:801)
    - movie app [http://localhost:802/api/v1/movies/recommend](http://localhost:802/api/v1/movies/recommend)
    - music app [http://localhost:803/api/v1/music/recommend](http://localhost:803/api/v1/music/recommend)
