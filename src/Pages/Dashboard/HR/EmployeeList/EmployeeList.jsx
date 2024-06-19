import useAllUsers from "../../../../hooks/useAllUsers";

const EmployeeList = () => {
    const [users,refetch,usersLoading]=useAllUsers()
    console.log(users,usersLoading)
    return (
        <div>
            This is employee list
        </div>
    );
};

export default EmployeeList;