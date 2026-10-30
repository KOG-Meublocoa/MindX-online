// 1. API CONFIGURATION
const DOMAIN_APP = "https://mindx-mockup-server.vercel.app"; 
const API_KEY = "6ae4813b673bc3f8fa4e5b2c";   
const BASE_URL = `${DOMAIN_APP}/api/resources`;


// 2. HÀM GỌI API CHUNG
async function requestAPI(resource, method = "GET", data = null, dataId = "") {
    let url = `${BASE_URL}/${resource}`;

    if (dataId) {
        url += `/${dataId}`;
    }

    url += `?apiKey=${API_KEY}`;

    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (data !== null) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`API Error ${response.status}: ${errorMessage}`);
    }

 const result = await response.text();

if (!result) return null;

const json = JSON.parse(result);


return json.data !== undefined ? json.data : json;
}


// 3. LẤY DANH SÁCH DỮ LIỆU
async function getUsers() {
    return await requestAPI("users");
}

async function getTaskStatus() {
    return await requestAPI("taskStatus");
}

async function getFlags() {
    return await requestAPI("flags");
}

async function getTasks() {
    return await requestAPI("tasks");
}


// 4. LỌC TASK
async function filterTasks(criteria = {}) {
    const tasks = await getTasks();

    return tasks.filter(task => {
        const matchFlag =
            criteria.flagId === undefined ||
            task.flagId === criteria.flagId;

        const matchStatus =
            criteria.statusId === undefined ||
            task.statusId === criteria.statusId;

        const matchUser =
            criteria.assignedTo === undefined ||
            task.assignedTo === criteria.assignedTo;

        return matchFlag && matchStatus && matchUser;
    });
}


// 5. THÊM DỮ LIỆU
async function addUser(user) {
    return await requestAPI("users", "POST", user);
}

async function addTask(task) {
    return await requestAPI("tasks", "POST", task);
}

// 6. TÌM ID CỦA DỮ LIỆU
async function findRecordId(resource, field, value) {
    const records = await requestAPI(resource);

    const record = records.find(item => item[field] === value);

    if (!record) {
        throw new Error(`Không tìm thấy dữ liệu ${value}`);
    }

    if (!record._id) {
        throw new Error("Không tìm thấy _id của dữ liệu trên server");
    }

    return record._id;
}


// 7. CẬP NHẬT DỮ LIỆU
async function updateUser(userId, newData) {
    const serverId = await findRecordId("users", "userId", userId);

    return await requestAPI("users", "PUT", newData, serverId);
}

async function updateTask(taskId, newData) {
    const serverId = await findRecordId("tasks", "taskId", taskId);

    return await requestAPI("tasks", "PUT", newData, serverId);
}


// 8. XÓA TASK
async function deleteTask(taskId) {
    const serverId = await findRecordId("tasks", "taskId", taskId);

    return await requestAPI("tasks", "DELETE", null, serverId);
}
