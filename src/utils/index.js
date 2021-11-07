const fs = require('fs')
const Parser = require('todo-parser').Parser;

const CONSTANTS = require('../constants')

module.exports = {
  getTodoTasks: () => {
    fs.access(CONSTANTS.TODO_TXT_FILE_PATH, fs.constants.F_OK, (error) => {
      if (error) {
        throw Error(`file ${CONSTANTS.TODO_TXT_FILE_PATH} does not exist`)
      }
    })

    const tasks = fs.readFileSync(CONSTANTS.TODO_TXT_FILE_PATH).toString().split("\n")
    return tasks.length > 0 ? tasks : []
  },
  getDoneTasks: () => {
    fs.access(CONSTANTS.DONE_TXT_FILE_PATH, fs.constants.F_OK, (error) => {
      if (error) {
        throw Error(`file ${CONSTANTS.DONE_TXT_FILE_PATH} does not exist`)
      }
    })

    const done = fs.readFileSync(CONSTANTS.DONE_TXT_FILE_PATH).toString().split("\n")
    return done.length > 0 ? done : []
  },
  parseTask: (task) => {
    const TodoParser = new Parser()
    return  TodoParser.parse(task)
  }
}