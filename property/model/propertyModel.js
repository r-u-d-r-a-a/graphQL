import db from '../../db/db.js';

export const getItem = (id) => {

    try{

        const property = db?.properties?.filter(property => property?.id === parseInt(id))[0]
        return property;


    }catch(err)
    {
        console('Error:',err);
        return err;
    }

}

export const listItems = () => {
    try{
        const properties = db?.properties;
        return properties;

    }
    catch(err)
    {
        console('Error:',err);
        return err
    }
}

export const addItem = (data) => {

    try{
        const newProperty = { id: db.properties.length + 1, ...data};
        db.properties.push(newProperty);
    }catch(err)
    {
        console('Error:',err);
        return err
    }

}

export const editItem = (id,data) => {
    try{

        const index = db?.properties.findIndex(property => property?.id === parseInt(id))

        if(index == -1)
        {
            throw new Error('Property not found');
        }
        else
        {
            data.id = parseInt(data.id);
            db.properties[index] = data;
            return db.pets[index];
        }

    }catch(err)
    {
        console('Error:',err);
        return err;
    }
}

export const deleteItem = id => {
    try {
       
        const index = db.properties.findIndex(property => property.id === parseInt(id))

        if (index === -1){
            throw new Error('Property not found')
        } 
        else {
            db.properties.splice(index, 1)
            return db.properties
        }
    } catch (err) {
        console.error('Error', err)
        return err
    }
} 