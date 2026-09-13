"use client"
import { FolderPlus } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select } from "@heroui/react";

const AddTask = ({ createATask }) => {
    return (

        <Modal>
            <Button variant="secondary">Add a Task</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FolderPlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Add a Task</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createATask} className="flex flex-col gap-4">
                                    {/* title */}
                                    <TextField className="w-full" name="title" type="text" variant="secondary">
                                        <Label>Title</Label>
                                        <Input placeholder="Enter your Task Title" />
                                    </TextField>
                                    {/* description */}
                                    <TextField className="w-full" name="description" type="text" variant="secondary">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter your description" />
                                    </TextField>
                                    {/* select priority*/}
                                    <Select name='priority' className="w-full" placeholder="Select one" variant="secondary">
                                        <Label>Priority</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="low" textValue="Low">
                                                    Low
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="medium" textValue="Medium">
                                                    Medium
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                               
                                                <ListBox.Item id="high" textValue="High">
                                                    High
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                   
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type='submit'>Submit Task</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>

    );
};

export default AddTask;