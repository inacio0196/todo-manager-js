const { getTodoTasks, parseTask, getDoneTasks } = require('./src/utils')

function getTasks() {
  const tasks = getTodoTasks()
  return tasks
}

function getDone() {
  const done = getDoneTasks()
  return done
}

function pickTaskByPriority(priorityLetter) {
  let tasks = getTasks()
  tasks = tasks.filter(task => task.priority === priorityLetter)

  return tasks
}

const task = getTasks()
// const done = getDone()

console.log(task)
// console.log(done)

module.exports = { getTasks, getDone, pickTaskByPriority }