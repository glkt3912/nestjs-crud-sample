# Usage: ./deploy_gcr.sh <service-name> <cloudsql-instance-name>

gcloud run deploy $1 \
    --source . \
    --platform=managed \
    --region=asia-northeast1 \
    --allow-unauthenticated \
    --add-cloudsql-instances $2 \
    --set-env-vars PORT=8087 \