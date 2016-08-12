export REDIS_HOST=redis
export REDIS_PORT=6379
export ZOOKEEPER_URL=kafka:2181

exec node kafka-consumer.js
