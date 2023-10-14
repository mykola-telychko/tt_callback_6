// Function to serialize an object to a string
function serializeObj(obj, callback) {
    try {
        const serializedData = JSON.stringify(obj);
        callback(null, serializedData);
    } catch (error) {
        callback(error, null);
    }
}

// Function to deserialize a string into an object
function deserializeObj(serializedData, callback) {
    try {
        const obj = JSON.parse(serializedData);
        callback(null, obj);
    } catch (error) {
        callback(error, null);
    }
}

// Example usage
const simpleObj = { name: 'John', age: 30 };

serializeObj(simpleObj, (serializeError, serializedData) => {
    if (serializeError) {
        console.error('Serialization error:', serializeError);
        return;
    }

    console.log('Serialized data:', serializedData);

    deserializeObj(serializedData, (deserializeError, deserializedObject) => {
        if (deserializeError) {
            console.error('Deserialization error:__', deserializeError);
            return;
        }

        console.log('Deserialized object:__', deserializedObject);
    });
});
