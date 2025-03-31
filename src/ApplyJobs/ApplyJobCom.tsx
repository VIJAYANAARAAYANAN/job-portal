import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconArrowLeft, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { IconX, IconCheck } from "@tabler/icons-react";
import { Notification } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ApplyJobCom = () => {
  const [preview, setpreview] = useState(false);
  const [submit, setsubmit] = useState(false);
  const [second, setsecond] = useState(5);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setsubmit(!submit);
    let x = 5;
    setInterval(() => {
      x--;
      setsecond(x);
      if (x == 0) navigate("/find-jobs");
    }, 1000);
  };
  const handlePreviewClick = () => {
    setpreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="p-3 w-2/3 mx-auto">
        <LoadingOverlay
          className="!fixed "
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "blue-ribbon.5", type: "bars" }}
        />
        <div className="flex justify-between ">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-[rgb(255,255,255)] rounded-xl">
              <img className="h-14 w-14" src="Icons/Google.png" alt="logo" />
            </div>

            <div>
              <div className="font-semibold text-xl text-[#275DF5]">
                Software Engineer III
              </div>
              <div className="text-lg  font-semibold font-[Poppins] text-[#343434]">
                Google &#x2022; 3 Days ago &#x2022; 48 Applications
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold text-[#257DF5] mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              className={`${preview ? "font-semibold" : ""}`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              withAsterisk
              label="Full Name"
              placeholder="Enter name"
            />
            <TextInput
              className={`${preview ? "font-semibold" : ""}`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              withAsterisk
              label="E-mail"
              placeholder="Enter E-mail"
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              className={`${preview ? "font-semibold" : ""}`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              clampBehavior="strict"
              min={0}
              max={9999999999}
              withAsterisk
              label="Phone Number"
              placeholder="Enter Phone-No"
              hideControls
            />
            <TextInput
              className={`${preview ? "font-semibold" : ""}`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              withAsterisk
              label="Personal Website"
              placeholder="Enter URL"
            />
          </div>
          <FileInput
            className={`${preview ? "font-semibold" : ""}`}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            withAsterisk
            leftSection={<IconPaperclip size={20} stroke={1.5} />}
            label="Attach your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
          />
          <Textarea
            className={`${preview ? "font-semibold" : ""}`}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            withAsterisk
            placeholder="Cover Letter"
            label="Type something about yourself..."
            autosize
            minRows={4}
          />
          {!preview && (
            <Button
              onClick={handlePreviewClick}
              variant="light"
              color="#275DF5"
            >
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                fullWidth
                onClick={handlePreviewClick}
                variant="Outline"
                color="#275DF5"
              >
                Edit
              </Button>
              <Button
                fullWidth
                onClick={handleSubmit}
                variant="light"
                color="#275DF5"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>

      {submit && (
        <Notification
          className={`!border-[#275DF5] z-[1001] -translate-y-20 !fixed top-0 left-[37%] transition duration-300 ease-in-out ${
            submit ? "translate-y-0" : "translate-y-20 "
          }`}
          icon={<IconCheck size={20} color="white" />}
          title="Application Submitted"
          mt="md"
          withBorder
          withCloseButton={false}
        >
          Redirecting to find Jobs in {second} seconds...
        </Notification>
      )}
    </>
  );
};
export default ApplyJobCom;
