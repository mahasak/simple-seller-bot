import { MemoryCache } from '../MemoryCache'
import { ICachedItem} from '../ICache'

const cache = new MemoryCache()

interface IPerson {
    firstname: string;
    lastname: string;
    age: number;
}

const userId = "USER_1"

const person: IPerson = {
    firstname: "Person",
    lastname: "1",
    age: 98
}

const personUpdated: IPerson = {
    firstname: "Person",
    lastname: "1 (Update)",
    age: 99
}

test('MemoryCache type test', async () => {
    expect(cache).toBeInstanceOf(MemoryCache)
    const size = await cache.size()
    expect(size).toEqual(0)
})

test('Memory cache should return when not found', async () => {
    let ret = await cache.get("NOT_EXISTS")
    expect(ret).toBeUndefined()
})

test('MemoryCache should set and maintain a valid value', async () => {
    let sizeBefore = await cache.size()
    expect(sizeBefore).toEqual(0)
    cache.set(userId, person)
    let sizeAfter = await cache.size()
    expect(sizeAfter).toEqual(1)
})

test('MemoryCache should get a valid value', async () => {
    const obj = await cache.get<IPerson>(userId)
    expect(obj.firstname).toBe(person.firstname)
    expect(obj.lastname).toBe(person.lastname)
    expect(obj.age).toBe(person.age)
})

test('MemoryCache should delete a value', async () => {
    const before = await cache.get<IPerson>(userId)
    expect(before).not.toBeUndefined()

    await cache.delete(userId)

    const after = await cache.get<IPerson>(userId)
    expect(after).toBeUndefined()
})

test('MemoryCache should update existing cache properly', async () => {
    await cache.set(userId, person)

    const before = await cache.get<IPerson>(userId)
    expect(before).toBe(person)

    await cache.set(userId, personUpdated)

    const  after = await cache.get<IPerson>(userId)
    expect(after).toBe(personUpdated)
})

test('MemoryCache should clear properly', async () => {
    await cache.set("USER_2", person)
    await cache.set("USER_3", person)

    const size = await cache.size()
    expect(size).toEqual(3)

    await cache.clear()

    const sizeAfter = await cache.size()
    expect(sizeAfter).toEqual(0)
})