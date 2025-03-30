import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import { RichTextEditor } from "@mantine/tiptap";
import { IconArrowLeft } from "@tabler/icons-react";
import RichtextEditor from "./RichtextEditor";

const PostJob = () => {
  const select = fields;
  return (
    <div className="py-5 w-4/5 mx-auto font-[Poppins] ">
      <div className="text-2xl font-semibold mb-5 text-[#275DF5]">
        Post a job
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>
        <TagsInput
          withAsterisk
          label="Skills"
          placeholder="Enter skill"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />
        <div>
          <div className="text-sm font-medium">Job Description</div>
          <RichtextEditor />
        </div>
        <div className="flex gap-4">
          <Button variant="light" color="#275DF5">
            Publish Job
          </Button>
          <Button variant="outline" color="#275DF5">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PostJob;
