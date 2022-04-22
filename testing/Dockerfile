FROM node:17.8-slim

ENV PATH="/app/node_modules/.bin/:$PATH"

WORKDIR /app

COPY ./ /app

RUN apt-get update && apt-get install -y curl iputils-ping python3-pip
RUN pip install --upgrade --requirement requirements.txt

RUN npm install

CMD sh -c 'sleep infinity'