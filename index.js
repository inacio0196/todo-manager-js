const { getTodoTasks, parseTask, getDoneTasks } = require('./src/utils')

function getTasks() {
  const tasks = getTodoTasks()
  let detailedTasks = tasks.map(task => parseTask(task))
  detailedTasks = detailedTasks.filter(task => task.original)

  return detailedTasks
}

function getDone() {
  const done = getDoneTasks()
  let detailedDone = done.map(task => parseTask(task))
  detailedDone = detailedDone.filter(task => task.original)

  return detailedDone
}

const task = getTasks()

console.log(task)

module.exports = { getTasks, getDone }