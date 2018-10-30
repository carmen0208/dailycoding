var cluster = require('cluster')
var http = require('http')
var numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  console.log('[master] ' + 'start master...')

  for (var i = 0; i < numCPUs; i++) {
    var wk = cluster.fork();
    wk.send('[master] ' + 'hi worker' + wk.id)
  }

  cluster.on('fork', (worker) => {
    console.log('[master] ' + 'fork: worker' + worker.id)
  })

  cluster.on('online', (worker) => {
    console.log('[master] ' + 'online: worker' + worker.id)
  })

  cluster.on('listening', (worker, address) => {
    console.log(
      '[master] ' +
        'listening: worker' +
        worker.id +
        ',pid:' +
        worker.process.pid +
        ', Address:' +
        address.address +
        ':' +
        address.port
    )
  })

  cluster.on('disconnect', (worker) => {
    console.log('[master] ' + 'disconnect: worker' + worker.id)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log('[master] ' + 'exit worker' + worker.id + ' died')
  })

  const eachWorker = (callback) => {
    for (var id in cluster.workers) {
      callback(cluster.workers[id])
    }
  }

  setTimeout(() => {
    eachWorker((worker) => {
      worker.send('[master] ' + 'send message to worker' + worker.id)
    })
  }, 3000)

  Object.keys(cluster.workers).forEach((id) => {
    cluster.workers[id].on('message', (msg) => {
      console.log('[master] ' + 'message ' + msg)
    })
  })
} else if (cluster.isWorker) {
  console.log('[worker] ' + 'start worker ...' + cluster.worker.id)

  process.on('message', (msg) => {
    console.log('[worker] ' + msg)
    process.send('[worker] worker' + cluster.worker.id + ' received!')
  })

  http
    .createServer((req, res) => {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end('worker' + cluster.worker.id + ',PID:' + process.pid)
    })
    .listen(3000)
}

// [master] start master...
// [master] fork: worker1
// [master] fork: worker2
// [master] fork: worker3
// [master] fork: worker4
// [master] fork: worker5
// [master] fork: worker6
// [master] fork: worker7
// [master] fork: worker8
// [master] online: worker1
// [master] online: worker2
// [worker] start worker ...1
// [worker] [master] hi worker1
// [master] online: worker3
// [master] message [worker] worker1 received!
// [master] listening: worker1,pid:51559, Address:null:3000
// [master] online: worker6
// [worker] start worker ...2
// [worker] [master] hi worker2
// [master] message [worker] worker2 received!
// [worker] start worker ...3
// [master] listening: worker2,pid:51560, Address:null:3000
// [master] online: worker5
// [worker] [master] hi worker3
// [master] message [worker] worker3 received!
// [master] listening: worker3,pid:51561, Address:null:3000
// [worker] start worker ...6
// [master] online: worker7
// [worker] [master] hi worker6
// [master] message [worker] worker6 received!
// [master] online: worker4
// [master] listening: worker6,pid:51564, Address:null:3000
// [master] online: worker8
// [worker] start worker ...5
// [worker] start worker ...7
// [worker] [master] hi worker5
// [master] message [worker] worker5 received!
// [master] listening: worker5,pid:51563, Address:null:3000
// [worker] [master] hi worker7
// [master] message [worker] worker7 received!
// [worker] start worker ...4
// [master] listening: worker7,pid:51565, Address:null:3000
// [worker] [master] hi worker4
// [master] message [worker] worker4 received!
// [master] listening: worker4,pid:51562, Address:null:3000
// [worker] start worker ...8
// [worker] [master] hi worker8
// [master] message [worker] worker8 received!
// [master] listening: worker8,pid:51566, Address:null:3000
// [worker] [master] send message to worker1
// [worker] [master] send message to worker2
// [worker] [master] send message to worker5
// [worker] [master] send message to worker3
// [worker] [master] send message to worker7
// [worker] [master] send message to worker4
// [worker] [master] send message to worker6
// [worker] [master] send message to worker8
// [master] message [worker] worker1 received!
// [master] message [worker] worker2 received!
// [master] message [worker] worker5 received!
// [master] message [worker] worker3 received!
// [master] message [worker] worker4 received!
// [master] message [worker] worker7 received!
// [master] message [worker] worker6 received!
// [master] message [worker] worker8 received!