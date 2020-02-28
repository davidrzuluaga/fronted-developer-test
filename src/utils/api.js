export const fetchProjectInfo = async () => {
    const response = await fetch(`${process.env.BASE_URL_API_PROJECT}`);
    return await response.json();
};

export const fetchEmployees = async () => {
    const response = await fetch(`${process.env.BASE_URL_API_EMPLOYEES}/employees`);
    return await response.json();
};

export const fetchEmployee = async (id) => {
    const response = await fetch(`${process.env.BASE_URL_API_EMPLOYEES}/employee/${id}`);
    return await response.json();
};

export const removeEmployee = async () => {
    const config = {
        method: 'DELETE'
    };
    const response = await fetch(`${process.env.BASE_URL_API_EMPLOYEES}/delete/2`, config);
    return await response.json();
};