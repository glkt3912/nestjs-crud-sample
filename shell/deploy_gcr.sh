#!/bin/bash

# Load environment variables
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Usage: ./shell/deploy_gcr.sh <service-name> <cloudsql-instance-name>
gcloud run deploy $1 \
  --source . \
  --project="$PROJECT_ID" \
  --platform=managed \
  --region="$REGION" \
  --allow-unauthenticated \
  --add-cloudsql-instances "$PROJECT_ID:$REGION:$2" \
  --set-env-vars="DATABASE_URL=mysql://sample_user:password@127.0.0.1:3306/$PROJECT_ID:$REGION:$2:sample_db"
