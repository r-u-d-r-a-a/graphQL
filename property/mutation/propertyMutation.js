import { editItem, addItem, deleteItem } from '../model/propertyModel.js'

export const addProperty = (propertyToAdd) => {
    try{
        const resp = addItem(propertyToAdd);
        return resp;
    }catch(err)
    {
        return err;
    }
}

export const editProperty = (propertyToEdit) => {
    try{
        const resp = editItem(propertyToEdit?.id,propertyToEdit);
        return resp;
    }
    catch(err)
    {
        return err;
    }
}

export const deleteProperty = (deleteId) => {
    try{
        const resp = deleteItem(deleteId);
        return resp;
    }
    catch(err)
    {
        return err;
    }
}