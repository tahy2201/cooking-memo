# cooking-memo

## 概要

## development

### front

```shell
cd frontend
yarn start
```

### backend

```shell
cd coome
gradle bootRun

# 別のshellで
gradle build --continuous
```

### Db, S3

```shell
docker compose up
```

### S3 commands

```shell
aws --endpoint-url http://localhost:9090 s3 ls
```

