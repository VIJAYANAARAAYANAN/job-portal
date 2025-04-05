import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectPInput from "./SelectPInput";
import { useState } from "react";
import { MonthPicker, MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = fields;
  const [description, setdescription] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robustapplications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and codingstandards, and contribute to the continuous improvement of the development process."
  );
  const [checked, setChecked] = useState(false);

  const [startdate, setstartdate] = useState<Date | null>(new Date());
  const [enddate, setenddate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-2.5">
      <div className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience"
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 pb-2">
        <SelectPInput {...select[0]} />
        <SelectPInput {...select[1]} />
      </div>
      <SelectPInput {...select[2]} />
      <Textarea
        withAsterisk
        label="Job Summary"
        autosize
        minRows={3}
        placeholder="Enter about job..."
        value={description}
        onChange={(event) => setdescription(event.currentTarget.value)}
      />
      <div className="flex gap-10 [&>*]:w-1/2 pb-2">
        <MonthPickerInput
          withAsterisk
          maxDate={enddate || undefined}
          label="Start date"
          placeholder="Pick Date"
          value={startdate}
          onChange={setstartdate}
        />
        <MonthPickerInput
          disabled={checked}
          withAsterisk
          minDate={startdate || undefined}
          maxDate={new Date()}
          label="End date"
          placeholder="Pick Date"
          value={enddate}
          onChange={setenddate}
        />
      </div>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        autoContrast
        label="Current Working"
      />
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
export default ExpInput;
