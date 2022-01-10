const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  
  it("creates a todo item", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }]
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(todoList.list).toEqual(expected)
  })

  it("creates a todo list with 2 items", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }, {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete"
    }]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    // verify
    expect(todoList.list).toEqual(expected)
  })


  it("getAll to return full to do", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }, {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete"
    }]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    // verify
    expect(todoList.getAll()).toEqual(expected)
  })

  it("set to complete", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    }, {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete"
    }]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    todoList.setComplete(1)
    // verify
    expect(todoList.getAll()).toEqual(expected)
  })

  it("get complete", () => {
    // set up
    const expected = [ {
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    },
]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    todoList.create("make dinner!")
    todoList.setComplete(1)
    // verify
    expect(todoList.getComplete()).toEqual(expected)
  })

  it("get incomplete", () => {
    // set up
    const expected = [ {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete"
    },
    {
      id: 3,
      text: "make dinner!",
      status: "incomplete"
    },
]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    todoList.create("make dinner!")
    todoList.setComplete(1)
    // verify
    expect(todoList.getIncomplete()).toEqual(expected)
  })

  it("search by ID and return", () => {
    // set up
    const expected =  {
      id: 3,
      text: "make dinner!",
      status: "incomplete"
    }

    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    todoList.create("make dinner!")
    todoList.setComplete(1)
    // verify
    expect(todoList.searchByID(3)).toEqual(expected)
  })

  it("search by ID and return, ID does not exit", () => {
    // set up
    const expected = "NOOOOOOOOOO"

    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    todoList.create("make dinner!")
    todoList.setComplete(1)
    // verify
    expect(todoList.searchByID(4)).toEqual(expected)
  })

  it("search by ID and remove", () => {
    // set up
    const expected = [ {
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    },
    {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete"
    },
]

    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    todoList.create("make dinner!")
    todoList.setComplete(1)
    todoList.removeByID(3)

    // verify
    expect(todoList.list).toEqual(expected)
  })


})
