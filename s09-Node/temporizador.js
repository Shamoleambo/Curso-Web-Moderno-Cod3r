const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 1', function(){
    console.log('Executando tarefa1', new Date().getSeconds());
});

setTimeout(function(){
    tarefa1.cancel();
    console.log("tarefa1 cancelada")
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 11;
regra.second = 12;

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa2', new Date().getSeconds());
});

