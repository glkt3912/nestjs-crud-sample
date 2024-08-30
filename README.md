# NestJS + Prisma + Cloud Run + Cloud SQL の接続試行サンプル(WIP)

## Installation

```bash
$ yarn install
```

## ローカル検証

```bash
$ docker compose up -d
```

## Cloud SQLへデータベースを作成する

```bash
$ ./shell/create_db_gcs.sh <instance_name>
```

## CloudRun へのデプロイ

### Cloud SQL Auth Proxy の用意

 ```bash
 # CloudRunのアーキテクチャに合わせてプロキシを用意　 ※　下記はサンプル
 # V2プロキシは 接続に不具合出る可能性あり　　参考: https://github.com/GoogleCloudPlatform/cloud-sql-proxy/issues/1659
 $ curl -o ./proxy/cloud-sql-proxy https://storage.googleapis.com/cloudsql-proxy/v1.36.0/cloud_sql_proxy.linux.amd64
 ```

### 環境変数の用意

#### Cloud Runに環境変数を用意

* DATABASE_URL
  - mysql://sample_user:password@127.0.0.1:3306/sample_db
* INSTANCE_CONNECTION_NAME
  - $PROJECT_ID:$REGION:$SQL_INSTANCE_NAME


```bash
# eg
$ vim .env
  -- DATABSE_URL="mysql://sample_user:sample_user_password@localhost:3306/sample_db"
  -- PROJECT_ID="my-project-id"
  -- REGION="asia-northeast1"
  -- INSTANCE_CONNECTION_NAME="PROJECT_ID:REGION:SQL_INSTANCE_NAME"
```

### Cloud SQL Admin APIを有効化し、デプロイ

```bash
$ ./shell/deploy_gcr.sh <service-name> <cloudsql-instance-name>
```