# Usage: ./create_db_gcs.sh [instance_name]

gcloud sql instances create $1 \
    --database-version=MYSQL_8_0 \
    --cpu=2 \
    --memory=7680MB \
    --storage-type=HDD \
    --storage-size=10GB \
    --region=asia-northeast1 \


