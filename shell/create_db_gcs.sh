# Usage: ./create_db_gcs.sh [instance_name]

# Create a Cloud SQL instance
gcloud sql instances create $1 \
    --database-version=MYSQL_8_0 \
    --cpu=1 \
    --memory=3840MB \
    --storage-type=HDD \
    --storage-size=10GB \
    --region=asia-northeast1 \

# Create tester user
gcloud sql users set-password tester \
    --instance=$1 \
    --password=password \