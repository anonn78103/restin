import mongoose from 'mongoose';

const Connection = async (Raj, Raj123) => {
    const URL = `mongodb+srv://Raj:Raj123@cluster0.flzri2a.mongodb.net/`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;