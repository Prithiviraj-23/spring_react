import { FaExclamationCircle } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import axios from 'axios';


const UserList = ({ users, setUsers}) => {

    const handleDeleteUser = async (rollno) => {
        try {
            // API call to delete user
            await axios.delete(`https://springboot-training-1-wk39.onrender.com/delete/${rollno}`);
            
            // Remove user from state after successful deletion
            setUsers(users.filter((user) => user.rollno !== rollno));
            alert(`User with roll number ${rollno} deleted successfully`);
        } catch (error) {
            console.error('Failed to delete user:', error);
            alert('Failed to delete user');
        }
    };
    return (
       <ul className="space-y-2">
            {users.length > 0 ? (
                users.map((user, index) => (
            <li 
                key={index} 
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex justify-between items-center"
                >
                <div>
                    <p className="text-sm font-medium text-gray-800">
                    {user.rollno} - {user.name}
                    </p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                        <button onClick={() => handleDeleteUser(user.rollno)}>
                            <MdDelete className="text-red-500 text-2xl " />
                        </button>
                    </li>
                ))
                ) : (
                <p className="text-gray-500">No users added yet</p>
            )}
        </ul>
    );
};

export default UserList;
