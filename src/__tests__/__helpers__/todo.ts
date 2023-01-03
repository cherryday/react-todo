import { faker } from '@faker-js/faker'
import { Folder, Task, FOLDER_COLORS } from '../../services/todo.service'

export function createMockFolder(): Folder {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    color: faker.helpers.arrayElement(FOLDER_COLORS),
    tasks: []
  }
}

export function createMockTask(): Task {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    completed: false
  }
}
