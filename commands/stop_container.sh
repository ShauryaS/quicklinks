read -p "Enter container name (dev or prod): " CONTAINER_NAME
echo executing command: docker-compose stop $CONTAINER_NAME
docker-compose stop $CONTAINER_NAME