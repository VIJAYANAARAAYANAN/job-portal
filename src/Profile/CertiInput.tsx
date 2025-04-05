import { Button, Checkbox, Textarea, TextInput } from "@mantine/core";
import fields from "../Data/Profile";
import SelectPInput from "./SelectPInput";
import { useState } from "react";
import { MonthPicker, MonthPickerInput } from "@mantine/dates";

const CertiInput = (props: any) => {
  const select = fields;
  const [issuedate, setissuedate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-2.5">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2 pb-2">
        <TextInput label="Title" withAsterisk placeholder="Enter title" />
        <SelectPInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 pb-2">
        <MonthPickerInput
          withAsterisk
          maxDate={new Date()}
          label="Issue date"
          placeholder="Pick Date"
          value={issuedate}
          onChange={setissuedate}
        />
        <TextInput label="Certificate ID" withAsterisk placeholder="Enter ID" />
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() => props.setedit(false)}
          variant="outline"
          color="#275DF5"
        >
          Save
        </Button>
        <Button
          onClick={() => props.setedit(false)}
          variant="light"
          color="red.8"
        >
          Discard
        </Button>
      </div>
    </div>
  );
};
export default CertiInput;
