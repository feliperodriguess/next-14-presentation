import { addTodo } from "@/lib/actions";

import { Input } from "./input";
import { SubmitButton } from "./submit-button";

export function FormNew() {
  return (
    <form className="my-16 space-y-4 w-[300px]" action={addTodo}>
      <Input name="title" placeholder="Write your todo..." required />
      <SubmitButton>Add</SubmitButton>
    </form>
  );
}
