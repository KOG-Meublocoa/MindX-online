async function main() {
    try {
        console.log("GET DATA ");

        const users = await getUsers();
        console.log("Users:", users);

        const statuses = await getTaskStatus();
        console.log("Task Status:", statuses);

        const flags = await getFlags();
        console.log("Flags:", flags);

        const tasks = await getTasks();
        console.log("Tasks:", tasks);


        console.log("FILTER TASKS");

        const filteredTasks = await filterTasks({
            statusId: 1
        });

        console.log("Tasks có statusId = 1:", filteredTasks);


        console.log("ADD DATA");

        const newUser = {
            userId: 99,
            name: "User Test"
        };

        const addedUser = await addUser(newUser);
        console.log("User vừa thêm:", addedUser);


        const newTask = {
            taskId: 99,
            title: "Task Test",
            description: "Kiểm tra chức năng thêm task",
            statusId: 1,
            flagId: 2,
            assignedTo: 99,
            deadline: "2026-12-30"
        };

        const addedTask = await addTask(newTask);
        console.log("Task vừa thêm:", addedTask);


        console.log("UPDATE DATA ");

        const updatedUser = await updateUser(99, {
            name: "User Test Updated"
        });

        console.log("User sau khi cập nhật:", updatedUser);


        const updatedTask = await updateTask(99, {
            title: "Task Test Updated"
        });

        console.log("Task sau khi cập nhật:", updatedTask);


        console.log("DELETE TASK");

        const deletedTask = await deleteTask(99);
        console.log("Task đã xóa:", deletedTask);


        console.log("FINISHED");

    } catch (error) {
        console.error("Có lỗi xảy ra:", error.message);
    }
}

main();
