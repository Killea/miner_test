const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '87PZcSZ2wj8VfCfDGqtUP8Eh4oYjvg8XUUxsLuaUZoiiJLdkwXr6n9HK566UmsV5z7YRfnV5Za1zYP33mLyG3fE6TSwCo1k',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner