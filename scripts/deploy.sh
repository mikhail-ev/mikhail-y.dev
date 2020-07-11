if [ -x "$(command -v docker)" ]; then
  echo "Docker installed"
else
  echo "Updating apt"
  apt update

  echo "Installing docker"
  apt install docker.io --yes
fi

echo "Removing old directory"
rm -rf /app

echo "Cloning repository"
git clone https://github.com/mikhail-ev/mikhail-y.dev.git /app

echo "Building image"
docker build /app -t app

if [ -z "$(docker ps -aq)" ]; then
  echo "No machines are running"
else
  echo "Stoping all containers"
  docker stop $(docker ps -aq)
fi

echo "Running image"
docker run -d -p 80:3000 app

echo "Pruning docker data"
docker system prune -a -f
