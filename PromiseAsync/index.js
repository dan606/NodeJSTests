const Test = require('./test')

tst = new Test()

console.log("1")
tst.doWork().then(res => {
  console.log(res)
}).catch( err => {
  console.log("IN CATCH " + err)
})
console.log("2")

async function start() 
{
  try{
    console.log(await tst.doWork())
  }
  catch(err) {
    console.log("IN CATCH " + err)
  }
}
start()
console.log("3")

console.log("4")
tst.doWork2().then(res => {
  console.log(res)
}).catch( err => {
  console.log("IN CATCH " + err)
})
console.log("5")

async function start() 
{
  try{
    console.log(await tst.doWork2())
  }
  catch(err) {
    console.log("IN CATCH " + err)
  }
}
start()
console.log("6")