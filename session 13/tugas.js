let tasks = []
let index = 0

function addTask(task) {
  tasks[index] = task
  index++
}

function deleteTask(task) {
  let currIndex = -1
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === task) {
      currIndex = i
      break
    }
  }

  if (currIndex == -1) {
    console.log('data not found')
    return
  }

  for (let i = currIndex; i < tasks.length; i++) {
    tasks[i] = tasks[i + 1]
  }

  const newTasks = tasks.filter(task => Boolean(task))
  tasks = newTasks

  index--
}

function editTask(task, newTask) {
  let currIndex = -1
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === task) {
      currIndex = i
      break
    }
  }

  if (currIndex != -1) {
    tasks[currIndex] = newTask
  }
}

function showTasksByLatest() {
  if (tasks.length == 0) {
    console.log('No Task!')
  } else {
    const newTasks = [...tasks]
    console.log(newTasks.reverse())
  }
}

function main() {
  showTasksByLatest()
  // EXPECTED: "No Task!"
  addTask('task1')
  addTask('task2')
  addTask('task3')
  addTask('task4')
  deleteTask('task3')
  editTask('task1', 'newtask1')
  showTasksByLatest()
  // EXPECTED: "task4, task2, newtask1"
  deleteTask('task1')
  showTasksByLatest()
  // EXPECTED: "task4, task2, newtask1"
  editTask('newtask1', 'task1')
  showTasksByLatest()
  // EXPECTED: "task4, task2, task1"
  // 'task1', 'task2', 'task4', 'task1', 'task2', 'task3', 'task4'
  addTask('task1')
  addTask('task2')
  addTask('task3')
  addTask('task4')
  deleteTask('task1')
  deleteTask('task1')
  showTasksByLatest()
  // EXPECTED: "task4, task3, task2, task4, task2"
}

main()