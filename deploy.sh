if [ -x "$(command -v docker)" ]; then
  if [ -z "$(docker ps -aq)" ]; then
    echo "No machines are running"
  else
    echo "Stoping all containers"
    docker stop $(docker ps -aq)
  fi

  echo "Pruning docker data"
  docker system prune -a -f
fi

echo "Updating apt"
apt update

echo "Installing/Updating docker"
apt install docker.io --yes

echo "Removing old directory"
rm -rf /app

echo "Cloning repository"
git clone https://github.com/mikhail-ev/mikhail-y.dev.git /app

echo "Building image"
docker build /app -t app

echo "Running image"
docker run -d -p 80:3000 app
