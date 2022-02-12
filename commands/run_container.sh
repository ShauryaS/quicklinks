read -p "Enter container name (dev or prod): " CONTAINER_NAME
echo executing command: docker-compose up -d $CONTAINER_NAME
docker-compose up -d $CONTAINER_NAME