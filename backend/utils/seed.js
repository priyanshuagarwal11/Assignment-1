import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jwt_auth_db');
    console.log('Connected to MongoDB for seeding...');

    await User.deleteMany({});
    console.log('Cleared existing users');

    const users = [
      {
        name: 'Test Admin',
        email: 'admin@example.com',
        password: 'Password123',
        role: 'admin',
      },
      {
        name: 'Test User',
        email: 'user@example.com',
        password: 'Password123',
        role: 'user',
      },
    ];

    for (const u of users) {
      await User.create(u);
    }

    console.log('Seeded demo admin and user accounts successfully');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err.message);
    process.exit(1);
  }
};

seedUsers();
