const _workers = [
  {firstName:"John",lastName:"Miller",age:33,tasks:[{name:"paint walls",pay:215},{name:"build walls",pay:270},
    {name:"install elevator",pay:600},{name:"fix grounds",pay:415}]},{firstName:"Paul",lastName:"Artney",age:24,
    tasks:[{name:"paint walls",pay:215},{name:"build walls",pay:270}]},
    {firstName:"Salomon",lastName:"Waber",age:28,tasks:[{name:"install elevator",pay:600},
    {name:"fix grounds",pay:415}]}
]

const _tasks = [
  {name:"paint walls",pay:215},{name:"build walls",pay:270},
    {name:"install elevator",pay:600},{name:"fix grounds",pay:415}
]

export default {
  getWorkers (cb) {
    setTimeout(() => cb(_workers), 100)
  },
  getTasks (cb) {
    setTimeout(() => cb(_tasks), 100)
  }
}
