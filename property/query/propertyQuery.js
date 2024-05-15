import { getItem, listItems } from '../model/propertyModel.js'

export const getProperty = id => {
    try {
        const resp = getItem(id)
        return resp
    } catch (err) {
        return err
    }
}

export const listProperties = () => {
    try {
        const resp = listItems()
        return resp
    } catch (err) {
        return err
    }
}