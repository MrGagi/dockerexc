## What's this?

Run command bellow on your chosen container. You can choose container with arrows.

```
docker exec -it container_id /bin/bash
```

You also can add your projects and start them from anywhere, you just need to set name and path to docker-compose.yml

```
dockerexc --name="ProjectName" --path="/Users/user/project/docker-compose.yml"
```

After you add your projects you will be able to use

```
dockerexc --start
```

```
dockerexc --stop
```
## Install

You can install this by typing:

```
npm install -g dockerexc
```
