var kafka = require('kafka-node'),
    io = require('socket.io-emitter')({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT }),
    HighLevelConsumer = kafka.HighLevelConsumer,
    HighLevelProducer = kafka.HighLevelProducer,
    Client = kafka.Client;

    kafkaGroup = 'twitter';
    client = new Client(process.env.ZOOKEEPER_URL, kafkaGroup);

    producer = new HighLevelProducer(client);

    producer.createTopics(['tweets'], false, function (err, data) {
        console.log("Kafka: ", process.env.ZOOKEEPER_URL, data);
    });

    var consumer = new HighLevelConsumer(
        client,
        [
            {topic: 'tweets'}
        ],
        {
            groupId: kafkaGroup
        }
    );

consumer.on('message', function(message) {
    var msg = {};
    try {
        msg = JSON.parse(message.value);
    } catch (e) {}
    io.emit('tweet', msg);
});

consumer.on('error', function(err) {
  console.error("Consumer error");
})


process.on('uncaughtException', function (err) {
  console.log(err);
})
