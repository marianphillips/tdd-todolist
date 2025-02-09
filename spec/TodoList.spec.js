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
      status: "incomplete",
      day: Date().substring(0,15)
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
      status: "incomplete",
      day: Date().substring(0,15)
    }, {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete",
      day: Date().substring(0,15)
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
      status: "incomplete",
      day: Date().substring(0,15)
    }, {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete",
      day: Date().substring(0,15)
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
      status: "complete",
      day: Date().substring(0,15)
    }, {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete",
      day: Date().substring(0,15)
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
      status: "complete",
      day: Date().substring(0,15)
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
      status: "incomplete",
      day: Date().substring(0,15)
    },
    {
      id: 3,
      text: "make dinner!",
      status: "incomplete",
      day: Date().substring(0,15)
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
      status: "incomplete",
      day: Date().substring(0,15)
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
    const expected = "Not a correct List Item"

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
      status: "complete",
      day: Date().substring(0,15)
    },
    {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete",
      day: Date().substring(0,15)
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

  it("search by day and return a list", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      day: Date().substring(0,15)
    }, {
      id: 2,
      text: "wash the sheets!",
      status: "incomplete",
      day: Date().substring(0,15)
    }]

    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    // verify
    expect(todoList.searchByDay(Date().substring(0,15))).toEqual(expected)
  })

  it("search by day and no day found", () => {
    // set up
    const expected = []

    // execute
    todoList.create("turn the heating on!")
    todoList.create("wash the sheets!")
    // verify

    expect(todoList.searchByDay("not date")).toEqual(expected)
  })


})
