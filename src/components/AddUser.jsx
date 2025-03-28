import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheckCircle } from 'react-icons/fa';
import UserList from './UserList';
import Header from './Header';

const AddUser = () => {
    const [formData, setFormData] = useState({
        rollno: '',
        name: '',
        email: '',
        password: ''
    });

    const [users, setUsers] = useState([]);

    // ✅ Fetch users when the component mounts using axios
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://springboot-training-1-wk39.onrender.com/api/getAll');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://springboot-training-1-wk39.onrender.com/api/create',
                formData
            );

            if (response.status === 200) {
                const newUser = response.data;
                setUsers((prevUsers) => [...prevUsers, newUser]); // ✅ Update state
                setFormData({
                    rollno: '',
                    name: '',
                    email: '',
                    password: ''
                });
                alert('User added successfully');
            } else {
                console.error('Error adding user:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-[90vh] bg-gray-100">
                {/* Add User Form */}
                <div className="bg-white p-6 mt-6 mb-6 rounded-xl shadow-md w-[500px] h-[500px]">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        Add User
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Roll Number Field */}
                        <div>
                            <label htmlFor="rollno" className="block text-sm font-medium text-gray-700 mb-1">
                                Roll Number:
                            </label>
                            <input
                                type="number"
                                id="rollno"
                                name="rollno"
                                value={formData.rollno}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 flex justify-center items-center gap-2"
                            >
                                <FaCheckCircle className="text-white" />
                                Add User
                            </button>
                        </div>
                    </form>
                </div>

                {/* User List */}
                <div className="bg-white p-6 mt-6 ml-6 mb-6 rounded-xl shadow-md w-[500px] h-[500px]">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        User List
                    </h2>
                    <div className="max-h-[400px] overflow-y-auto">
                    <UserList users={users} setUsers={setUsers} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddUser;
