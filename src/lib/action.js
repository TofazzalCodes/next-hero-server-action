import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createATask = async (formData) => {
    "use server"
    // const title = formData.get("title");
    // const description = formData.get("description");
    // const priority = formData.get("priority");
    // const newTask = {title, description, priority}
    // console.log("adding a task with name:", formData);

    const newTask = Object.fromEntries(formData.entries())
    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath("/tasks")
    }
    return res;


}